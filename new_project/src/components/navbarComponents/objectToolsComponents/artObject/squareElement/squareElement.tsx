import React from "react";

// import Button styles
import ButtonStyle from "./squareElement.module.css";

// import svg / svg's
import { ReactComponent as SquareNavbarSVG } from "../../../../../sources/navbar icons/square-navbar-icon.svg";

const SquareElement = () => {
  return (
    <button className={ButtonStyle.buttontools}>
      <SquareNavbarSVG />
    </button>
  );
};

export default SquareElement;
