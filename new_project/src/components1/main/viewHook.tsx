import { GeneralElementType } from "../../data/types";
import { ShowGraphElement } from "../navbarComponents/objectToolsComponents/artObject/hookElements";
import { ShowImageElement } from "../navbarComponents/objectToolsComponents/image/hookImg";
import { ShowTextElement } from "../navbarComponents/objectToolsComponents/textElement/hookText";

export function SelectTypeOfElement(Element: GeneralElementType, zoom: number) {
  switch (Element.type) {
    case "Text":
      return ShowTextElement(Element, zoom);
    case "Image":
      return ShowImageElement(Element);
    case "Figure":
      return ShowGraphElement(Element);
  }
}

export default SelectTypeOfElement;
