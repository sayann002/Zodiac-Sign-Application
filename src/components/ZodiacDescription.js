import React, { useState, useEffect } from "react";
import { getHoroscope } from "../api/api";

const ZodiacDescription = ({ sign, timeframe, restart }) => {
  const [horoscope, setHoroscope] = useState([]);

  useEffect(() => {
    getHoroscope(sign, timeframe).then(setHoroscope);
  }, [sign, timeframe]);

  return (
    <>
      <i
        style={{ color: "black", fontSize: "25px", textTransform: "uppercase" }}
      >
        {timeframe}, your horoscope for {sign} is...
      </i>{" "}
      <p style={{ fontSize: "20px" }}>{horoscope}</p>
      <button className="btn" onClick={restart}>
        Go Back
      </button>
    </>
  );
};

export default ZodiacDescription;
