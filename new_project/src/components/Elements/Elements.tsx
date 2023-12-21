import { GeneralElementType } from "../../data/types";
import { ShowGraphElement } from "./GraphElement/GraphElement";
import { ShowImageElement } from "./ImageElement/ImageElement";
import { ShowTextElement } from "./TextElement/TextElement";

export function SelectTypeOfElement(Element: GeneralElementType, zoom: number) {
  switch (Element.type) {
    case "Text":
      return ShowTextElement(Element, zoom);
    case "Image":
      return ShowImageElement(Element, zoom);
    case "Figure":
      return ShowGraphElement(Element, zoom);
  }
}

export default SelectTypeOfElement;
