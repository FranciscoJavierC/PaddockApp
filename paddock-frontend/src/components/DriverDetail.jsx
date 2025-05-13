import React from "react";
import DriverHero from "./DriverHero";
import "../styles/DriverDetail.css";
import { useParams } from "react-router-dom";

const DriverDetail = () => {
  const { id } = useParams();

  return (
    <div className="detailPage">
      <DriverHero />
    </div>
  );
};

export default DriverDetail;