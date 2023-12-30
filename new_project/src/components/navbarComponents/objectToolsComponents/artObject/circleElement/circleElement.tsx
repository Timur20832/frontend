import React from "react";
import style from "./circleElement.module.css";
import shapetext from "./shapecircle.png";

type props = { setActive: (active: string) => void };

const CircleElement = (prop: props) => {
  const changeActive = () => prop.setActive("circle");
  return (
    <button
      className={`${style.buttontools} ${style.active}`}
      onClick={changeActive}
    >
      <img className={style.icontools} src={shapetext} alt="" />
    </button>
  );
};

export default CircleElement;
