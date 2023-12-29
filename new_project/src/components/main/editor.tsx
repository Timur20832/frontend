import React from "react";
import { Presentation } from "../../data/types";
import ShowSlide from "./mainSlide/mainSlide";
import ShowSlider from "./slider/slider";
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
      <ShowSlide presentation={prop.presentation} />
    </div>
  );
};

export default Editor;
