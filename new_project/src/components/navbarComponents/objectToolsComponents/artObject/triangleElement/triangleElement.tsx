import React from "react";
import ButtonStyle from "./triangleElement.module.css";
import { ReactComponent as TriangleNavbarSVG } from "../../../../../sources/navbar icons/triangle-navbar-icon.svg";
import { useAppActions } from "../../../../../redux/hooks";

const TriangleElement = () => {
  const { createChooseToolAction } = useAppActions();
  const changeActive = () => createChooseToolAction("triangle");
  return (
    <button className={ButtonStyle.buttontools} onClick={changeActive}>
      <TriangleNavbarSVG />
    </button>
  );
};

export default TriangleElement;
