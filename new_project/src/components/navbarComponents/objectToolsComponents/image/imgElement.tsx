import React from 'react';
// import Button styles
import ButtonStyle from './imgElement.module.css';
// import svg / svg's
import {ReactComponent as ImageNavbarSVG} from '../../../../sources/navbar icons/image-navbar-icon.svg';
import {
	GeneralElementType,
	Picture,
	Slide,
	SlideElement,
} from '../../../../data/types';
import {useAppActions} from '../../../../redux/hooks';

type props = {
	slides: Slide[];
};

const ImageElement = (prop: props) => {
	const {createAddElementAction} = useAppActions();
	const addElementSlide = (element: GeneralElementType) => {
		createAddElementAction(element);
	};
	const findLastId = (elements: SlideElement[]) => {
		if (elements.length === 0) {
			return 0;
		}
		const max = elements.reduce((acc, curr) =>
			acc.id > curr.id ? acc : curr,
		);
		return max.id;
	};

	function createImage() {
		const activeSlide = prop.slides.find((slide) => slide.active);
		if (!activeSlide) return null;
		const inputElement = document.createElement('input');
		inputElement.type = 'file';
		inputElement.accept = 'image/*';
		inputElement.onchange = (e: Event) => {
			const target = e.target as HTMLInputElement;
			if (target.files && target.files[0]) {
				const file = target.files[0];
				const reader = new FileReader();
				reader.onload = () => {
					const imageUrl = reader.result;
					if (imageUrl && typeof imageUrl === 'string') {
						const image = new Image();
						image.onload = () => {
							const imageBlock: Picture = {
								id: activeSlide.elements.length + 1,
								pos: {left: 0, top: 0},
								type: 'Image',
								size: {
									width: 1000,
									height: 600,
								},
								path: imageUrl,
								isSelected: false,
								borderColor: '#000',
							};
							addElementSlide(imageBlock);
						};
						image.src = imageUrl;
					}
				};
				reader.readAsDataURL(file);
			}
		};
		inputElement.click();
	}

	return (
		<>
			<input type="file" id="upload" style={{display: 'none'}} />
			<label htmlFor="upload">
				<button
					className={ButtonStyle.buttontools}
					onClick={() => createImage()}
				>
					<ImageNavbarSVG />
				</button>
			</label>
		</>
	);
};

export default ImageElement;
