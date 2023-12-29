import React from "react";
import style from "./textElement.module.css";
import shapetext from "./shapetext.png";

const TextElement = () => {
  return (
    <button className={`${style.buttontools} ${style.active}`}>
      <img className={style.icontools} src={shapetext} alt="" />
    </button>
  );
};

export default TextElement;
