import { Figure, Picture, TextBox, Slide, Presentation } from "./types";
// TODO: исправить форматирование кода
// переделать фигуры чтобы менять цвета
// КОГДА ПУСТЫЕ ДАННЫЕ
const figure: Figure = {
  type: "Figure",
  id: 1,
  pos: {
    top: 11,
    left: 23,
  },
  size: {
    height: 40,
    width: 25,
  },
  borderColor: null,
  isSelected: false,
  shape: "square",
  innerColor: "ffffff",
  width: 100,
  height: 10,
};

const img: Picture = {
  type: "Image",
  id: 2,
  pos: {
    top: 40,
    left: 40,
  },
  size: {
    height: 20,
    width: 24,
  },
  borderColor: null,
  isSelected: false,
  path: require("../img/kot.jpg"),
};

export const text: TextBox = {
  type: "Text",
  id: 3,
  pos: {
    top: 15,
    left: 10,
  },
  size: {
    height: 20,
    width: 40,
  },
  borderColor: null,
  isSelected: false,
  content: "Write your text",
  font: {
    font_style: "normal",
    font_family: "",
    font_size: 36,
    Color: "ffffff",
  },
};

const slide: Slide = {
  id: 1,
  elements: [figure, img, text],
  numberOfSlide: 1,
  backgroundColor: "ffffff",
};

const slide2: Slide = {
  id: 1,
  elements: [figure, img, text],
  numberOfSlide: 1,
  backgroundColor: "ffffff",
};

export const presentation: Presentation = {
  name: "untitled1",
  slide: [slide],
  history: [],
  historyIndex: 1,
};
