const figure: Figure = {
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

const img: Picture = {
    id: 2,
    posX: 0,
    posY: 3,
    size: 100,
    borderColor: null,
    isSelected: false,
    path: "/img.png"
}

const text: TextBox = {
    id: 3,
    posX: 0,
    posY: 2,
    size: 400,
    borderColor: null,
    isSelected: false,
    content: "content",
    font: "comicSans"
}

const slide: Slide = {
    id: 1,
    elements: [figure, img, text],
    numberOfSlide: 1,
    backgroundColor: "ffffff"
}

const presentation: Presentation = {
    name: 'untitled1',
    slide: [slide],
    history: [],
    historyIndex: 1
}

