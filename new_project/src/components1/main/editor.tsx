import React from "react";
import { Presentation } from "../../data/types";
import ShowSlide from "./mainSlide/mainSlide";
import ShowSlider from "./slider/slider";
const Editor = ({ presentation }: { presentation: Presentation }) => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <ShowSlider presentation={presentation} />
      <ShowSlide presentation={presentation} />
    </div>
  );
};

export default Editor;
