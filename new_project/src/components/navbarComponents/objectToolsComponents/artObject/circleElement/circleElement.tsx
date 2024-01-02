import React from "react";
import ButtonStyle from "./circleElement.module.css";
import { ReactComponent as CircleNavbarSVG } from "../../../../../sources/navbar icons/circle-navbar-icon.svg";
import { useAppActions } from "../../../../../redux/hooks";

const CircleElement = () => {
  const { createChooseToolAction } = useAppActions();
  const changeActive = () => createChooseToolAction("circle");
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
