import React from "react";
import "../styles/DriverHero.css";

const driver = [
  {
    name: "Lando Norris",
    driverImage: "/assets/drivers/norris.png",
    number: 4,
    flag: "/assets/flags/USA.png"
  }
];

const DriverHero = () => {
  const d = driver[0];

  return (
    <div className="heroContainer">
      <div className="driverImageWrapper">
        <img src={d.driverImage} alt={d.name} className="driverPortrait" />
      </div>
      <div className="driverInfo">
        <div className="driverHeader">
          <h1 className="driverName">{d.name}</h1>
          <h2 className="driverNumber">#{d.number}</h2>
        </div>
        <img src={d.flag} alt="flag" className="flagIcon" />
      </div>
    </div>
  );
};

export default DriverHero;