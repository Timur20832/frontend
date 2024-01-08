import React from "react";
import ButtonStyle from "./borderPainterElement.module.css";

import { ReactComponent as CursorNavbarSVG } from "../../../../sources/navbar icons/cursor-navbar-icon.svg";
import { useAppActions } from "../../../../redux/hooks";
import { ToolState } from "../../../../data/types";

type prop = {
  toolState: ToolState;
};

const BorderPainterElement = (prop: prop) => {
  const { createChangeElementBorderColor } = useAppActions();
  const repaintBorder = () => {
    createChangeElementBorderColor(prop.toolState.activeColor);
  };
  return (
    <button className={ButtonStyle.buttontools} onClick={repaintBorder}>
      <CursorNavbarSVG />
    </button>
  );
};

export default BorderPainterElement;