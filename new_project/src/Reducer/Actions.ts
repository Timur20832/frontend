import * as Presentation from "../data/types";

enum PresentationActions {
  CHANGE_TITLE = "CHANGE_TITLE",
}

type ChangeTitleAction = {
  type: PresentationActions.CHANGE_TITLE;
  payload: {
    newTitle: string;
  };
};

type Action = ChangeTitleAction;

export { PresentationActions, type Action };
