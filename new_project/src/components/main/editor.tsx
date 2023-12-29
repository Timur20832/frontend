import React from "react";
import { Presentation } from "../../data/types";
import ShowSlide from "./mainSlide/mainSlide";
import ShowSlider from "./slider/slider";

// import Editor styles
import EditorStyle from "./editor.module.css";

const Editor = ({ presentation }: { presentation: Presentation }) => {
type editorProps = {
  presentation: Presentation;
  setPresentation: (presentation: Presentation) => void;
};
const Editor = (prop: editorProps) => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <ShowSlider
        presentation={prop.presentation}
        setPresentation={prop.setPresentation}
      />
        <div className={EditorStyle.slide_area}>
            <ShowSlide presentation={presentation} />
        </div>
    </div>
  );
};

export default Editor;
