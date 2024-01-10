import React from 'react';
import LogoStyle from './logoPresentation.module.css';

import {ReactComponent as LogoSVG} from '../../../../sources/navbar icons/logo.svg';

const LogoPresentation = () => {
	return (
		<div className={LogoStyle.Logo}>
			<LogoSVG />
		</div>
	);
};

export default LogoPresentation;
