import React from "react";
import { Presentation } from "../../data/types";
import ShowSlide from "./mainSlide/mainSlide";
import ShowSlider from "./slider/slider";

// import Editor styles
import EditorStyle from "./editor.module.css";
import { useAppSelector } from "../../redux/hooks";

const Editor = () => {
  const slides = useAppSelector((state) => state.slides);
  const toolState = useAppSelector((state) => state.toolState);
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <ShowSlider slides={slides} />
      <div className={EditorStyle.slide_area}>
        <ShowSlide slides={slides} activeTool={toolState.activeTool} />
      </div>
    </div>
  );
};

export default Editor;
