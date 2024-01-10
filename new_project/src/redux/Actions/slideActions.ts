import {GeneralElementType, Slide} from '../../data/types';

enum SlideActions {
	CREATE_SLIDE = 'CREATE_SLIDE',
	DELETE_SLIDE = 'DELETE_SLIDE',
	CHANGE_ORDER = 'CHANGE_ORDER',
	CHANGE_ACTIVE_SLIDE = 'CHANGE_ACTIVE_SLIDE',
	ADD_ELEMENT = 'ADD_ELEMENT',
	MOVE_ELEMENT = 'MOVE_ELEMENT',
	RESIZE_ELEMENT = 'RESIZE_ELEMENT',
	CHANGE_BACKGROUND_COLOR = 'CHANGE_BACKGROUND_COLOR',
	CHANGE_ELEMENT_COLOR = 'CHANGE_ELEMENT_COLOR',
	CHANGE_ELEMENT_BORDER_COLOR = 'CHANGE_ELEMENT_BORDER_COLOR',
	SET_ACTIVE_ELEMENT = 'SET_ACTIVE_ELEMENT',
	DELETE_ACTIVE_ELEMENT = 'DELETE_ACTIVE_ELEMENT',
	CHANGE_FONT = 'CHANGE_FONT',
	CHANGE_TEXT = 'CHANGE_TEXT',
	UNDO = 'UNDO',
	REDO = 'REDO',
	SET = 'SET',
}

type CreateSlideAction = {
	type: SlideActions.CREATE_SLIDE;
	payload: {
		slide: Slide;
	};
};

type DeleteSlideAction = {
	type: SlideActions.DELETE_SLIDE;
	payload: {
		slideId: number;
	};
};

type ChangeSlideOrderAction = {
	type: SlideActions.CHANGE_ORDER;
	payload: {
		draggingSlideId: number;
		destinationSlideId: number;
	};
};

type ChangeActiveSlide = {
	type: SlideActions.CHANGE_ACTIVE_SLIDE;
	payload: {
		currentSlideId: number;
	};
};

type AddElementAction = {
	type: SlideActions.ADD_ELEMENT;
	payload: {
		element: GeneralElementType;
	};
};

type MoveElementAction = {
	type: SlideActions.MOVE_ELEMENT;
	payload: {
		elementId: number;
		newLeft: number;
		newTop: number;
	};
};

type ResizeElementAction = {
	type: SlideActions.RESIZE_ELEMENT;
	payload: {
		elementId: number;
		newHeight: number;
		newWidth: number;
	};
};

type ChangeBackgroundColorAction = {
	type: SlideActions.CHANGE_BACKGROUND_COLOR;
	payload: {
		newColor: string;
	};
};

type ChangeElementColorAction = {
	type: SlideActions.CHANGE_ELEMENT_COLOR;
	payload: {
		newColor: string;
	};
};

type ChangeElementBorderColorAction = {
	type: SlideActions.CHANGE_ELEMENT_BORDER_COLOR;
	payload: {
		newColor: string;
	};
};

type SetActiveElementAction = {
	type: SlideActions.SET_ACTIVE_ELEMENT;
	payload: {
		elementId: number;
	};
};

type DeleteActiveElementAction = {
	type: SlideActions.DELETE_ACTIVE_ELEMENT;
	payload: Record<string, never>;
};

type ChangeFontAction = {
	type: SlideActions.CHANGE_FONT;
	payload: {
		font: string;
		size: number;
	};
};
type SaveTextAction = {
	type: SlideActions.CHANGE_TEXT;
	payload: {
		newText: string;
	};
};

type UndoAction = {
	type: SlideActions.UNDO;
	payload: Record<string, never>;
};

type RedoAction = {
	type: SlideActions.REDO;
	payload: Record<string, never>;
};

type SetAction = {
	type: SlideActions.SET;
	payload: {
		newSlides: Slide[];
	};
};

type SlideAction =
	| CreateSlideAction
	| DeleteSlideAction
	| ChangeSlideOrderAction
	| ChangeActiveSlide
	| AddElementAction
	| MoveElementAction
	| ResizeElementAction
	| ChangeBackgroundColorAction
	| SetActiveElementAction
	| DeleteActiveElementAction
	| ChangeFontAction
	| ChangeElementColorAction
	| ChangeElementBorderColorAction
	| SaveTextAction
	| UndoAction
	| RedoAction
	| SetAction;

export {SlideActions, type SlideAction};
