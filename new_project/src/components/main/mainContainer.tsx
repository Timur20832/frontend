import Navbar from '../navbarComponents/navbar/navbar';
import Editor from './editor';
import React from 'react';
import {useAppSelector} from '../../redux/hooks';

function MainContainer() {
	const presentation = useAppSelector((state) => state.presentation);
	return (
		<div
			style={{
				visibility: presentation.ViewMode ? 'hidden' : 'visible',
				opacity: presentation.ViewMode ? '0' : '100%',
				width: presentation.ViewMode ? '0' : '100vw',
				height: presentation.ViewMode ? '0' : '100vh',
				border: 'none',
				margin: '0',
				overflow: 'hidden',
			}}
		>
			<Navbar presentationState={presentation} />
			<Editor />
		</div>
	);
}

export default MainContainer;
