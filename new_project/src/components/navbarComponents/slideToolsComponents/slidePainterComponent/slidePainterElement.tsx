import React from "react";
import ButtonStyle from "./slidePainterElement.module.css";

import { ReactComponent as CursorNavbarSVG } from "../../../../sources/navbar icons/cursor-navbar-icon.svg";
import { useAppActions } from "../../../../redux/hooks";
import { ToolState } from "../../../../data/types";

type prop = {
  toolState: ToolState;
};
const SlidePainterElement = (prop: prop) => {
  const { createChangeBackgroundColor } = useAppActions();
  const deleteElement = () => {
    console.log(prop.toolState.activeColor);
    createChangeBackgroundColor(prop.toolState.activeColor);
  };
  return (
    <button className={ButtonStyle.buttontools} onClick={deleteElement}>
      <CursorNavbarSVG />
    </button>
  );
};

export default SlidePainterElement;