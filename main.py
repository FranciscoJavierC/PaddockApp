from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import requests
import json
import fastf1 as ff
import pandas as pd

app = FastAPI()
ff.Cache.enable_cache('cache/')
JOLPICA_API_BASE_URL = "http://api.jolpi.ca/ergast/f1/"

origins = [
    "http://localhost:5173",  # The correct origin for your Vite React app
    "http://localhost",
    "*",  # Be cautious with this in production
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/schedule")
async def get_schedule(season: int = 2025):
    url = f"{JOLPICA_API_BASE_URL}{season}.json"
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        race_list = data.get('MRData', {}).get('RaceTable', {}).get('Races', [])
        schedule_data = [{"round": race['round'], "raceName": race['raceName'], "circuitId": race['Circuit']['circuitId'], "circuitName": race['Circuit']['circuitName'], "location": race['Circuit']['Location']['country'], "date": race['date'], "time": race.get('time')} for race in race_list]
        return schedule_data
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=f"Error fetching schedule: {e}")

@app.get("/constructor/{constructor_id}")
async def get_constructor_info(constructor_id: str):
    url = f"{JOLPICA_API_BASE_URL}constructors/{constructor_id.lower()}.json"
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        constructor_list = data.get('MRData', {}).get('ConstructorTable', {}).get('Constructors', [])
        if constructor_list:
            return constructor_list[0]
        else:
            raise HTTPException(status_code=404, detail="Constructor not found")
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=f"Error fetching constructor info: {e}")

@app.get("/constructor/{constructor_id}/drivers")
async def get_constructor_drivers(constructor_id: str, season: int = 2025):
    url = f"{JOLPICA_API_BASE_URL}{season}/constructors/{constructor_id.lower()}/drivers.json"
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        driver_list = data.get('MRData', {}).get('DriverTable', {}).get('Drivers', [])
        if driver_list:
            return {"constructor": constructor_id.upper(), "drivers": [driver['driverId'] for driver in driver_list]}
        else:
            raise HTTPException(status_code=404, detail=f"No drivers found for constructor {constructor_id.upper()} in {season}")
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=f"Error fetching drivers for constructor: {e}")
    
@app.get("/driver/{driver_id}")
async def get_driver_info(driver_id: str):
    url = f"{JOLPICA_API_BASE_URL}drivers/{driver_id.lower()}.json"
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        driver_list = data.get('MRData', {}).get('DriverTable', {}).get('Drivers', [])
        if driver_list:
            return driver_list[0]
        else:
            raise HTTPException(status_code=404, detail="Driver not found")
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=f"Error fetching driver info: {e}")

@app.get("/standings/drivers/{season}")
async def get_driver_standings(season: int):
    url = f"{JOLPICA_API_BASE_URL}{season}/driverstandings.json"
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        standings_list = data.get('MRData', {}).get('StandingsTable', {}).get('StandingsLists', [])
        if standings_list and standings_list[0].get('DriverStandings'):
            driver_standings = standings_list[0]['DriverStandings']
            standings = []
            for entry in driver_standings:
                driver = entry.get('Driver', {})
                constructor = entry.get('Constructors', [{}])[0]
                standings.append({
                    "position": int(entry.get('position', 0)),
                    "points": float(entry.get('points', 0)),
                    "wins": int(entry.get('wins', 0)),
                    "driverId": driver.get('driverId'),
                    "firstName": driver.get('givenName'),
                    "lastName": driver.get('familyName'),
                    "constructorName": constructor.get('name')
                })
            return {"season": season, "driver_standings": standings}
        else:
            raise HTTPException(status_code=404, detail=f"Could not retrieve driver standings for {season}")
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=f"Error fetching driver standings: {e}")

@app.get("/standings/constructors/{season}")
async def get_constructor_standings(season: int):
    url = f"{JOLPICA_API_BASE_URL}{season}/constructorstandings.json"
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        standings_list = data.get('MRData', {}).get('StandingsTable', {}).get('StandingsLists', [])
        if standings_list and standings_list[0].get('ConstructorStandings'):
            constructor_standings = standings_list[0]['ConstructorStandings']
            standings = []
            for entry in constructor_standings:
                constructor = entry.get('Constructor', {})
                standings.append({
                    "position": int(entry.get('position', 0)),
                    "points": float(entry.get('points', 0)),
                    "constructorId": constructor.get('constructorId'),
                    "name": constructor.get('name')
                })
            return {"season": season, "constructor_standings": standings}
        else:
            raise HTTPException(status_code=404, detail=f"Could not retrieve constructor standings for {season}")
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=f"Error fetching constructor standings: {e}")
