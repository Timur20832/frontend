import { Action, PresentationActions } from "./Actions";
import { combineReducers } from "redux";

const PresentationReducer = (state = "", action: Action) => {
  if (action.type === PresentationActions.CHANGE_TITLE) {
    return action.payload;
  } else {
    return state;
  }
};

const rootReducer = combineReducers({
  title: PresentationReducer,
});

export { rootReducer };
