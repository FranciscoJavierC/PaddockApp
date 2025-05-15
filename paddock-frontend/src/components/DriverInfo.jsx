import React from "react";
import "../styles/DriverInfo.css";

const driver = [
    {
        teamName: "McLaren",
        country: "United Kingdom",
        dobAge: "13/11/1999 (25)",
        birthPlace: "Bristol, England"
    }
]

const DriverInfo = () => {
    const i = driver[0];

    return (
        <div className="infoContainer">
            <div className="infoGrid">
                <div className="infoItem">
                    <span className="label">Team:</span>
                    <span className="value">{i.teamName}</span>
                </div>
                <div className="infoItem">
                    <span className="label">Country:</span>
                    <span className="value">{i.country}</span>
                </div>
                <div className="infoItem">
                    <span className="label">Date of Birth (Age):</span>
                    <span className="value">{i.dobAge}</span>
                </div>
                <div className="infoItem">
                    <span className="label">Place of Birth:</span>
                    <span className="value">{i.birthPlace}</span>
                </div>
            </div>
        </div>
    );
};

export default DriverInfo;

