import { Slide } from "../../data/types";
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
    type: SlideActions.CHANGE_ORDER,
    payload: {
      currentSlideId: currentSlideId,
    },
  };
}

export {
  createChangeActiveSlideAction,
  createChangeSlideOrderAction,
  createCreateSlideAction,
  createDeleteSlideAction,
};
