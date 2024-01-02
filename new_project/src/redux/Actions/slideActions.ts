import {
  Figure,
  GeneralElementType,
  Picture,
  Slide,
  TextBox,
} from "../../data/types";

enum SlideActions {
  CREATE_SLIDE = "CREATE_SLIDE",
  DELETE_SLIDE = "DELETE_SLIDE",
  CHANGE_ORDER = "CHANGE_ORDER",
  CHANGE_ACTIVE_SLIDE = "CHANGE_ACTIVE_SLIDE",
  ADD_ELEMENT = "ADD_ELEMENT",
  MOVE_ELEMENT = "MOVE_ELEMENT",
  RESIZE_ELEMENT = "RESIZE_ELEMENT",
  CHANGE_BACKGROUND_COLOR = "CHANGE_BACKGROUND_COLOR",
}

type CreateSlideAction = {
  type: SlideActions.CREATE_SLIDE;
  payload: {
    slide: Slide;
  };
};

type DeleteSlideAction = {
  type: SlideActions.DELETE_SLIDE;
  payload: {
    slideId: number;
  };
};

type ChangeSlideOrderAction = {
  type: SlideActions.CHANGE_ORDER;
  payload: {
    draggingSlideId: number;
    destinationSlideId: number;
  };
};

type ChangeActiveSlide = {
  type: SlideActions.CHANGE_ACTIVE_SLIDE;
  payload: {
    currentSlideId: number;
  };
};

type AddElementAction = {
  type: SlideActions.ADD_ELEMENT;
  payload: {
    element: GeneralElementType;
  };
};

type MoveElementAction = {
  type: SlideActions.MOVE_ELEMENT;
  payload: {
    elementId: number;
    newLeft: number;
    newTop: number;
  };
};

type ResizeElementAction = {
  type: SlideActions.RESIZE_ELEMENT;
  payload: {
    elementId: number;
    newHeight: number;
    newWidth: number;
  };
};

type ChangeBackgroundColorAction = {
  type: SlideActions.CHANGE_BACKGROUND_COLOR;
  payload: {
    activeSlideIndex: number;
    newColor: string;
  };
};

type SlideAction =
  | CreateSlideAction
  | DeleteSlideAction
  | ChangeSlideOrderAction
  | ChangeActiveSlide
  | AddElementAction
  | MoveElementAction
  | ResizeElementAction
  | ChangeBackgroundColorAction;

export { SlideActions, type SlideAction };
