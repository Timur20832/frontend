import React from "react";

// import Button styles
import ButtonStyle from "./textElement.module.css";

// import svg / svg's
import { ReactComponent as TextNavbarSVG } from "../../../../sources/navbar icons/text-navbar-icon.svg";

const TextElement = () => {
  return (
    <button className={ButtonStyle.buttontools}>
      <TextNavbarSVG />
    </button>
  );
};

export default TextElement;
