import React from "react";
import { Figure, Picture, TextBox, GeneralElementType } from "../data/types";
import kot from "./../img/shape-circle.svg";

function ShowTextElement(Element: TextBox) {
  return (
    <p
      className="pos"
      style={{
        width: Element.size.height + "%",
        height: Element.size.width + "%",
        fontSize: Element.font.font_size,
        color: Element.font.Color,
        top: Element.pos.top + "%",
        left: Element.pos.left + "%",
      }}
    >
      {Element.content}
    </p>
  );
}

function ShowImageElement(Element: Picture) {
  return (
    <img
      className="pos"
      src={require("../img/kot.jpg")}
      alt="jopa"
      style={{
        width: Element.size.width + "%",
        height: Element.size.height + "%",
        top: Element.pos.top + "%",
        left: Element.pos.left + "%",
      }}
    />
  );
}

function ShowGraphElement(Element: Figure) {
  return (
    <img
      className="pos"
      src={require(`../img/shape-${Element.shape}.svg`)}
      alt="kek"
      style={{
        width: Element.size.width + "%",
        height: Element.size.height + "%",
        top: Element.pos.top + "%",
        left: Element.pos.left + "%",
      }}
    />
  );
}

export function SelectTypeOfElement(Element: GeneralElementType) {
  switch (Element.type) {
    case "Text":
      return ShowTextElement(Element);
    case "Image":
      return ShowImageElement(Element);
    case "Figure":
      return ShowGraphElement(Element);
  }
}
