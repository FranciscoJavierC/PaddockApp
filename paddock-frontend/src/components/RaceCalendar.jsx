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
  // Add more races as needed
];

const RaceCalendar = () => {
  return (
    <div className="calendarPage">
      <div className="calendarContainer">
        {raceData.map((race, index) => (
          <div className="gridRow" key={index}>
            {/* Left side number (if grid is right-aligned) */}
            {index % 2 === 0 && (
              <div className="roundNumberOutside">
                <div className="roundText">Round</div>
                <div className="roundDigit">{race.round}</div>
              </div>
            )}

            {/* Grid Box */}
            <div
              className={`gridBox ${index % 2 === 0 ? "right" : "left"} ${
                index > 0 ? "lower" : ""
              }`}
            >
              <div className="gridBoxContent">
                <div className="gridBoxTop">
                  <img src={race.flag} alt={`${race.name} flag`} className="flagIcon" />
                </div>
                <div className="dateRange">{race.dateRange}</div>
                <div className="raceName">{race.name}</div>
                <div className="raceTitle">{race.fullTitle}</div>
                <img
                  src={race.circuitMap}
                  alt={`${race.name} circuit`}
                  className="circuitMap"
                />
              </div>
            </div>

            {/* Right side number (if grid is left-aligned) */}
            {index % 2 !== 0 && (
              <div className="roundNumberOutside">
                <div className="roundText">Round</div>
                <div className="roundDigit">{race.round}</div>
              </div>
            )}
          </div>
        ))}
        </div>
    </div>
  );
};

export default RaceCalendar;