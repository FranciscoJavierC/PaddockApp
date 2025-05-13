import React from "react";
import GarageCard from "./GarageCard";
import "../styles/GarageView.css";

const constructors = [
  {
    teamName: "McLaren",
    teamColor: "#FF8700",
    teamLogo: "/assets/constructors/mclaren.png",
    carImage: "/assets/cars/mclaren_car.png",
    drivers: [
      {
        id: "norris",
        name: "Lando Norris",
        number: 4,
        country: "🇬🇧",
        image: "/assets/drivers/norris.png",
      },
      {
        id: "piastri",
        name: "Oscar Piastri",
        number: 81,
        country: "🇦🇺",
        image: "/assets/drivers/piastri.png",
      },
    ],
  },
  {
    teamName: "Ferrari",
    teamColor: "#DC0000",
    teamLogo: "/assets/constructors/ferrari.png",
    carImage: "/assets/cars/mclaren_car.png",
    drivers: [
      {
        id: "leclerc",
        name: "Charles Leclerc",
        number: 16,
        country: "🇲🇨",
        image: "/assets/drivers/leclerc.png",
      },
      {
        id: "hamilton",
        name: "Lewis Hamilton",
        number: 44,
        country: "🇬🇧",
        image: "/assets/drivers/hamilton.png",
      },
    ],
  },
];

const GarageView = () => {
  return (
    <div className="garagePage">
      {constructors.map((team, idx) => (
        <GarageCard key={idx} team={team} />
      ))}
    </div>
  );
};

export default GarageView;