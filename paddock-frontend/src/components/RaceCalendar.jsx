import React from "react";
import "../styles/RaceCalendar.css";

const raceData = [
  {
    round: 1,
    name: "Australia",
    dateRange: "14 - 16 Mar 2025",
    fullTitle: "FORMULA 1 ROLEX AUSTRALIAN GRAND PRIX 2025",
    flag: "/assets/flags/USA.png",
    circuitMap: "/assets/circuits/miami-circuit.png",
  },
  {
    round: 2,
    name: "Saudi Arabia",
    dateRange: "21 - 23 Mar 2025",
    fullTitle: "FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2025",
    flag: "/assets/flags/USA.png",
    circuitMap: "/assets/circuits/miami-circuit.png",
  },
  // ...add more races
];

const RaceCalendar = () => {
  return (
    <div className="calendarPage">
      <div className="gridWrapper">
        {raceData.map((race, index) => (
          <div
            key={index}
            className={`gridBox ${index % 2 === 0 ? "right" : "left"} ${
              index > 0 ? "lower" : ""
            }`}
          >
            <div className="gridBoxContent">
              <div className="gridBoxTop">
                <span className="roundLabel">ROUND {race.round}</span>
                <img src={race.flag} alt={`${race.name} flag`} className="flagIcon" />
              </div>
              <div className="dateRange">{race.dateRange}</div>
              <div className="raceName">{race.name}</div>
              <div className="raceTitle">{race.fullTitle}</div>
              <img src={race.circuitMap} alt={`${race.name} circuit`} className="circuitMap" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RaceCalendar;