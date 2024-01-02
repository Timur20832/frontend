import React from "react";
import ButtonStyle from "./cursorElement.module.css";

import { ReactComponent as CursorNavbarSVG } from "../../../../sources/navbar icons/cursor-navbar-icon.svg";

const CursorElement = () => {
  return (
    <button className={ButtonStyle.buttontools}>
      <CursorNavbarSVG />
    </button>
  );
};

export default CursorElement;
