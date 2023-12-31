import exp from "node:constants";
import { Slide } from "../../data/types";

enum SlideActions {
  CREATE_SLIDE = "CREATE_SLIDE",
  DELETE_SLIDE = "DELETE_SLIDE",
  CHANGE_ORDER = "CHANGE_ORDER",
  CHANGE_ACTIVE_SLIDE = "CHANGE_ACTIVE_SLIDE",
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
    dragingSlideId: number;
    destinationSlideId: number;
  };
};

type ChangeActiveSlide = {
  type: SlideActions.CHANGE_ACTIVE_SLIDE;
  payload: {
    currentSlideId: number;
  };
};

type SlideAction =
  | CreateSlideAction
  | DeleteSlideAction
  | ChangeSlideOrderAction
  | ChangeActiveSlide;

export { SlideActions, type SlideAction };
