import { Slide, GeneralElementType } from "../../data/types";
import { slide } from "../../data/consts";

type kekState = {
  elements: GeneralElementType[];
};

const initialState: kekState = {
  elements: [],
};

const changeElements = (value: GeneralElementType[]) => ({
  type: "CHANGE_ELEMENTS",
  payload: { elements: value },
});

const elementsReducer = (
  state: kekState = initialState,
  action: { type: string; payload: kekState },
) => {
  switch (action.type) {
    case "CHANGE_ELEMENTS":
      return {
        ...state,
        elements: action.payload.elements,
      };
    default:
      return state;
  }
};

export default elementsReducer;
export { changeElements };
