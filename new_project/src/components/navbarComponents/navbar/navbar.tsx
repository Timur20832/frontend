import React from "react";
import NavbarStyle from "./navbar.module.css";
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
import { useAppSelector } from "../../../redux/hooks";

export function Navbar() {
  const slides = useAppSelector((state) => state.slides);
  const presentation = useAppSelector((state) => state.presentation);
  return (
    <div className={NavbarStyle.navbar}>
      <LogoPresentation />
      <NamePresentation />
      <div className={NavbarStyle.first_group_buttontools}>
        <CreateSlide slides={slides} />
        <DeleteSlide slides={slides} />
        <span className={NavbarStyle.separator}></span>
        <ExportFile presentation={presentation} />
        <ImportFile/>
      </div>
      <div className={NavbarStyle.second_group_buttontools}>
        <CursorComponent />
        <span className={NavbarStyle.separator}></span>
        <TextElement setActive={prop.setActive} />
        <span className={NavbarStyle.separator}></span>
        <CircleElement setActive={prop.setActive} />
        <span className={NavbarStyle.separator}></span>
        <TrinagleElement setActive={prop.setActive} />
        <span className={NavbarStyle.separator}></span>
        <SquareElement setActive={prop.setActive} />
      </div>
    </div>
  );
}
