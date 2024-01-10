import React from 'react';
import ButtonStyle from './triangleElement.module.css';
import {ReactComponent as TriangleNavbarSVG} from '../../../../../sources/navbar icons/triangle-navbar-icon.svg';
import {useAppActions} from '../../../../../redux/hooks';
import {ToolType} from '../../../../../data/types';

const TriangleElement = () => {
	const {createChooseToolAction} = useAppActions();
	const changeActive = () => {
		createChooseToolAction(ToolType.TRIANGLE);
	};
	return (
		<button className={ButtonStyle.buttontools} onClick={changeActive}>
			<TriangleNavbarSVG />
		</button>
	);
};

export default TriangleElement;
