import React from "react";
import DriverHero from "./DriverHero";
import DriverInfo from "./DriverInfo";
import "../styles/DriverDetail.css";
import { useParams } from "react-router-dom";

const DriverDetail = () => {
  const { id } = useParams();

  return (
    <div className="detailPage">
      <div className="driverLayout">
        <DriverHero />
        <DriverInfo />
      </div>
    </div>
  );
};

export default DriverDetail;