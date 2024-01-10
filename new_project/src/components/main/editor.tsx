import React from 'react';

import {useAppSelector} from '../../redux/hooks';

// import objects
import ShowSlide from './mainSlide/mainSlide';
import ShowSlider from './slider/slider';

// import Editor styles
import EditorStyle from './editor.module.css';

const Editor = () => {
	const presentation = useAppSelector((state) => state.presentation);

	const slides = useAppSelector((state) => state.slides);
	const toolState = useAppSelector((state) => state.toolState);
	return (
		<div
			className={EditorStyle.editor}
			style={{
				visibility: presentation.ViewMode ? 'hidden' : 'visible',
				opacity: presentation.ViewMode ? '0' : '100%',
				width: presentation.ViewMode ? '0' : '100vw',
				height: presentation.ViewMode ? '0' : '100vh',
			}}
		>
			<ShowSlider slides={slides} />
			<div
				className={EditorStyle.slide_area}
				style={{
					visibility: presentation.ViewMode ? 'hidden' : 'visible',
					opacity: presentation.ViewMode ? '0' : '100%',
					width: presentation.ViewMode ? '0' : '100vw',
				}}
			>
				<ShowSlide slides={slides} activeTool={toolState.activeTool} />
			</div>
		</div>
	);
};

export default Editor;
