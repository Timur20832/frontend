import { GeneralElementType, Slide, TextBox } from "../../../../data/types";
import React from "react";

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
        break;
    }
  }
  return (
    <>
      <textarea
        style={{
          position: "absolute",
          width: Element.size.width * zoomX,
          height: Element.size.height * zoomY,
          fontSize: (Element.font.font_size * (zoomX + zoomY)) / 2,
          color: Element.font.Color,
          top: Element.pos.top * zoomY + "px",
          left: Element.pos.left * zoomX + "px",
          overflow: "hidden",
          resize: "none",
          outline: "none",
          backgroundColor: "transparent",
        }}
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
  const id: number = slide.elements.length + 1;
  const element: TextBox = {
    type: "Text",
    id: id,
    content: "write your text",
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
