import React from "react";
import style from "./triangleElement.module.css";
import shapetext from "./shapetriangle.png";

type props = { setActive: (active: string) => void };

const TriangleElement = (prop: props) => {
  const changeActive = () => prop.setActive("triangle");
  return (
    <button
      className={`${style.buttontools} ${style.active}`}
      onClick={changeActive}
    >
      <img className={style.icontools} src={shapetext} alt="" />
    </button>
  );
};

export default TriangleElement;
