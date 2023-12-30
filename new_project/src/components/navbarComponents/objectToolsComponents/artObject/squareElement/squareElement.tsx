import React from "react";

// import Button styles
import ButtonStyle from "./squareElement.module.css";

// import svg / svg's
import { ReactComponent as SquareNavbarSVG } from "../../../../../sources/navbar icons/square-navbar-icon.svg";

type props = { setActive: (active: string) => void };

const SquareElement = (prop: props) => {
  const changeActive = () => prop.setActive("square");
  return (
    <button className={ButtonStyle.buttontools} onClick={changeActive}>
      <SquareNavbarSVG />
    </button>
  );
};

export default SquareElement;
