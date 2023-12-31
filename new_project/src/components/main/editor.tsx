import React from "react";
import { Presentation } from "../../data/types";
import ShowSlide from "./mainSlide/mainSlide";
import ShowSlider from "./slider/slider";

// import Editor styles
import EditorStyle from "./editor.module.css";
import { useAppSelector } from "../../redux/hooks";

type props = {
  presentation: Presentation;
  active: string;
  setPresentation: (presentation: Presentation) => void;
  setActive: (active: string) => void;
};
const Editor = (prop: props) => {
  const slides = useAppSelector((state) => state.slides);
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <ShowSlider slides={slides} />
      <div className={EditorStyle.slide_area}>
        <ShowSlide
          presentation={prop.presentation}
          active={prop.active}
          setPresentation={prop.setPresentation}
          setActive={prop.setActive}
        />
      </div>
    </div>
  );
};

export default Editor;
