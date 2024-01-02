enum ToolActions {
  CHOOSE_TOOL = "CHOOSE_TOOL",
}

type ChooseToolAction = {
  type: ToolActions.CHOOSE_TOOL;
  payload: {
    activeTool: string;
  };
};

type ToolAction = ChooseToolAction;

export { ToolActions, type ToolAction };
