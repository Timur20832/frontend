import React from "react";
import { GeneralElementType, Presentation, Slide } from "../../../data/types";
import { SelectTypeOfElement } from "../viewHook";
import { createTextElement } from "../../navbarComponents/objectToolsComponents/textElement/hookText";
import { createGraphElement } from "../../navbarComponents/objectToolsComponents/artObject/hookElements";

// import Slide styles
import SlideStyle from "./mainSlide.module.css";

type slideProps = {
  presentation: Presentation;
  active: string;
  setPresentation: (presentation: Presentation) => void;
  setActive: (active: string) => void;
};

const addElementSlide = (
  prop: slideProps,
  element: GeneralElementType,
  activeSlide: Slide,
) => {
  const newPresentation = prop.presentation;
  newPresentation.slide[activeSlide.id - 1].elements.push(element);
  prop.setPresentation(newPresentation);
  prop.setActive("nothing");
};

export function ShowSlide(prop: slideProps) {
  const zoomX = 1;
  const zoomY = 1;
  const visibility = "block";
  const activeSlide = prop.presentation.slide.find((slide) => slide.active);
  if (!activeSlide) {
    return <div>Oops mistake</div>;
  }
  const handleSlideClick = (event: React.MouseEvent) => {
    if (prop.active === "text") {
      const element = createTextElement(event, activeSlide);
      addElementSlide(prop, element, activeSlide);
    } else if (
      prop.active === "circle" ||
      prop.active === "square" ||
      prop.active === "triangle"
    ) {
      const element = createGraphElement(event, activeSlide, prop.active);
      addElementSlide(prop, element, activeSlide);
    }
  };

  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    const elementId = +event.dataTransfer.getData("id");
    const newPresentation: Presentation = {
      name: prop.presentation.name,
      slide: prop.presentation.slide,
      history: prop.presentation.history,
      historyIndex: prop.presentation.historyIndex + 1,
    };
    const currentSlideIndex = prop.presentation.slide.findIndex(
      (slide) => activeSlide.id === slide.id,
    );
    const currentIndexElement = newPresentation.slide[
      currentSlideIndex
    ].elements.findIndex((element) => element.id === elementId);
    if (
      event.dataTransfer.getData("textarea") === "true" ||
      event.dataTransfer.getData("img") === "true" ||
      event.dataTransfer.getData("artobj") === "true"
    ) {
      newPresentation.slide[currentSlideIndex].elements[
        currentIndexElement
      ].pos.left =
        event.pageX - event.currentTarget.getBoundingClientRect().left;
      newPresentation.slide[currentSlideIndex].elements[
        currentIndexElement
      ].pos.top = event.pageY - event.currentTarget.getBoundingClientRect().top;
    } else if (event.dataTransfer.getData("div") === "true") {
      newPresentation.slide[currentSlideIndex].elements[
        currentIndexElement
      ].size.width =
        event.pageX -
        newPresentation.slide[currentSlideIndex].elements[currentIndexElement]
          .pos.left -
        event.currentTarget.getBoundingClientRect().left;
      newPresentation.slide[currentSlideIndex].elements[
        currentIndexElement
      ].size.height =
        event.pageY -
        newPresentation.slide[currentSlideIndex].elements[currentIndexElement]
          .pos.top -
        event.currentTarget.getBoundingClientRect().top;
    }
    event.dataTransfer.setData("textarea", "");
    event.dataTransfer.setData("div", "");
    prop.setPresentation(newPresentation);
    console.log(prop.presentation);
  };

  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  return (
    <div
      className={SlideStyle.main}
      onClick={handleSlideClick}
      onDragOver={allowDrop}
      onDrop={(event) => dropHandler(event)}
    >
      {activeSlide.elements.map((element) =>
        SelectTypeOfElement({ element, zoomX, zoomY, visibility }),
      )}
    </div>
  );
}

export default ShowSlide;
