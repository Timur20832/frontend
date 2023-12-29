import React from "react";
import ButtonStyle from "./deleteSlide.module.css";

import { ReactComponent as DeleteSlideSVG } from "../../../../sources/navbar icons/remove-slide.svg";

const DeleteSlide = () => {
  return (
    <button className={ButtonStyle.buttontools}>
      <DeleteSlideSVG />
    </button>
  );
};

export default DeleteSlide;
