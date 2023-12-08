import { GeneralElementType } from "../../data/types";
import { ShowGraphElement } from "./GraphElement/GraphElement";
import { ShowImageElement } from "./ImageElement/ImageElement";
import { ShowTextElement } from "./TextElement/TextElement";

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

export default SelectTypeOfElement;
