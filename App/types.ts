enum Form
{
    "triangle",
    "circle",
    "square"
}

type Figure = SlideElement & {
    shape: string,
    innerColor: string,
    width: number,
    height: number,
}

type Picture = SlideElement & {
    path: string
}

type Presentation = {
    name: string,
    slide: Array<Slide>,
    history: Array<Presentation>,
    historyIndex: number,
}

type Slide = {
    id: number,
    elements: Array<Figure | Picture | TextBox>,
    numberOfSlide: number,
    backgroundColor: string,
}

type SlideElement = {
    id: number,
    posX: number,
    posY: number,
    size: number,
    borderColor: string|null,
    isSelected: boolean,
}

type TextBox = SlideElement & {
    content: string;
    font: string;
}