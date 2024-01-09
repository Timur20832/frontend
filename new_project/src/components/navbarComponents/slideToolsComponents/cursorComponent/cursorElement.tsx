import React from "react";
import ButtonStyle from "./cursorElement.module.css";

import { ReactComponent as TrashBinNavbarSVG } from "../../../../sources/navbar icons/trashbin-navbar-icon.svg";
import { useAppActions } from "../../../../redux/hooks";

const TrashBinElement = () => {
  const { createDeleteActiveElementAction } = useAppActions();
  const deleteElement = () => {
    createDeleteActiveElementAction();
  };
  return (
    <button className={ButtonStyle.buttontools} onClick={deleteElement}>
      <TrashBinNavbarSVG />
    </button>
  );
};

export default TrashBinElement;
