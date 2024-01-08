import React from "react";
import ButtonStyle from "./squareElement.module.css";
import { ReactComponent as SquareNavbarSVG } from "../../../../../sources/navbar icons/square-navbar-icon.svg";
import { useAppActions } from "../../../../../redux/hooks";
import { ToolType } from "../../../../../data/types";

const SquareElement = () => {
  const { createChooseToolAction } = useAppActions();
  const changeActive = () => createChooseToolAction(ToolType.SQUARE);
  return (
    <button className={ButtonStyle.buttontools} onClick={changeActive}>
      <SquareNavbarSVG />
    </button>
  );
};

export default SquareElement;
