import { Slide, TextBox } from "../../../../data/types";
import React from "react";
export function ShowTextElement(Element: TextBox, zoom: number) {
  return (
    <p
      style={{
        position: "absolute",
        width: Element.size.height * zoom,
        height: Element.size.width * zoom,
        fontSize: Element.font.font_size * zoom,
        color: Element.font.Color,
        top: Element.pos.top / 6 + "%",
        left: Element.pos.left / 8 + "%",
      }}
    >
      {Element.content}
    </p>
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
      height: 20,
      width: 40,
    },
    borderColor: "black",
    isSelected: false,
  };
  return element;
};

export function SampleTextElement({ element }: { element: TextBox }) {
  return (
    <textarea
      style={{
        top: element.pos.top,
        left: element.pos.left,
        width: element.size.width,
        height: element.size.height,
        fontSize: element.font.font_size,
        fontStyle: element.font.font_style,
        fontFamily: element.font.font_family,
      }}
      placeholder={element.content}
    ></textarea>
  );
}
