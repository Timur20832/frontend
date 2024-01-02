import React from "react";
import { Presentation, Slide } from "../../../../data/types";
import ButtonStyle from "./createSlide.module.css";
import { ReactComponent as CreateSlideSVG } from "../../../../sources/navbar icons/add-slide.svg";

type createrProps = {
  presentation: Presentation;
  setPresentation: (presentation: Presentation) => void;
};
const CreateSlide = (prop: createrProps) => {
  const findLastId = (slides: Slide[]) => {
    const max = slides.reduce((acc, curr) => (acc.id > curr.id ? acc : curr));
    return max.id;
  };

  const createSlide = () => {
    prop.presentation.history.push(prop.presentation);
    const newPresentation: Presentation = {
      name: prop.presentation.name,
      slide: prop.presentation.slide,
      history: prop.presentation.history,
      historyIndex: prop.presentation.historyIndex + 1,
    };
    const id = findLastId(newPresentation.slide) + 1;
    const newSlide: Slide = {
      id: id,
      elements: [],
      numberOfSlide: id,
      backgroundColor: "white",
      active: false,
    };
    console.log(newPresentation.slide);
    newPresentation.slide.push(newSlide);
    prop.setPresentation(newPresentation);
  };
  return (
    <button className={ButtonStyle.buttontools} onClick={createSlide}>
      <CreateSlideSVG />
    </button>
  );
};

export default CreateSlide;
