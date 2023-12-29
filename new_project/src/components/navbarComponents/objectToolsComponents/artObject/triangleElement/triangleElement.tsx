import React from "react";

// import Button styles
import ButtonStyle from "./triangleElement.module.css";

// import svg / svg's
import { ReactComponent as TriangleNavbarSVG } from "../../../../../sources/navbar icons/triangle-navbar-icon.svg";

const TriangleElement = () => {
  return (
    <button className={ButtonStyle.buttontools}>
      <TriangleNavbarSVG />
    </button>
  );
};

export default TriangleElement;
