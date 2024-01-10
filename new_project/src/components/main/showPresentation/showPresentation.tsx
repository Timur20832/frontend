import React from 'react';

import SelectTypeOfElement from '../viewHook';

// import svg/svg's

// import Presentation Show styles
import {useAppActions, useAppSelector} from '../../../redux/hooks';
import SlideStyle from '../mainSlide/mainSlide.module.css';

function ShowPresentationElement() {
	const slides = useAppSelector((state) => state.slides);
	const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);

	const {createChangeViewModeAction} = useAppActions();

	const presentation = useAppSelector((state) => state.presentation);

	const zoomX = 1.4;
	const visibility = 'none';

	const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.code === 'Escape' || event.code === 'Enter') {
			createChangeViewModeAction();
		}
	};

	function NextSlideId() {
		if (activeSlideIndex + 1 < slides.length) {
			setActiveSlideIndex(activeSlideIndex + 1);
		} else {
			createChangeViewModeAction();
			setActiveSlideIndex(0);
		}
	}

	return (
		<div
			onClick={() => {
				NextSlideId();
			}}
			onKeyDown={keyDownHandler}
			className={SlideStyle.main}
			style={{
				alignContent: 'center',
				justifyContent: 'center',
				backgroundColor: slides[activeSlideIndex].backgroundColor,
				visibility: !presentation.ViewMode ? 'hidden' : 'visible',
				opacity: !presentation.ViewMode ? '0' : '100%',
				width: !presentation.ViewMode ? '0' : '100vw',
				height: !presentation.ViewMode ? '0' : '100vh',
				border: 'none',
				borderRadius: '0',
				margin: '0',
				overflow: 'hidden',
			}}
		>
			{slides[activeSlideIndex].elements.map((element) =>
				SelectTypeOfElement({element, zoomX, visibility}),
			)}
		</div>
	);
}

export default ShowPresentationElement;
