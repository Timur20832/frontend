import React from "react";
import style from "./textElement.module.css";
import shapetext from "./shapetext.png";

type props = {
  setActive: (active: string) => void;
};

const TextElement = (prop: props) => {
  const changeActive = () => prop.setActive("text");
  return (
    <button
      className={`${style.buttontools} ${style.active}`}
      onClick={changeActive}
    >
      <img className={style.icontools} src={shapetext} alt="" />
    </button>
  );
};

export default TextElement;
