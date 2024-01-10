import {Slide} from '../../../data/types';
import {SelectTypeOfElement} from '../viewHook';
import SliderStyle from './slider.module.css';
import {useState} from 'react';
import {useAppActions, useAppSelector} from '../../../redux/hooks';

type SliderProps = {
	slides: Slide[];
};

function ShowSlider(prop: SliderProps) {
	const zoomX = 0.21;
	const visibility = 'none';
	const [currentSlide, setCurrentSlide] = useState<Slide | null>(null);
	const {createChangeSlideOrderAction, createChangeActiveSlideAction} =
		useAppActions();

	function dragStartHandler(
		e: React.DragEvent<HTMLUListElement>,
		slide: Slide,
	) {
		setCurrentSlide(slide);
	}

	function dragEndHandler(e: React.DragEvent<HTMLUListElement>) {
		const targetElement = e.target as HTMLUListElement;
		targetElement.style.borderColor = '#000000';
	}

	function dragOverHandler(e: React.DragEvent<HTMLUListElement>) {
		e.preventDefault();
		const targetElement = e.target as HTMLUListElement;
		targetElement.style.borderColor = '#ff0000';
	}

	function dropHandler(e: React.DragEvent<HTMLUListElement>, slide: Slide) {
		e.preventDefault();
		if (currentSlide === null) {
			return;
		}
		const targetElement = e.target as HTMLUListElement;
		createChangeSlideOrderAction(currentSlide.id, slide.id);
		targetElement.style.borderColor = '#000000';
	}

	const sortSlides = (slide1: Slide, slide2: Slide) => {
		if (slide1.id > slide2.id) {
			return 1;
		} else return -1;
	};

	const changeActive = (curSlide: Slide) => {
		console.log(prop.slides);
		createChangeActiveSlideAction(
			prop.slides.findIndex((slide) => slide.id === curSlide.id),
		);
	};

	return (
		<div className={SliderStyle.slider}>
			<ul className={SliderStyle.list}>
				{prop.slides.sort(sortSlides).map((slide) => (
					<li key={slide.id} className={SliderStyle.child}>
						<ul
							onDragStart={(e) => dragStartHandler(e, slide)}
							onDragLeave={(e) => dragEndHandler(e)}
							onDragEnd={(e) => dragEndHandler(e)}
							onDragOver={(e) => dragOverHandler(e)}
							onDrop={(e) => dropHandler(e, slide)}
							draggable={true}
							onClick={() => changeActive(slide)}
							style={{
								backgroundColor: slide.backgroundColor,
								height: '100%',
							}}
						>
							{slide.elements.map((element) =>
								SelectTypeOfElement({
									element,
									zoomX,
									visibility,
								}),
							)}
						</ul>
					</li>
				))}
			</ul>
			<div className={SliderStyle.scroll_area}></div>
		</div>
	);
}

export default ShowSlider;
