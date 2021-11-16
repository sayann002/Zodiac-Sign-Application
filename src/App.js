import React, { useState } from "react";
import "./App.css";
import Zodiac from "./components/Zodiac";
import ZodiacTime from "./components/ZodiacTime";
import ZodiacDescription from "./components/ZodiacDescription";
//import { BrowserRouter as Router, Route,Switch,Link  } from "react-router-dom";

function App() {
  const [zodiacSign, setZodiacSign] = useState(null);
  const [day, setDay] = useState(null);

  const restart = () => {
    setZodiacSign(null);
    setDay(null);
  };

  return (
    <div className="App">
      <h1>Zodiac Sign Application</h1>
      {/*      <h2>Select a zodiac sign to get the authentic information</h2>
       */}
      {!zodiacSign && <Zodiac selectedZodiac={setZodiacSign} />}

      {zodiacSign && !day && (
        <ZodiacTime restart={restart} selectedDay={setDay} />
      )}
      {zodiacSign && day && (
        <ZodiacDescription
          restart={restart}
          sign={zodiacSign}
          timeframe={day}
        />
      )}

      {/* <button className="btn" onClick={restart}>
        Go Back
      </button>*/}
    </div>
  );
}

export default App;
