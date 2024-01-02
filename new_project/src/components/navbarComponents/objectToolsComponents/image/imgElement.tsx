import React from "react";
// import Button styles
import ButtonStyle from "./imgElement.module.css";
// import svg / svg's
import { ReactComponent as ImageNavbarSVG } from "../../../../sources/navbar icons/image-navbar-icon.svg";
import {
  GeneralElementType,
  Picture,
  Presentation,
  Slide,
} from "../../../../data/types";

type props = {
  presentation: Presentation;
  setPresentation: (presentation: Presentation) => void;
};
const addElementSlide = (
  presentation: Presentation,
  setPresentation: (presentation: Presentation) => void,
  element: GeneralElementType,
  activeSlide: Slide,
) => {
  const newPresentation: Presentation = {
    name: presentation.name,
    slide: presentation.slide,
    history: presentation.history,
    historyIndex: presentation.historyIndex + 1,
  };
  newPresentation.slide[activeSlide.id - 1].elements.push(element);
  setPresentation(newPresentation);
};
function createImage(prop: props) {
  const activeSlide = prop.presentation.slide.find((slide) => slide.active);
  if (!activeSlide) return null;
  const inputElement = document.createElement("input");
  inputElement.type = "file";
  inputElement.accept = "image/*";
  inputElement.onchange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      const file = target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result;
        if (imageUrl && typeof imageUrl === "string") {
          const image = new Image();
          image.onload = () => {
            const width = image.naturalWidth;
            const height = image.naturalHeight;
            const imageBlock: Picture = {
              id: activeSlide.elements.length + 1,
              pos: { left: 0, top: 0 },
              type: "Image",
              size: {
                width: 1000,
                height: 600,
              },
              path: imageUrl,
              isSelected: false,
              borderColor: "#000",
            };
            addElementSlide(
              prop.presentation,
              prop.setPresentation,
              imageBlock,
              activeSlide,
            );
          };
          image.src = imageUrl;
        }
      };
      reader.readAsDataURL(file);
    }
  };
  inputElement.click();
}

const ImageElement = (prop: props) => {
  return (
    <>
      <input type="file" id="upload" style={{ display: "none" }} />
      <label htmlFor="upload">
        <button className={ButtonStyle.buttontools} onClick={() => createImage(prop)}>
          <ImageNavbarSVG />
        </button>
      </label>
    </>
  );
};

export default ImageElement;
