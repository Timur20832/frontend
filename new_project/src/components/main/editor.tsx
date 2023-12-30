import React from "react";
import { Presentation } from "../../data/types";
import ShowSlide from "./mainSlide/mainSlide";
import ShowSlider from "./slider/slider";

// import Editor styles
import EditorStyle from "./editor.module.css";

type props = {
  presentation: Presentation;
  active: string;
  setPresentation: (presentation: Presentation) => void;
  setActive: (active: string) => void;
};
const Editor = (prop: props) => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <ShowSlider
          presentation={prop.presentation}
          setPresentation={prop.setPresentation}
      />
      <ShowSlide
        presentation={prop.presentation}
        active={prop.active}
        setPresentation={prop.setPresentation}
        setActive={prop.setActive}
      />
    </div>
  );
};

export default Editor;
