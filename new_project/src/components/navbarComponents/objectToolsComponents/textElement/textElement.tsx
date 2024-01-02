import React from "react";

// import Button styles
import ButtonStyle from "./textElement.module.css";

// import svg / svg's
import { ReactComponent as TextNavbarSVG } from "../../../../sources/navbar icons/text-navbar-icon.svg";
import { useAppActions } from "../../../../redux/hooks";

const TextElement = () => {
  const { createChooseToolAction } = useAppActions();
  const changeActive = () => createChooseToolAction("text");
  return (
    <button className={ButtonStyle.buttontools} onClick={changeActive}>
      <TextNavbarSVG />
    </button>
  );
};

export default TextElement;
