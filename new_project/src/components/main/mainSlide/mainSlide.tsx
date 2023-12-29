import React from "react";
import { Presentation } from "../../../data/types";
import { SelectTypeOfElement } from "../viewHook";
import style from "./mainSlide.module.css";
import { presentationHook } from "../../../data/Hooks/PresentationHooks";

function ShowSlide({ presentation }: { presentation: Presentation }) {
  const zoom = 1;

  const activeSlide = presentation.slide.find((slide) => slide.active);
  if (!activeSlide) {
    return <div>Oops mistake</div>;
  }

  return (
    <div className={style.main}>
      {activeSlide.elements.map((element) =>
        SelectTypeOfElement(element, zoom),
      )}
    </div>
  );
}

export default ShowSlide;
