import { GeneralElementType, Slide } from "../../data/types";
import { SlideActions } from "../Actions/slideActions";

function createCreateSlideAction(slide: Slide) {
  return {
    type: SlideActions.CREATE_SLIDE,
    payload: {
      slide: slide,
    },
  };
}

function createDeleteSlideAction(slideId: number) {
  return {
    type: SlideActions.DELETE_SLIDE,
    payload: {
      slideId: slideId,
    },
  };
}

function createChangeSlideOrderAction(
  draggingSlideId: number,
  destinationSlideId: number,
) {
  return {
    type: SlideActions.CHANGE_ORDER,
    payload: {
      draggingSlideId: draggingSlideId,
      destinationSlideId: destinationSlideId,
    },
  };
}

function createChangeActiveSlideAction(currentSlideId: number) {
  return {
    type: SlideActions.CHANGE_ACTIVE_SLIDE,
    payload: {
      currentSlideId: currentSlideId,
    },
  };
}

function createAddElementAction(element: GeneralElementType) {
  return {
    type: SlideActions.ADD_ELEMENT,
    payload: {
      element: element,
    },
  };
}

function createMoveElementAction(
  elementId: number,
  newLeft: number,
  newTop: number,
) {
  return {
    type: SlideActions.MOVE_ELEMENT,
    payload: {
      elementId: elementId,
      newLeft: newLeft,
      newTop: newTop,
    },
  };
}

function createResizeElementAction(
  elementId: number,
  newHeight: number,
  newWidth: number,
) {
  return {
    type: SlideActions.RESIZE_ELEMENT,
    payload: {
      elementId: elementId,
      newHeight: newHeight,
      newWidth: newWidth,
    },
  };
}

function createChangeBackgroundColor(newColor: string) {
  return {
    type: SlideActions.CHANGE_BACKGROUND_COLOR,
    payload: {
      newColor: newColor,
    },
  };
}

function createChangeElementColor(newColor: string) {
  return {
    type: SlideActions.CHANGE_ELEMENT_COLOR,
    payload: {
      newColor: newColor,
    },
  };
}

function createChangeElementBorderColor(newColor: string) {
  return {
    type: SlideActions.CHANGE_ELEMENT_BORDER_COLOR,
    payload: {
      newColor: newColor,
    },
  };
}

function createSetActiveElementAction(elementId: number) {
  return {
    type: SlideActions.SET_ACTIVE_ELEMENT,
    payload: {
      elementId: elementId,
    },
  };
}

function createDeleteActiveElementAction() {
  return {
    type: SlideActions.DELETE_ACTIVE_ELEMENT,
    payload: "",
  };
}

function createChangeFontAction(font: string, size: number) {
  return {
    type: SlideActions.CHANGE_FONT,
    payload: {
      font: font,
      size: size,
    },
  };
}

function createChangeTextAction(newText: string) {
  return {
    type: SlideActions.CHANGE_TEXT,
    payload: {
      newText: newText,
    },
  };
}

export {
  createChangeActiveSlideAction,
  createChangeSlideOrderAction,
  createCreateSlideAction,
  createDeleteSlideAction,
  createAddElementAction,
  createMoveElementAction,
  createResizeElementAction,
  createChangeBackgroundColor,
  createChangeElementBorderColor,
  createChangeElementColor,
  createSetActiveElementAction,
  createDeleteActiveElementAction,
  createChangeFontAction,
  createChangeTextAction,
};
