import React from "react";
import style from "./squareElement.module.css";
import shapetext from "./shapesquare.png";

type props = { setActive: (active: string) => void };

const SquareElement = (prop: props) => {
  const changeActive = () => prop.setActive("square");
  return (
    <button
      className={`${style.buttontools} ${style.active}`}
      onClick={changeActive}
    >
      <img className={style.icontools} src={shapetext} alt="" />
    </button>
  );
};

export default SquareElement;
