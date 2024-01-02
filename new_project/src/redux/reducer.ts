import { SlideAction, SlideActions } from "./Actions/slideActions";
import { Presentation, Slide } from "../data/types";
import { presentationInitState, slide } from "../data/consts";
import { combineReducers } from "redux";
import {
  PresentationAction,
  PresentationActions,
} from "./Actions/presentationActions";
import { ToolAction, ToolActions } from "./Actions/toolActions";

const initData: Presentation = presentationInitState;

const slidesReducer = (
  state: Slide[] = initData.slide,
  action: SlideAction,
) => {
  switch (action.type) {
    case SlideActions.CREATE_SLIDE: {
      const newState = [...state, action.payload.slide];
      console.log(newState);
      return newState;
    }
    case SlideActions.DELETE_SLIDE: {
      let newState = [...state];
      console.log(newState[action.payload.slideId]);
      if (newState.length > 1) {
        newState = newState.filter(
          (item) => item.id !== action.payload.slideId,
        );
      } else {
        newState[0].elements = [];
      }
      console.log(newState);
      return newState;
    }
    case SlideActions.CHANGE_ORDER: {
      const newState = [...state];
      const currentSlideIndex = newState.findIndex(
        (slide) => slide.id === action.payload.draggingSlideId,
      );
      const slideIndex = newState.findIndex(
        (slide) => slide.id === action.payload.destinationSlideId,
      );
      newState[currentSlideIndex].id = [
        newState[slideIndex].id,
        (newState[slideIndex].id = newState[currentSlideIndex].id),
      ][0];
      return newState;
    }
    case SlideActions.CHANGE_ACTIVE_SLIDE: {
      const newState = [...state];
      console.log("new active reducer", action.payload.currentSlideId);
      if (newState.findIndex((slide) => slide.active) > -1) {
        newState[newState.findIndex((slide) => slide.active)].active = false;
      }
      console.log(newState);
      newState[action.payload.currentSlideId].active = true;
      return newState;
    }
    case SlideActions.ADD_ELEMENT: {
      const newState = [...state];
      const currentSlide = newState.findIndex((slide) => slide.active);
      newState[currentSlide].elements.push(action.payload.element);
      return newState;
    }
    case SlideActions.MOVE_ELEMENT: {
      const newState = [...state];
      const currentSlideIndex = newState.findIndex((slide) => slide.active);
      const currentIndexElement = newState[
        currentSlideIndex
      ].elements.findIndex(
        (element) => element.id === action.payload.elementId,
      );
      newState[currentSlideIndex].elements[currentIndexElement].pos.left =
        action.payload.newLeft;
      newState[currentSlideIndex].elements[currentIndexElement].pos.top =
        action.payload.newTop;
      return newState;
    }
    case SlideActions.RESIZE_ELEMENT: {
      const newState = [...state];
      const currentSlideIndex = newState.findIndex((slide) => slide.active);
      const currentIndexElement = newState[
        currentSlideIndex
      ].elements.findIndex(
        (element) => element.id === action.payload.elementId,
      );
      newState[currentSlideIndex].elements[currentIndexElement].size.height =
        action.payload.newHeight;
      newState[currentSlideIndex].elements[currentIndexElement].size.width =
        action.payload.newWidth;
      return newState;
    }
    case SlideActions.CHANGE_BACKGROUND_COLOR: {
      const newState = [...state];
      newState[action.payload.activeSlideIndex].backgroundColor =
        action.payload.newColor;
      return newState;
    }
    default:
      return [...state];
  }
};

const presentationReducer = (
  state: Presentation = initData,
  action: PresentationAction,
) => {
  switch (action.type) {
    case PresentationActions.IMPORT_PRESENTATION: {
      const newState = action.payload.newPresentation;

      return newState;
    }
    case PresentationActions.RENAME_PRESENTATION: {
      const newState = state;
      newState.name = action.payload.newName;

      return newState;
    }
    default:
      return state;
  }
};

const toolReducer = (state = "nothing", action: ToolAction) => {
  switch (action.type) {
    case ToolActions.CHOOSE_TOOL: {
      let newState = state;
      newState = action.payload.activeTool;
      return newState;
    }
    default:
      return "nothing";
  }
};

const rootReducer = combineReducers({
  slides: slidesReducer,
  presentation: presentationReducer,
  activeTool: toolReducer,
});

export { rootReducer };
