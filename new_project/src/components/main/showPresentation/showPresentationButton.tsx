import React from 'react';
import ShowPresentationButtonStyle from './showPresentation.module.css';

import {ReactComponent as StartViewSVG} from '../../../sources/navbar icons/startView-navbar-icon.svg';
import {useAppActions} from '../../../redux/hooks';

function ShowPresentationButton() {
	const {createChangeViewModeAction} = useAppActions();
	const changeVisibility = () => {
		createChangeViewModeAction();
	};
	return (
		<button
			className={ShowPresentationButtonStyle.buttontools}
			onClick={changeVisibility}
		>
			<StartViewSVG />
		</button>
	);
}

export default ShowPresentationButton;
