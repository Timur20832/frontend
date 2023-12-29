import React from "react";

// import Button styles
import ButtonStyle from "./imgElement.module.css";

// import svg / svg's
import { ReactComponent as ImageNavbarSVG } from "../../../../sources/navbar icons/image-navbar-icon.svg";

const ImageElement = () => {
  return (
    <button className={ButtonStyle.buttontools}>
      <ImageNavbarSVG />
    </button>
  );
};

export default ImageElement;
