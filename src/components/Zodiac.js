import React from "react";

const Zodiac = ({ selectedZodiac }) => {
  let signs = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
  ];
  return (
    <>
      <div className="grid">
        {signs.map((zodiac) => (
          <button
            className="zodiac"
            key={zodiac}
            onClick={() => selectedZodiac(zodiac)}
          >
            {zodiac}
          </button>
        ))}
      </div>
    </>
  );
};

export default Zodiac;
