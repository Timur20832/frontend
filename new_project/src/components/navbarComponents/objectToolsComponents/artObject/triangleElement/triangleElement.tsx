import React from "react";
import style from "./triangleElement.module.css";
import shapetext from "./shapetriangle.png";

const TriangleElement = () => {
  return (
    <button className={`${style.buttontools} ${style.active}`}>
      <img className={style.icontools} src={shapetext} alt="" />
    </button>
  );
};

export default TriangleElement;
