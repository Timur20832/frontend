import React from "react";
import { Presentation } from "../../../data/types";
import { SelectTypeOfElement } from "../viewHook";

// import hooks
import { presentationHook } from "../../../data/Hooks/PresentationHooks";

// import Slide styles
import SlideStyle from "./mainSlide.module.css";

function ShowSlide({ presentation }: { presentation: Presentation }) {
  const zoom = 1;

  const activeSlide = presentation.slide.find((slide) => slide.active);
  if (!activeSlide) {
    return <div>Oops mistake</div>;
  }

  return (
    <div className={SlideStyle.main}>
      {activeSlide.elements.map((element) =>
        SelectTypeOfElement(element, zoom),
      )}
    </div>
  );
}

export default ShowSlide;
