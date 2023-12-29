import React from "react";

// import Navbar styles
import NavbarStyle from "./navbar.module.css";

// import objects
import ImageElement from "../objectToolsComponents/image/imgElement";
import CircleElement from "../objectToolsComponents/artObject/circleElement/circleElement";
import TrinagleElement from "../objectToolsComponents/artObject/triangleElement/triangleElement";
import SquareElement from "../objectToolsComponents/artObject/squareElement/squareElement";
import TextElement from "../objectToolsComponents/textElement/textElement";
import CreateSlide from "../slideToolsComponents/createSlide/createSlide";
import DeleteSlide from "../slideToolsComponents/deleteSlide/deleteSlide";
import ImportFile from "../slideToolsComponents/importFile/importFile";
import ExportFile from "../slideToolsComponents/exportFile/exportFile";
import LogoPresentation from "../presentationToolsComponents/logoPresentation/logoPresentation";
import NamePresentation from "../presentationToolsComponents/namePresentation/namePresentation";
import CursorComponent from "../slideToolsComponents/cursorComponent/cursorElement";

import { Presentation } from "../../../data/types";

type navBarProps = {
  presentation: Presentation;
  setPresentation: (presentation: Presentation) => void;
};

export function Navbar(prop: navBarProps) {
  return (
    <div className={NavbarStyle.navbar}>
      <LogoPresentation />
      <NamePresentation />
      <div className={NavbarStyle.first_group_buttontools}>
        <CreateSlide />
        <DeleteSlide />
        <span className={NavbarStyle.separator}></span>
        <ExportFile presentation={prop.presentation} />
        <ImportFile
          presentation={prop.presentation}
          setPresentation={prop.setPresentation}
        />
      </div>
      <div className={NavbarStyle.second_group_buttontools}>
        <CursorComponent />
        <span className={NavbarStyle.separator}></span>
        <TextElement />
        <span className={NavbarStyle.separator}></span>
        <ImageElement />
        <span className={NavbarStyle.separator}></span>
        <CircleElement />
        <span className={NavbarStyle.separator}></span>
        <TrinagleElement />
        <span className={NavbarStyle.separator}></span>
        <SquareElement />
      </div>
    </div>
  );
}
