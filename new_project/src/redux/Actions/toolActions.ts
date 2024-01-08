import { ToolType } from "../../data/types";

enum ToolActions {
  CHOOSE_TOOL = "CHOOSE_TOOL",
  CHOOSE_COLOR = "CHOOSE_COLOR",
}

type ChooseToolAction = {
  type: ToolActions.CHOOSE_TOOL;
  payload: {
    activeTool: ToolType;
  };
};

type ChooseColorAction = {
  type: ToolActions.CHOOSE_COLOR;
  payload: {
    activeColor: string;
  };
};

type ToolAction = ChooseToolAction | ChooseColorAction;

export { ToolActions, type ToolAction };
