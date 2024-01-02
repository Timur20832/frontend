import { Presentation, Slide } from "../../../data/types";
import { SelectTypeOfElement } from "../viewHook";
import SliderStyle from "./slider.module.css";
import { useState } from "react";
import { useAppActions } from "../../../redux/hooks";

type SliderProps = {
  slides: Slide[];
};

function ShowSlider(prop: SliderProps) {
  const zoomX = 0.21;
  const zoomY = 0.26;
  const visibility = "none";
  const [currentSlide, setCurrentSlide] = useState<Slide | null>(null);
  const { createChangeSlideOrderAction, createChangeActiveSlideAction } =
    useAppActions();

  function dragStartHandler(e: React.DragEvent<HTMLDivElement>, slide: Slide) {
    setCurrentSlide(slide);
  }

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
    if (currentSlide === null) {
      return;
    }
    const targetElement = e.target as HTMLDivElement;
    createChangeSlideOrderAction(currentSlide.id, slide.id);
    targetElement.style.borderColor = "#000000";
  }

  const sortSlides = (slide1: Slide, slide2: Slide) => {
    if (slide1.id > slide2.id) {
      return 1;
    } else return -1;
  };

  const changeActive = (curSlide: Slide) => {
    console.log(prop.slides);
    createChangeActiveSlideAction(
      prop.slides.findIndex((slide) => (slide.id === curSlide.id)),
    );
  };

  return (
    <div className={SliderStyle.slider}>
      <ul className={SliderStyle.list}>
        {prop.slides.sort(sortSlides).map((slide) => (
          <div
            className={SliderStyle.child}
            onDragStart={(e) => dragStartHandler(e, slide)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, slide)}
            draggable={true}
            onClick={() => changeActive(slide)}
            style={{
              backgroundColor: slide.backgroundColor,
            }}
          >
            {slide.elements.map((element) =>
              SelectTypeOfElement({ element, zoomX, zoomY, visibility }),
            )}
          </div>
        ))}
      </ul>
      <div className={SliderStyle.scroll_area}></div>
    </div>
  );
}

export default ShowSlider;
