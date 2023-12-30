import React from "react";

// import Button styles
import ButtonStyle from "./circleElement.module.css";

// import svg / svg's
import { ReactComponent as CircleNavbarSVG } from "../../../../../sources/navbar icons/circle-navbar-icon.svg";

type props = { setActive: (active: string) => void };

const CircleElement = (prop: props) => {
  const changeActive = () => prop.setActive("circle");
  return (
    <button
      className={`${ButtonStyle.buttontools} ${ButtonStyle.active}`}
      onClick={changeActive}
    >
        <CircleNavbarSVG />
    </button>
  );
};

export default CircleElement;
