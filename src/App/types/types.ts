export enum Form
{
    "triangle",
    "circle",
    "square"
}

export type Figure = SlideElement & {
    shape: string,
    innerColor: string,
    width: number,
    height: number,
}

export type Picture = SlideElement & {
    path: string
}

export type Presentation = {
    name: string,
    slide: Array<Slide>,
    history: Array<Presentation>,
    historyIndex: number,
}

export type Slide = {
    id: number,
    elements: Array<Figure | Picture | TextBox>,
    numberOfSlide: number,
    backgroundColor: string,
}

export type SlideElement = {
    id: number,
    posX: number,
    posY: number,
    size: number,
    borderColor: string|null,
    isSelected: boolean,
}

export type TextBox = SlideElement & {
    content: string;
    font: string;
}