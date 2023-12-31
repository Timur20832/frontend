import React from "react";
import { Presentation, Slide } from "../../../../data/types";
import ButtonStyle from "./createSlide.module.css";
import { ReactComponent as CreateSlideSVG } from "../../../../sources/navbar icons/add-slide.svg";
import { useAppActions } from "../../../../redux/hooks";

type createSlideProps = {
  slides: Slide[];
};

const CreateSlide = (prop: createSlideProps) => {
  const { createCreateSlideAction } = useAppActions();
  const createSlide = () => {
    const id = prop.slides.length + 1;
    const newSlide: Slide = {
      id: id,
      elements: [],
      numberOfSlide: id,
      backgroundColor: "white",
      active: false,
    };
    createCreateSlideAction(newSlide);
  };
  return (
    <button className={ButtonStyle.buttontools} onClick={createSlide}>
      <CreateSlideSVG />
    </button>
  );
};

export default CreateSlide;
