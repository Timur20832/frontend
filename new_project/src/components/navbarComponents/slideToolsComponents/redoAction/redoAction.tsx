import React from 'react';
import ButtonStyle from './redoAction.module.css';
import {ReactComponent as ExportNavbarSVG} from '../../../../sources/navbar icons/export-navbar-icon.svg';
import {useAppActions} from '../../../../redux/hooks';

const RedoAction = () => {
	const {createRedoAction} = useAppActions();
	const redoAction = () => {
		createRedoAction();
	};

	return (
		<button className={ButtonStyle.buttontools} onClick={redoAction}>
			<ExportNavbarSVG />
		</button>
	);
};

export default RedoAction;
