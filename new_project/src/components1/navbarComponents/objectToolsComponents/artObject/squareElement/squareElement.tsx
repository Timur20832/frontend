import React from "react";
import style from "./squareElement.module.css";
import shapetext from "./shapesquare.png";

const SquareElement = () => {
  return (
    <button className={`${style.buttontools} ${style.active}`}>
      <img className={style.icontools} src={shapetext} alt="" />
    </button>
  );
};

export default SquareElement;
