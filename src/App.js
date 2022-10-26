import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("");
  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
        // console.log(advice);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(fetchAdvice, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
};

export default App;
