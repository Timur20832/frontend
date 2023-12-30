import React from "react";
import { GeneralElementType, Presentation, Slide } from "../../../data/types";
import { SelectTypeOfElement } from "../viewHook";
import style from "./mainSlide.module.css";
import {
  createTextElement,
  SampleTextElement,
} from "../../navbarComponents/objectToolsComponents/textElement/hookText";
import {
  createGraphElement,
  SampleGraphElement,
} from "../../navbarComponents/objectToolsComponents/artObject/hookElements";

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
  const zoom = 1;
  const activeSlide = prop.presentation.slide.find((slide) => slide.active);
  if (!activeSlide) {
    return <div>Oops mistake</div>;
  }
  //useEffect(() => {}, [prop.presentation, activeSlide.elements.length]);
  const handleSlideClick = (event: React.MouseEvent) => {
    if (prop.active === "text") {
      const element = createTextElement(event, activeSlide);
      addElementSlide(prop, element, activeSlide);
      return <SampleTextElement element={element} />;
    } else if (
      prop.active === "circle" ||
      prop.active === "square" ||
      prop.active === "triangle"
    ) {
      const element = createGraphElement(event, activeSlide, prop.active);
      addElementSlide(prop, element, activeSlide);
      return <SampleGraphElement element={element} />;
    }
  };
  return (
    <div className={style.main} onClick={handleSlideClick}>
      {activeSlide.elements.map((element) =>
        SelectTypeOfElement(element, zoom),
      )}
    </div>
  );
}

export default ShowSlide;
