import {ToolActions} from '../Actions/toolActions';
import {ToolType} from '../../data/types';

function createChooseToolAction(activeTool: ToolType) {
	return {
		type: ToolActions.CHOOSE_TOOL,
		payload: {
			activeTool: activeTool,
		},
	};
}

function createChooseColorAction(activeColor: string) {
	return {
		type: ToolActions.CHOOSE_COLOR,
		payload: {
			activeColor: activeColor,
		},
	};
}

export {createChooseToolAction, createChooseColorAction};
