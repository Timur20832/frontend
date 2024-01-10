import {Presentation} from '../../data/types';

enum PresentationActions {
	RENAME_PRESENTATION = 'RENAME_PRESENTATION',
	IMPORT_PRESENTATION = 'IMPORT_PRESENTATION',
	VIEW_PRESENTATION = 'VIEW_PRESENTATION',
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

type ChangeViewModeAction = {
	type: PresentationActions.VIEW_PRESENTATION;
	payload: Record<string, never>;
};

type PresentationAction =
	| RenamePresentationAction
	| ImportPresentationAction
	| ChangeViewModeAction;

export {PresentationActions, type PresentationAction};
