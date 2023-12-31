import { Presentation, Slide } from "../../../data/types";
import { SelectTypeOfElement } from "../viewHook";
import styles from "./slider.module.css";
import EditorStyle from "../editor.module.css";
import { useState } from "react";
import { useAppActions } from "../../../redux/hooks";

type SliderProps = {
  slides: Slide[];
};

function ShowSlider(prop: SliderProps) {
  const slidesComponent = prop.slides;
  const zoom = 0.3;
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
    const targetElement = e.target as HTMLDivElement;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    createChangeSlideOrderAction(currentSlide.id, slide.id);
    targetElement.style.borderColor = "#000000";
  }

  const sortSlides = (slide1: Slide, slide2: Slide) => {
    if (slide1.id > slide2.id) {
      return 1;
    } else return -1;
  };

  const changeActive = (curSlide: Slide) => {
    createChangeActiveSlideAction(curSlide.id);
  };

  return (
    <div className={styles.slider}>
      <ul className={styles.list}>
        {prop.slides.sort(sortSlides).map((slide) => (
          <div
            className={styles.child}
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
      <div className={EditorStyle.scroll_area}></div>
    </div>
  );
}

export default ShowSlider;
