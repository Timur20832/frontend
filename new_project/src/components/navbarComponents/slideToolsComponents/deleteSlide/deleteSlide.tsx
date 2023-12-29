import React from "react";
import { Presentation } from "../../../../data/types";
import ButtonStyle from "./deleteSlide.module.css";

import { ReactComponent as DeleteSlideSVG } from "../../../../sources/navbar icons/remove-slide.svg";

type deleterProps = {
  presentation: Presentation;
  setPresentation: (presentation: Presentation) => void;
};
const DeleteSlide = (prop: deleterProps) => {
  const deleteSlide = () => {
    prop.presentation.history.push(prop.presentation);
    const newPresentation: Presentation = {
      name: prop.presentation.name,
      slide: prop.presentation.slide,
      history: prop.presentation.history,
      historyIndex: prop.presentation.historyIndex + 1,
    };
    if (newPresentation.slide.length > 1) {
      const activeSlideIndex =
        newPresentation.slide.findIndex((slide) => slide.active) ??
        newPresentation.slide[newPresentation.slide.length - 1];
      console.log(activeSlideIndex);
      newPresentation.slide.splice(activeSlideIndex, 1);
      const anotherSlideId =
        activeSlideIndex - 1 < 0 ? 0 : activeSlideIndex - 1;

      console.log(anotherSlideId);
      newPresentation.slide[anotherSlideId].active = true;
      console.log(newPresentation.slide);
    } else {
      newPresentation.slide[0].elements = [];
    }
    prop.setPresentation(newPresentation);
  };
  return (
    <button className={ButtonStyle.buttontools} onClick={deleteSlide}>
      <DeleteSlideSVG />
    </button>
  );
};

export default DeleteSlide;
