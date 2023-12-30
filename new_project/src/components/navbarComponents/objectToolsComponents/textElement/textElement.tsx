import React from "react";

// import Button styles
import ButtonStyle from "./textElement.module.css";

// import svg / svg's
import { ReactComponent as TextNavbarSVG } from "../../../../sources/navbar icons/text-navbar-icon.svg";

type props = {
  setActive: (active: string) => void;
};

const TextElement = (prop: props) => {
  const changeActive = () => prop.setActive("text");
  return (
    <button className={ButtonStyle.buttontools} onClick={changeActive}>
      <TextNavbarSVG />
    </button>
  );
};

export default TextElement;
