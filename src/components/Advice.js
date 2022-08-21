import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Advice.scss";
import dividerImage from "../images/pattern-divider-desktop.svg";
import diceImage from "../images/icon-dice.svg";
const Advice = () => {
  const [adviceData, setAdviceData] = useState(null);
  const fetchAdvice = async () => {
    const { data } = await axios.get(
      `https://api.adviceslip.com/advice?t=${Math.random()}`
    );
    setAdviceData(data.slip);
  };
  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <>
      {adviceData && (
        <div className="container">
          <div className="advice_output" key={adviceData.id}>
            <h1 className="title">Advice #{adviceData.id}</h1>
            <p className="advice">
              <q>{adviceData.advice}</q>
            </p>
          </div>
          <img className="divider" src={dividerImage} alt="divider" />
          <button className="dice" onClick={() => fetchAdvice()}>
            <img src={diceImage} alt="dice" />
          </button>
        </div>
      )}
    </>
  );
};

export default Advice;
