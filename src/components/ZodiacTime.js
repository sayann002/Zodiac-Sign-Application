import React from "react";

const ZodiacTime = ({ selectedDay, restart }) => {
  return (
    <>
      <div id="time">
        <h2>Click on Today and get the Zodiac Information</h2>
        {["today"].map((day) => (
          <button className="day" key={day} onClick={() => selectedDay(day)}>
            {day}
          </button>
        ))}
        <button className="btn" onClick={restart}>
          Go Back
        </button>
      </div>
    </>
  );
};

export default ZodiacTime;
