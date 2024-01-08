import React from "react";
import ButtonStyle from "./figurePainterElement.module.css";

import { ReactComponent as CursorNavbarSVG } from "../../../../sources/navbar icons/cursor-navbar-icon.svg";
import { useAppActions } from "../../../../redux/hooks";
import { ToolState } from "../../../../data/types";

type prop = {
  toolState: ToolState;
};
const FigurePainterElement = (prop: prop) => {
  const { createChangeElementColor } = useAppActions();
  const deleteElement = () => {
    createChangeElementColor(prop.toolState.activeColor);
  };
  return (
    <button className={ButtonStyle.buttontools} onClick={deleteElement}>
      <CursorNavbarSVG />
    </button>
  );
};

export default FigurePainterElement;
