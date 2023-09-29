enum Form
{
    "triangle",
    "circle",
    "square"
}

type Figure = {
    shape: Form,
    innerColor: string,
    width: number,
    height: number,
}

type Picture = {
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
    borderColor: string,
    isSelected: boolean,
}

type TextBox = {
    content: string;
    font: string;
}