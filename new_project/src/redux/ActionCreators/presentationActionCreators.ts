import { Presentation } from "../../data/types";
import { PresentationActions } from "../Actions/presentationActions";

function createRenamePresentationAction(newName: string) {
  return {
    type: PresentationActions.RENAME_PRESENTATION,
    payload: {
      newName: newName,
    },
  };
}

function createImportPresentationAction(newPresentation: Presentation) {
  return {
    type: PresentationActions.IMPORT_PRESENTATION,
    payload: {
      newPresentation: newPresentation,
    },
  };
}
export { createRenamePresentationAction, createImportPresentationAction };
