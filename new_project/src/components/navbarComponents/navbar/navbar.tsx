import React from "react";
import style from "./navbar.module.css";
import ImageElement from "../objectToolsComponents/image/imgElement";
import CircleElement from "../objectToolsComponents/artObject/circleElement/circleElement";
import TrinagleElement from "../objectToolsComponents/artObject/triangleElement/triangleElement";
import SquareElement from "../objectToolsComponents/artObject/squareElement/squareElement";
import TextElement from "../objectToolsComponents/textElement/textElement";
import CreateSlide from "../slideToolsComponents/createSlide/createSlide";
import DeleteSlide from "../slideToolsComponents/deleteSlide/deleteSlide";
import DownloadFile from "../slideToolsComponents/downloadFile/downloadFile";
import ExportFile from "../slideToolsComponents/exportFile/exportFile";
import LogoPresentation from "../presentationToolsComponents/logoPresentation/logoPresentation";
import NamePresentation from "../presentationToolsComponents/namePresentation/namePresentation";

export function Navbar() {
  return (
    <div className={style.navbar}>
      <LogoPresentation />
      <div className={style.info}>
        <NamePresentation />
        <div className={style.info__main}>
          <div className={style.info__menubar}>
            <CreateSlide />
            <DeleteSlide />
            <DownloadFile />
            <ExportFile />
          </div>
          <div className={style.info__tools}>
            <TextElement />
            <ImageElement />
            <CircleElement />
            <TrinagleElement />
            <SquareElement />
          </div>
        </div>
      </div>
    </div>
  );
}
