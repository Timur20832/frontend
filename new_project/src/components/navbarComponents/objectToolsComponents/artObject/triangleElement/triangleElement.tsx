import React from "react";

// import Button styles
import ButtonStyle from "./triangleElement.module.css";

// import svg / svg's
import { ReactComponent as TriangleNavbarSVG } from "../../../../../sources/navbar icons/triangle-navbar-icon.svg";

type props = { setActive: (active: string) => void };

const TriangleElement = (prop: props) => {
  const changeActive = () => prop.setActive("triangle");
  return (
    <button className={ButtonStyle.buttontools} onClick={changeActive}>
      <TriangleNavbarSVG />
    </button>
  );
};

export default TriangleElement;
