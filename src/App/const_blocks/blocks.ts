import { Figure } from '../types/types';
import { Picture } from '../types/types';
import { TextBox } from '../types/types';
import { Slide } from '../types/types';
import { Presentation } from '../types/types';

export const ConstFigure: Figure = {
    id: 1,
    posX: 0,
    posY: 2,
    size: 100,
    borderColor: null,
    isSelected: false,
    shape: "triangle",
    innerColor: "ffffff",
    width: 100,
    height: 10
}

export const ConstImg: Picture = {
    id: 2,
    posX: 0,
    posY: 3,
    size: 100,
    borderColor: null,
    isSelected: false,
    path: "/img.png"
}

export const ConstText: TextBox = {
    id: 3,
    posX: 0,
    posY: 2,
    size: 400,
    borderColor: null,
    isSelected: false,
    content: "content",
    font: "comicSans"
}

export const ConstSlide: Slide = {
    id: 1,
    elements: [],
    numberOfSlide: 1,
    backgroundColor: "ffffff"
}

export const presentation: Presentation = {
    name: 'untitled1',
    slide: [ConstSlide],
    history: [],
    historyIndex: 1
}