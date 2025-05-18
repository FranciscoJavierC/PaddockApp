import React from "react";
import "../styles/DriverHero.css";

const driver = [
  {
    name: "Lando Norris",
    image: "/assets/drivers/norris.png",
    number: 4,
    flag: "/assets/flags/USA.png",
    team: "McLaren",
    country: "United Kingdom",
    dob: "(13/11/1999)",
    age: "25"
  }
];

const DriverHero = () => {
  const d = driver[0];

  return (
    <div className="driverHeaderCard">
      <img src={d.image} alt={d.name} className="driverPhoto" />
      <div className="driverInfoBlock">
        <h1 className="driverName">
          #{d.number} {d.name} <img src={d.flag} alt="flag" className="flagIcon" />
        </h1>
        <p className="driverTeam">{d.team}</p>
        <p className="driverDOB">Age: {d.age} {d.dob}</p>
      </div>
    </div>
  );
};

export default DriverHero;