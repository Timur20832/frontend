import {SlideAction, SlideActions} from './Actions/slideActions';
import {
	Figure,
	Presentation,
	PresentationState,
	Slide,
	SlideElement,
	TextBox,
} from '../data/types';
import {
	presentationInitData,
	presentationInitState,
	toolsInitState,
} from '../data/consts';
import {combineReducers} from 'redux';
import {
	PresentationAction,
	PresentationActions,
} from './Actions/presentationActions';
import {ToolAction, ToolActions} from './Actions/toolActions';
import {createHistory} from '../data/History';
import {log} from 'node:util';

const initData: Presentation = presentationInitData;

const history = createHistory<string>(JSON.stringify(initData.slide));

const findActiveSlide = (slides: Slide[]) => {
	return slides.findIndex((slide) => slide.active);
};

const findActiveElement = (elements: SlideElement[]) => {
	return elements.findIndex((element) => element.isSelected);
};

const slidesReducer = (
	state: Slide[] = initData.slide,
	action: SlideAction,
) => {
	switch (action.type) {
		case SlideActions.CREATE_SLIDE: {
			const newState = [...state, action.payload.slide];
			history.addHistoryItem(JSON.stringify(newState));
			return newState;
		}
		case SlideActions.DELETE_SLIDE: {
			let newState = [...state];
			if (newState.length > 1) {
				newState = newState.filter(
					(item) => item.id !== action.payload.slideId,
				);
			} else {
				newState[0].elements = [];
			}
			history.addHistoryItem(JSON.stringify(newState));
			return newState;
		}
		case SlideActions.CHANGE_ORDER: {
			const newState = [...state];
			const currentSlideIndex = newState.findIndex(
				(slide) => slide.id === action.payload.draggingSlideId,
			);
			const slideIndex = newState.findIndex(
				(slide) => slide.id === action.payload.destinationSlideId,
			);
			newState[currentSlideIndex].id = [
				newState[slideIndex].id,
				(newState[slideIndex].id = newState[currentSlideIndex].id),
			][0];
			history.addHistoryItem(JSON.stringify(newState));
			return newState;
		}
		case SlideActions.CHANGE_ACTIVE_SLIDE: {
			const newState = [...state];
			if (newState.findIndex((slide) => slide.active) > -1) {
				newState[newState.findIndex((slide) => slide.active)].active =
					false;
			}
			newState[action.payload.currentSlideId].active = true;
			history.addHistoryItem(JSON.stringify(newState));
			return newState;
		}
		case SlideActions.ADD_ELEMENT: {
			const newState = [...state];
			const activeSlide = findActiveSlide(newState);
			newState[activeSlide].elements.push(action.payload.element);
			history.addHistoryItem(JSON.stringify(newState));
			return newState;
		}
		case SlideActions.MOVE_ELEMENT: {
			const newState = [...state];
			const activeSlide = findActiveSlide(newState);
			const currentIndexElement = newState[
				activeSlide
			].elements.findIndex(
				(element) => element.id === action.payload.elementId,
			);
			newState[activeSlide].elements[currentIndexElement].pos.left =
				action.payload.newLeft;
			newState[activeSlide].elements[currentIndexElement].pos.top =
				action.payload.newTop;
			history.addHistoryItem(JSON.stringify(newState));
			return newState;
		}
		case SlideActions.RESIZE_ELEMENT: {
			const newState = [...state];
			const activeSlide = findActiveSlide(newState);
			const activeIndexElement = newState[activeSlide].elements.findIndex(
				(element) => element.id === action.payload.elementId,
			);
			newState[activeSlide].elements[activeIndexElement].size.height =
				action.payload.newHeight;
			newState[activeSlide].elements[activeIndexElement].size.width =
				action.payload.newWidth;
			history.addHistoryItem(JSON.stringify(newState));
			return newState;
		}
		case SlideActions.CHANGE_BACKGROUND_COLOR: {
			const newState = [...state];
			const activeSlide = findActiveSlide(newState);
			newState[activeSlide].backgroundColor = action.payload.newColor;
			history.addHistoryItem(JSON.stringify(newState));
			return newState;
		}
		case SlideActions.CHANGE_ELEMENT_COLOR: {
			const newState = [...state];
			const activeSlide = findActiveSlide(newState);
			const activeElement = findActiveElement(
				newState[activeSlide].elements,
			);
			if (newState[activeSlide].elements[activeElement] === undefined) {
				history.addHistoryItem(JSON.stringify(newState));
				return newState;
			}
			if (
				newState[activeSlide].elements[activeElement].type === 'Figure'
			) {
				const element = newState[activeSlide].elements[
					activeElement
				] as Figure;
				element.innerColor = action.payload.newColor;
				newState[activeSlide].elements[activeElement] = element;
			} else if (
				newState[activeSlide].elements[activeElement].type === 'Text'
			) {
				const element = newState[activeSlide].elements[
					activeElement
				] as TextBox;
				element.backgroundColor = action.payload.newColor;
				newState[activeSlide].elements[activeElement] = element;
			}
			console.log(newState);
			history.addHistoryItem(JSON.stringify(newState));
			return newState;
		}
		case SlideActions.CHANGE_ELEMENT_BORDER_COLOR: {
			const newState = [...state];
			const activeSlide = findActiveSlide(newState);
			const activeElement = findActiveElement(
				newState[activeSlide].elements,
			);
			if (newState[activeSlide].elements[activeElement] === undefined) {
				history.addHistoryItem(JSON.stringify(newState));
				return newState;
			}
			const element = newState[activeSlide].elements[activeElement];
			element.borderColor = action.payload.newColor;
			newState[activeSlide].elements[activeElement] = element;
			history.addHistoryItem(JSON.stringify(newState));
			return newState;
		}
		case SlideActions.SET_ACTIVE_ELEMENT: {
			const newState = [...state];
			const activeSlide = findActiveSlide(newState);
			const activeElement = findActiveElement(
				newState[activeSlide].elements,
			);
			if (activeElement > -1) {
				newState[activeSlide].elements[activeElement].isSelected =
					false;
			}
			if (
				newState[activeSlide].elements[
					newState[activeSlide].elements.findIndex(
						(element) => element.id === action.payload.elementId,
					)
				] === undefined
			) {
				history.addHistoryItem(JSON.stringify(newState));
				return newState;
			}
			newState[activeSlide].elements[
				newState[activeSlide].elements.findIndex(
					(element) => element.id === action.payload.elementId,
				)
			].isSelected = true;
			history.addHistoryItem(JSON.stringify(newState));
			return newState;
		}
		case SlideActions.DELETE_ACTIVE_ELEMENT: {
			const newState = [...state];
			const activeSlide = findActiveSlide(newState);
			const activeElement = findActiveElement(
				newState[activeSlide].elements,
			);
			if (activeElement > -1) {
				newState[activeSlide].elements = newState[
					activeSlide
				].elements.filter((item) => !item.isSelected);
			}
			history.addHistoryItem(JSON.stringify(newState));
			return newState;
		}
		case SlideActions.CHANGE_FONT: {
			const newState = [...state];
			const activeSlide = findActiveSlide(newState);
			const activeElement = findActiveElement(
				newState[activeSlide].elements,
			);
			const selectedElement =
				newState[activeSlide].elements[activeElement];
			if (selectedElement !== undefined) {
				if (selectedElement.type === 'Text') {
					const textBox = selectedElement as TextBox;
					textBox.font.font_size = action.payload.size;
					textBox.font.font_family = action.payload.font;
					newState[activeSlide].elements[activeElement] = textBox;
				}
			}
			history.addHistoryItem(JSON.stringify(newState));
			return newState;
		}
		case SlideActions.CHANGE_TEXT: {
			const newState = [...state];
			const activeSlide = findActiveSlide(newState);
			const activeElement = findActiveElement(
				newState[activeSlide].elements,
			);
			const selectedElement =
				newState[activeSlide].elements[activeElement];
			if (selectedElement !== undefined) {
				if (selectedElement.type === 'Text') {
					const textBox = selectedElement as TextBox;
					textBox.content = action.payload.newText;
					newState[activeSlide].elements[activeElement] = textBox;
				}
			}
			history.addHistoryItem(JSON.stringify(newState));
			return newState;
		}
		case SlideActions.UNDO: {
			const prevState = history.undo();
			if (prevState) {
				return JSON.parse(prevState) as Slide[];
			}
			return state;
		}
		case SlideActions.REDO: {
			const nextState = history.redo();
			if (nextState) {
				return JSON.parse(nextState) as Slide[];
			}
			return state;
		}
		case SlideActions.SET: {
			if (action.payload.newSlides) {
				return action.payload.newSlides;
			}
			return state;
		}
		default:
			return [...state];
	}
};

