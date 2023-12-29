import React from "react";
import { Presentation } from "../../data/types";
import ShowSlide from "./mainSlide/mainSlide";
import ShowSlider from "./slider/slider";

// import Editor styles
import EditorStyle from "./editor.module.css";

const Editor = ({ presentation }: { presentation: Presentation }) => {
  return (
    <div style={{ display: "flex", width: "100vw" }}>
      <ShowSlider presentation={presentation} />
      <div className={EditorStyle.slide_area}>
        <ShowSlide presentation={presentation} />
      </div>
    </div>
  );
};

export default Editor;
