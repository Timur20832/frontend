import React from 'react';
import ButtonStyle from './redoAction.module.css';
import {ReactComponent as RedoNavbarSVG} from '../../../../sources/navbar icons/redo-navbar-icon.svg';
import {useAppActions} from '../../../../redux/hooks';

const RedoAction = () => {
	const {createRedoAction} = useAppActions();
	const redoAction = () => {
		createRedoAction();
	};

	return (
		<button className={ButtonStyle.buttontools} onClick={redoAction}>
			<RedoNavbarSVG />
		</button>
	);
};

export default RedoAction;
