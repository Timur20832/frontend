import React from "react";

// import Button styles
import ButtonStyle from "./circleElement.module.css";

// import svg / svg's
import { ReactComponent as CircleNavbarSVG } from "../../../../../sources/navbar icons/circle-navbar-icon.svg";

const CircleElement = () => {
  return (
    <button className={ButtonStyle.buttontools}>
      <CircleNavbarSVG />
    </button>
  );
};

export default CircleElement;
