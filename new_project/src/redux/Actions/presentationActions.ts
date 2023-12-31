import { Presentation } from "../../data/types";

enum PresentationActions {
  RENAME_PRESENTATION = "RENAME_PRESENTATION",
  IMPORT_PRESENTATION = "IMPORT_PRESENTATION",
}

type RenamePresentationAction = {
  type: PresentationActions.RENAME_PRESENTATION;
  payload: {
    newName: string;
  };
};

type ImportPresentationAction = {
  type: PresentationActions.IMPORT_PRESENTATION;
  payload: {
    newPresentation: Presentation;
  };
};

type PresentationAction = RenamePresentationAction | ImportPresentationAction;

export { PresentationActions, type PresentationAction };
