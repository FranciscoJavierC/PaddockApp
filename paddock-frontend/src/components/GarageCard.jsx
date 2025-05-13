import React from "react";
import "../styles/GarageView.css";

const GarageCard = ({ team }) => {
  const [leftDriver, rightDriver] = team.drivers;

  return (
    <div className="garagePage">
      <div className="garageCard" style={{ borderTop: `6px solid ${team.teamColor}` }}>
        {/* Nameplate Row */}
        <div className="garageNameplateRow">
          <div className="driverNameplate">
            <span className="driverNumber">#{leftDriver.number}</span>
            <span className="driverName">{leftDriver.name}</span>
            <span className="driverFlag">{leftDriver.country}</span>
          </div>

          <img src={team.teamLogo} alt={team.teamName} className="garageTeamLogo" />

          <div className="driverNameplate">
            <span className="driverFlag">{rightDriver.country}</span>
            <span className="driverName">{rightDriver.name}</span>
            <span className="driverNumber">#{rightDriver.number}</span>
          </div>
        </div>

        {/* Driver Portrait Row */}
        <div className="garageDriverImages">
          <img src={leftDriver.image} alt={leftDriver.name} className="garageDriverImage" />
          <img src={team.carImage} alt={`${team.teamName} car`} className="garageCarImage" />
          <img src={rightDriver.image} alt={rightDriver.name} className="garageDriverImage" />
        </div>
      </div>
    </div>
  );
};

export default GarageCard;