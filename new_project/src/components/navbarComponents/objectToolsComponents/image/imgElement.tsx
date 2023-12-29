import React from "react";
import style from "./imgElement.module.css";
import shapetext from "./shapeimg.png";

const ImageElement = () => {
  return (
    <button className={`${style.buttontools} ${style.active}`}>
      <img className={style.icontools} src={shapetext} alt="" />
    </button>
  );
};

export default ImageElement;
