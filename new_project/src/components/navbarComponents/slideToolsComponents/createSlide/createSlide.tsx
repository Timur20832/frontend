import React from "react";
import style from "./createSlide.module.css";
import { Presentation, Slide } from "../../../../data/types";

type createrProps = {
  presentation: Presentation;
  setPresentation: (presentation: Presentation) => void;
};
const CreateSlide = (prop: createrProps) => {
  const createSlide = () => {
    prop.presentation.history.push(prop.presentation);
    const newPresentation: Presentation = {
      name: prop.presentation.name,
      slide: prop.presentation.slide,
      history: prop.presentation.history,
      historyIndex: prop.presentation.historyIndex + 1,
    };
    const id = newPresentation.slide.length + 1;
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
    <button className={style.buttonstyle} onClick={createSlide}>
      Create slide
    </button>
  );
};

export default CreateSlide;
