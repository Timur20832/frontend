import { AnyAction, Dispatch } from "redux";
import { GeneralElementType, Position, TextBox } from "../../data/types";
import { text } from "../../data/consts";
import { false_text } from "../Navbar/navbar";
import { changeElements } from "./ElementsCreator";

export const createInputElement = (
  dispatch: Dispatch<AnyAction>,
  elements: GeneralElementType[],
  clickPosition: Position,
) => {
  const childTextElements: TextBox = {
    id: elements.length + 1,
    pos: clickPosition,
    type: text.type,
    content: "Write your text",
    size: text.size,
    borderColor: text.borderColor,
    isSelected: text.isSelected,
    font: text.font,
  };
  dispatch(changeElements([...elements, childTextElements]));
  false_text();
};
