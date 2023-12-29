import React from "react";

import ButtonStyle from "./createSlide.module.css";

import { ReactComponent as CreateSlideSVG } from "../../../../sources/navbar icons/add-slide.svg";

const CreateSlide = () => {
  return (
    <button className={ButtonStyle.buttontools}>
      <CreateSlideSVG />
    </button>
  );
};

export default CreateSlide;
