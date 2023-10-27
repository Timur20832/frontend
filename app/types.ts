import { type } from "os";

enum Form {
  "triangle",
  "circle",
  "square",
}

type Figure = SlideElement & {
  shape: Form;
  innerColor: string;
  width: number;
  height: number;
};

type Picture = SlideElement & {
  path: string;
};

type Presentation = {
  name: string;
  slide: Array<Slide>;
  history: Array<Presentation>;
  historyIndex: number;
};

type Slide = {
  id: number;
  elements: Array<Figure | Picture | TextBox>;
  numberOfSlide: number;
  backgroundColor: string;
};

type SlideElement = {
  id: number;
  posX: number;
  posY: number;
  size: number;
  borderColor: string | null;
  isSelected: boolean;
};

type TextBox = SlideElement & {
  content: string;
  font: string;
};

export type {
  
}

const figure: Figure = {
  id: 1,
  posX: 0,
  posY: 2,
  size: 100,
  borderColor: null,
  isSelected: false,
  shape: Form.circle,
  innerColor: "ffffff",
  width: 100,
  height: 10,
};

const img: Picture = {
  id: 2,
  posX: 0,
  posY: 3,
  size: 100,
  borderColor: null,
  isSelected: false,
  path: "/img.png",
};

const text: TextBox = {
  id: 3,
  posX: 0,
  posY: 2,
  size: 400,
  borderColor: null,
  isSelected: false,
  content: "content",
  font: "comicSans",
};

const slide: Slide = {
  id: 1,
  elements: [figure, img, text],
  numberOfSlide: 1,
  backgroundColor: "ffffff",
};

const presentation: Presentation = {
  name: "untitled1",
  slide: [slide],
  history: [],
  historyIndex: 1,
};

