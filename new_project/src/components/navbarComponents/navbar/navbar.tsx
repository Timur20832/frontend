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
import BorderPainterComponent from "../slideToolsComponents/borderPainterComponent/borderPainterElement";
import SlidePainterComponent from "../slideToolsComponents/slidePainterComponent/slidePainterElement";
import FigurePainterComponent from "../slideToolsComponents/figurePainterComponent/figurePainterElement";
import ShowPresentationButton from "../../main/showPresentation/showPresentationButton";
import { PresentationState } from "../../../data/types";

type prop = {
  presentationState: PresentationState;
};

function Navbar(prop: prop) {
  const presentation = useAppSelector((state) => state.presentation);
  const slides = useAppSelector((state) => state.slides);
  const toolState = useAppSelector((state) => state.toolState);
  return (
    <div
      className={NavbarStyle.navbar}
      style={{
        visibility: presentation.ViewMode ? "hidden" : "visible",
        opacity: presentation.ViewMode ? "0" : "100%",
        width: presentation.ViewMode ? "0" : "100vw",
        height: presentation.ViewMode ? "0" : "65px",
      }}
    >
      <LogoPresentation />
      <NamePresentation />
      <div className={NavbarStyle.first_group_buttontools}>
        <CreateSlide slides={slides} />
        <DeleteSlide slides={slides} />
        <span className={NavbarStyle.separator}></span>
        <ExportFile
          presentation={prop.presentationState.Presentation}
          slides={slides}
        />
        <ImportFile />
        <span className={NavbarStyle.separator}></span>
        <ShowPresentationButton />
      </div>
      <div
        className={NavbarStyle.second_group_buttontools}
        style={{
          visibility: presentation.ViewMode ? "hidden" : "visible",
          opacity: presentation.ViewMode ? "0" : "100%",
          width: presentation.ViewMode ? "0" : "",
          height: presentation.ViewMode ? "0" : "",
          margin: presentation.ViewMode ? "-1000px 0 0 0" : "10px 0 10px 100px",
        }}
      >
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
        <ColorPalleteElement />
        <span className={NavbarStyle.separator}></span>
        <BorderPainterComponent toolState={toolState} />
        <span className={NavbarStyle.separator}></span>
        <FigurePainterComponent toolState={toolState} />
        <span className={NavbarStyle.separator}></span>
        <SlidePainterComponent toolState={toolState} />
        <span className={NavbarStyle.separator}></span>
      </div>
    </div>
  );
}

export default Navbar;
