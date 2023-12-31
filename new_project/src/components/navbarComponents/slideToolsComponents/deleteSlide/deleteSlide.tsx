import React from "react";
import { Presentation, Slide } from "../../../../data/types";
import ButtonStyle from "./deleteSlide.module.css";

import { ReactComponent as DeleteSlideSVG } from "../../../../sources/navbar icons/remove-slide.svg";
import { useAppActions } from "../../../../redux/hooks";

type deleterProps = {
  slides: Slide[];
};
const DeleteSlide = (prop: deleterProps) => {
  const { createDeleteSlideAction, createChangeActiveSlideAction } =
    useAppActions();

  const deleteSlide = () => {
    const activeSlideIndex =
      prop.slides.findIndex((slide) => slide.active) ??
      prop.slides[prop.slides.length - 1];
    createDeleteSlideAction(activeSlideIndex);
    const anotherSlideId = activeSlideIndex - 1 < 0 ? 0 : activeSlideIndex - 1;
    createChangeActiveSlideAction(anotherSlideId);
  };
  return (
    <button className={ButtonStyle.buttontools} onClick={deleteSlide}>
      <DeleteSlideSVG />
    </button>
  );
};

export default DeleteSlide;