const clearHistory = () => {
	let prevState = history.undo();
	while (prevState) {
		prevState = history.undo();
	}
};
const presentationReducer = (
	state: PresentationState = presentationInitState,
	action: PresentationAction,
) => {
	switch (action.type) {
		case PresentationActions.IMPORT_PRESENTATION: {
			const newState: PresentationState = {
				Presentation: state.Presentation,
				ViewMode: state.ViewMode,
			};
			newState.Presentation = action.payload.newPresentation;
			clearHistory();
			return newState;
		}
		case PresentationActions.RENAME_PRESENTATION: {
			const newState: PresentationState = {
				Presentation: state.Presentation,
				ViewMode: state.ViewMode,
			};
			newState.Presentation.name = action.payload.newName;
			return newState;
		}
		case PresentationActions.VIEW_PRESENTATION: {
			const newState: PresentationState = {
				Presentation: state.Presentation,
				ViewMode: !state.ViewMode,
			};
			console.log(newState);
			return newState;
		}
		default:
			return state;
	}
};

const toolReducer = (state = toolsInitState, action: ToolAction) => {
	switch (action.type) {
		case ToolActions.CHOOSE_TOOL: {
			const newState = state;
			newState.activeTool = action.payload.activeTool;
			return newState;
		}
		case ToolActions.CHOOSE_COLOR: {
			const newState = state;
			newState.activeColor = action.payload.activeColor;
			return newState;
		}
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	slides: slidesReducer,
	presentation: presentationReducer,
	toolState: toolReducer,
});

export {rootReducer};
