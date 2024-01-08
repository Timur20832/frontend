import React from "react";
import {GeneralElementType, Slide} from "../../../data/types";
import {SelectTypeOfElement} from "../viewHook";
import {createTextElement} from "../../navbarComponents/objectToolsComponents/textElement/hookText";
import {createGraphElement} from "../../navbarComponents/objectToolsComponents/artObject/hookElements";
import SlideStyle from "./mainSlide.module.css";
import {useAppActions} from "../../../redux/hooks";
import {ToolType} from "../../../data/ToolTypes";

type SlideProps = {
  slides: Slide[];
  activeTool: string;
};

export function ShowSlide(prop: SlideProps) {
  const {
    createChooseToolAction,
    createAddElementAction,
    createMoveElementAction,
    createResizeElementAction,
  } = useAppActions();
  const zoomX = 1;
  const zoomY = 1;
  const visibility = "block";
  const activeSlide = prop.slides.find((slide) => slide.active);
  if (!activeSlide) {
    return <div>Oops mistake</div>;
  }
  const addElementSlide = (element: GeneralElementType) => {
    createAddElementAction(element);
    createChooseToolAction(ToolType.NO_TOOL);
  };
  const handleSlideClick = (event: React.MouseEvent) => {
    console.log(prop.activeTool);
    if (prop.activeTool === ToolType.TEXT) {
      const element = createTextElement(event, activeSlide);
      addElementSlide(element);
    } else if (
      prop.activeTool === ToolType.CIRCLE ||
      prop.activeTool === ToolType.SQUARE ||
      prop.activeTool === ToolType.TRIANGLE
    ) {
      const element = createGraphElement(event, activeSlide, prop.activeTool);
      addElementSlide(element);
    }
  };

  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    const elementId = +event.dataTransfer.getData("id");
    const currentSlideIndex = prop.slides.findIndex(
      (slide) => activeSlide.id === slide.id,
    );
    const currentIndexElement = prop.slides[
      currentSlideIndex
    ].elements.findIndex((element) => element.id === elementId);
    if (
      event.dataTransfer.getData("textarea") === "true" ||
      event.dataTransfer.getData("img") === "true" ||
      event.dataTransfer.getData("artobj") === "true"
    ) {
      createMoveElementAction(
        elementId,
        event.pageX - event.currentTarget.getBoundingClientRect().left,
        event.pageY - event.currentTarget.getBoundingClientRect().top,
      );
    } else if (event.dataTransfer.getData("div") === "true") {
      createResizeElementAction(
        elementId,
        event.pageY -
          prop.slides[currentSlideIndex].elements[currentIndexElement].pos.top -
          event.currentTarget.getBoundingClientRect().top,
        event.pageX -
          prop.slides[currentSlideIndex].elements[currentIndexElement].pos
            .left -
          event.currentTarget.getBoundingClientRect().left,
      );
    }
    event.dataTransfer.setData("textarea", "");
    event.dataTransfer.setData("div", "");
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
      style={{
        backgroundColor: activeSlide.backgroundColor,
      }}
    >
      {activeSlide.elements.map((element) =>
        SelectTypeOfElement({ element, zoomX, zoomY, visibility }),
      )}
    </div>
  );
}

export default ShowSlide;
