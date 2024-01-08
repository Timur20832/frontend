import { ToolActions } from "../Actions/toolActions";
import { ToolType } from "../../data/ToolTypes";

function createChooseToolAction(activeTool: ToolType) {
  return {
    type: ToolActions.CHOOSE_TOOL,
    payload: {
      activeTool: activeTool,
    },
  };
}
export { createChooseToolAction };
