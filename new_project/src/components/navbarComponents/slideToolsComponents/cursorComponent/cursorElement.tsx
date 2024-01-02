import React from "react";
import ButtonStyle from "./cursorElement.module.css";

import { ReactComponent as CursorNavbarSVG } from "../../../../sources/navbar icons/cursor-navbar-icon.svg";
import { useAppActions } from "../../../../redux/hooks";

const CursorElement = () => {
  const { createDeleteActiveElementAction } = useAppActions();
  const deleteElement = () => {
    createDeleteActiveElementAction();
  };
  return (
    <button className={ButtonStyle.buttontools} onClick={deleteElement}>
      <CursorNavbarSVG />
    </button>
  );
};

export default CursorElement;
