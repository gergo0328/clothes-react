import React, { useState } from "react";
import "./Clothes.css";


function Clothes({ type, gender, product }) {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonText, setButtonText] = useState("Show more");

  const visibilityHandler = () => {
    setIsVisible(!isVisible);
    textChange();
  };

  const textChange = () => {
    if (buttonText === "Show more") {
      setButtonText("Show less");
    } else {
      setButtonText("Show more");
    }
  };

  return (
    <>
    <h2>{type} {gender}</h2>
    <h3 className={isVisible ? "" : "hidden"}>{product}</h3>
    {/* <h3 className={isVisible ? "" : "hidden"}>{color}</h3> */}
    <button onClick={visibilityHandler}>{buttonText}</button>
    </>
  )
}

export default Clothes;
