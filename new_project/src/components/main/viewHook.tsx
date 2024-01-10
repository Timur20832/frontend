import {GeneralElementType} from '../../data/types';
import {ShowGraphElement} from '../navbarComponents/objectToolsComponents/artObject/hookElements';
import {ShowImageElement} from '../navbarComponents/objectToolsComponents/image/hookImg';
import {ShowTextElement} from '../navbarComponents/objectToolsComponents/textElement/hookText';

type props = {
	element: GeneralElementType;
	zoomX: number;
	visibility: string;
};

export function SelectTypeOfElement(prop: props) {
	switch (prop.element.type) {
		case 'Text':
			return ShowTextElement(prop.element, prop.zoomX, prop.visibility);
		case 'Image':
			return ShowImageElement(prop.element, prop.zoomX, prop.visibility);
		case 'Figure':
			return ShowGraphElement(prop.element, prop.zoomX, prop.visibility);
	}
}

export default SelectTypeOfElement;
