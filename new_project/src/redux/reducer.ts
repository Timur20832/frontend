import { SlideAction, SlideActions } from "./Actions/slideActions";
import { Presentation, Slide } from "../data/types";
import { presentationInitState, slide } from "../data/consts";
import { combineReducers } from "redux";
import {PresentationAction, PresentationActions} from "./Actions/presentationActions";

const initData: Presentation = presentationInitState;

const slidesReducer = (
  state: Slide[] = initData.slide,
  action: SlideAction,
) => {
  switch (action.type) {
    case SlideActions.CREATE_SLIDE: {
      const newState = [...state, action.payload.slide];

      return newState;
    }
    case SlideActions.DELETE_SLIDE: {
      let newState = [...state];
      if (newState.length > 1) {
        newState = newState.filter(
          (item) => item.id !== action.payload.slideId,
        );
      } else {
        newState[0].elements = [];
      }

      return newState;
    }
    case SlideActions.CHANGE_ORDER: {
      const currentSlide = action.payload.dragingSlideId;
      const slide = action.payload.destinationSlideId;
      const newState = state.map((curSlide: Slide) => {
        if (curSlide.id === slide) {
          return { ...curSlide, id: currentSlide };
        }
        if (curSlide.id === currentSlide) {
          return { ...curSlide, id: slide };
        }
        return curSlide;
      });
      return newState;
    }
    case SlideActions.CHANGE_ACTIVE_SLIDE: {
      const newState = state;
      newState[newState.findIndex((slide) => slide.active)].active = false;
      newState[
        newState.findIndex(
          (slide) => slide.id === action.payload.currentSlideId,
        )
      ].active = true;
      return newState;
    }
  }
};

const presentationReducer = (
  state: Presentation = initData,
  action: PresentationAction,
) => {
  switch (action.type)
  {
    case PresentationActions.IMPORT_PRESENTATION:{
      const newState = action.payload.newPresentation

      return newState;
    }
    case PresentationActions.RENAME_PRESENTATION: {
      const newState = state;
      newState.name = action.payload.newName;

      return newState;
    }
  }
};

const rootReducer = combineReducers({
  slides: slidesReducer,
  presentation: presentationReducer
});

export { rootReducer };
