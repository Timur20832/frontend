import React from "react";

// import Button styles
import ButtonStyle from "./textElement.module.css";

// import svg / svg's
import {ReactComponent as TextNavbarSVG} from "../../../../sources/navbar icons/text-navbar-icon.svg";
import {useAppActions} from "../../../../redux/hooks";
import {ToolType} from "../../../../data/ToolTypes";

const TextElement = () => {
  const { createChooseToolAction } = useAppActions();
  const changeActive = () => {
    console.log(ToolType.TEXT);
    createChooseToolAction(ToolType.TEXT);
  };
  return (
    <button className={ButtonStyle.buttontools} onClick={changeActive}>
      <TextNavbarSVG />
    </button>
  );
};

export default TextElement;
