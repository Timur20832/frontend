import { Presentation, Slide } from "../../../data/types";
import { SelectTypeOfElement } from "../viewHook";
import SliderStyle from "./slider.module.css";
import { useState } from "react";

type SliderProps = {
  presentation: Presentation;
  setPresentation: (presentation: Presentation) => void;
};

function ShowSlider(prop: SliderProps) {
  const presentationComponent = prop.presentation;
  const zoom = 0.3;
  const [currentSlide, setCurrentSlide] = useState<Slide | null>(null);
  function dragStartHandler(e: React.DragEvent<HTMLDivElement>, slide: Slide) {
    setCurrentSlide(slide);
  }

  const setSlideList = (slides: Slide[]) => {
    prop.presentation.history.push(prop.presentation);
    const newPresentation: Presentation = {
      name: prop.presentation.name,
      slide: prop.presentation.slide,
      history: prop.presentation.history,
      historyIndex: prop.presentation.historyIndex + 1,
    };
    newPresentation.slide = slides;
    prop.setPresentation(newPresentation);
  };

  function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
    const targetElement = e.target as HTMLDivElement;
    targetElement.style.borderColor = "#000000";
  }

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const targetElement = e.target as HTMLDivElement;
    targetElement.style.borderColor = "#ff0000";
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>, slide: Slide) {
    e.preventDefault();
    const targetElement = e.target as HTMLDivElement;
    const newSlideList = presentationComponent.slide.map((curSlide: Slide) => {
      if (curSlide.id === slide.id) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return { ...curSlide, id: currentSlide.id };
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (curSlide.id === currentSlide.id) {
        return { ...curSlide, id: slide.id };
      }
      return curSlide;
    });
    setSlideList(newSlideList);
    targetElement.style.borderColor = "#000000";
  }

  const sortSlides = (slide1: Slide, slide2: Slide) => {
    if (slide1.id > slide2.id) {
      return 1;
    } else return -1;
  };

  const changeActive = (curSlide: Slide) => {
    prop.presentation.history.push(prop.presentation);
    const newPresentation: Presentation = {
      name: prop.presentation.name,
      slide: prop.presentation.slide,
      history: prop.presentation.history,
      historyIndex: prop.presentation.historyIndex + 1,
    };
    newPresentation.slide[
      newPresentation.slide.findIndex((slide) => slide.active)
    ].active = false;
    newPresentation.slide[
      newPresentation.slide.findIndex((slide) => slide.id === curSlide.id)
    ].active = true;
    prop.setPresentation(newPresentation);
  };
  return (
    <div className={SliderStyle.slider}>
      <ul className={SliderStyle.list}>
        {prop.presentation.slide.sort(sortSlides).map((slide) => (
          <div
            className={SliderStyle.child}
            onDragStart={(e) => dragStartHandler(e, slide)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, slide)}
            draggable={true}
            onClick={() => changeActive(slide)}
          >
            {slide.elements.map((element) =>
              SelectTypeOfElement(element, zoom),
            )}
          </div>
        ))}
      </ul>
      <div className={SliderStyle.scroll_area}></div>
    </div>
  );
}

export default ShowSlider;
