import {
  GeneralElementType,
  Slide,
  SlideElement,
  TextBox,
} from "../../../../data/types";
import React from "react";
import { useAppActions } from "../../../../redux/hooks";

/*function changeActiveElements(slide: Slide, element: GeneralElementType) {
  slide.elements.map((element) => {
    if (element.isSelected === true) {
      element.isSelected = false;
    }
  });
  element.isSelected = true;
}*/

export function ShowTextElement(
  Element: TextBox,
  zoomX: number,
  zoomY: number,
  visibility: string,
) {
  if (!Element.isSelected) {
    visibility = "none";
  }
  const { createSetActiveElementAction } = useAppActions();
  function getIdElement(
    event:
      | React.DragEvent<HTMLTextAreaElement>
      | React.DragEvent<HTMLDivElement>,
    element: TextBox,
    type: "textarea" | "div",
  ) {
    event.dataTransfer.setData("id", `${element.id}`);
    switch (type) {
      case "div":
        event.dataTransfer.setData("div", "true");
        event.dataTransfer.setData("textarea", "false");
        break;
      case "textarea":
        event.dataTransfer.setData("textarea", "true");
        event.dataTransfer.setData("div", "false");
        event.dataTransfer.setData(
          "offSetX",
          `${event.clientX - element.pos.left}`,
        );
        event.dataTransfer.setData(
          "offSetY",
          `${event.clientY - element.pos.top}`,
        );
        break;
    }
  }
  const setActive = () => {
    createSetActiveElementAction(Element.id);
  };
  return (
    <>
      <textarea
        style={{
          position: "absolute",
          width: Element.size.width * zoomX,
          height: Element.size.height * zoomY,
          fontSize: (Element.font.font_size * (zoomX + zoomY)) / 2,
          fontFamily: Element.font.font_family,
          color: Element.font.Color,
          top: Element.pos.top * zoomY + "px",
          left: Element.pos.left * zoomX + "px",
          overflow: "hidden",
          resize: "none",
          outline: "none",
          backgroundColor: Element.backgroundColor,
          borderWidth: 2 * zoomX,
          borderColor: Element.borderColor,
        }}
        onClick={setActive}
        onDragStart={(event) => getIdElement(event, Element, "textarea")}
        draggable={true}
      >
        {Element.content}
      </textarea>
      <div
        onDragStart={(event) => getIdElement(event, Element, "div")}
        draggable={true}
        style={{
          cursor: "nwse-resize",
          position: "absolute",
          backgroundColor: "green",
          width: `${5 * zoomX}px`,
          height: `${5 * zoomY}px`,
          top: (Element.pos.top + Element.size.height) * zoomX + 5 * zoomX,
          left: (Element.pos.left + Element.size.width) * zoomX + 5 * zoomX,
          display: visibility,
        }}
      ></div>
    </>
  );
}

export const createTextElement = (event: React.MouseEvent, slide: Slide) => {
  const findLastId = (elements: SlideElement[]) => {
    if (elements.length === 0) {
      return 0;
    }
    const max = elements.reduce((acc, curr) => (acc.id > curr.id ? acc : curr));
    return max.id;
  };

  const id: number = findLastId(slide.elements) + 1;
  const element: TextBox = {
    type: "Text",
    id: id,
    content: "write your text",
    backgroundColor: "transparent",
    pos: {
      left: event.clientX - event.currentTarget.getBoundingClientRect().left,
      top: event.clientY - event.currentTarget.getBoundingClientRect().top,
    },
    font: {
      font_style: "normal",
      font_size: 36,
      font_family: "",
      Color: "#000",
    },
    size: {
      height: 100,
      width: 500,
    },
    borderColor: "black",
    isSelected: false,
  };
  return element;
};
