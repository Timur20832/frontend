import React from 'react';
import ButtonStyle from './undoAction.module.css';
import {ReactComponent as UndoNavbarSVG} from '../../../../sources/navbar icons/undo-navbar-icon.svg';
import {useAppActions} from '../../../../redux/hooks';

const UndoAction = () => {
	const {createUndoAction} = useAppActions();
	const undoAction = () => {
		console.log('sdadsa');
		createUndoAction();
	};

	return (
		<button className={ButtonStyle.buttontools} onClick={undoAction}>
			<UndoNavbarSVG />
		</button>
	);
};

export default UndoAction;
