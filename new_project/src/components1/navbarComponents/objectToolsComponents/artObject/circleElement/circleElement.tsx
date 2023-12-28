import React from "react";
import style from "./circleElement.module.css";
import shapetext from "./shapecircle.png";

const CircleElement = () => {
  return (
    <button className={`${style.buttontools} ${style.active}`}>
      <img className={style.icontools} src={shapetext} alt="" />
    </button>
  );
};

export default CircleElement;
