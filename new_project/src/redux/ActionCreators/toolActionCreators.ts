import { ToolActions } from "../Actions/toolActions";

function createChooseToolAction(activeTool: string) {
  return {
    type: ToolActions.CHOOSE_TOOL,
    payload: {
      activeTool: activeTool,
    },
  };
}
export { createChooseToolAction };
