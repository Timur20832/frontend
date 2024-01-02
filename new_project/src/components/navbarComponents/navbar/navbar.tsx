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
import { useAppSelector } from "../../../redux/hooks";
import ColorPalleteElement from "../slideToolsComponents/palleteSlide/palleteElement";
import TextPalleteElement from "../objectToolsComponents/textElement/fontPallete";
import ImageElement from "../objectToolsComponents/image/imgElement";
import CursorElement from "../slideToolsComponents/cursorComponent/cursorElement";

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
        <ExportFile presentation={presentation} slides={slides} />
        <ImportFile />
      </div>
      <div className={NavbarStyle.second_group_buttontools}>
        <CursorElement />
        <span className={NavbarStyle.separator}></span>
        <ImageElement slides={slides} />
        <span className={NavbarStyle.separator}></span>
        <TextElement />
        <span className={NavbarStyle.separator}></span>
        <TextPalleteElement />
        <span className={NavbarStyle.separator}></span>
        <CircleElement />
        <span className={NavbarStyle.separator}></span>
        <TrinagleElement />
        <span className={NavbarStyle.separator}></span>
        <SquareElement />
        <span className={NavbarStyle.separator}></span>
        <ColorPalleteElement slides={slides} />
      </div>
    </div>
  );
}
