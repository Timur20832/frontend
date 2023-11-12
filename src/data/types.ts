import { type } from "os";
export enum Form {
  triangle = "shapeTriangle",
  circle = "circle-shape.svg",
  square = "shape-square.svg",
}

export type Figure = SlideElement & {
  type: "Figure"
  shape: Form;
  innerColor: string;
  width: number;
  height: number;
};
export type Picture = SlideElement & {
  type: "Image"
  path: string;
};

export type Presentation = {
  name: string;
  slide: Array<Slide>;
  history: Array<Presentation>;
  historyIndex: number;
};

export type Slide = {
  id: number;
  elements: Array<Figure | Picture | TextBox>;
  numberOfSlide: number;
  backgroundColor: string;
};

export type SlideElement = {
  id: number;
  posX: number;
  posY: number;
  size: number;
  borderColor: string | null;
  isSelected: boolean;
};

export type TextBox = SlideElement & {
  type: "Text"
  content: string;
  font: string;
};

export type GeneralElementType =
  | Figure
  | Picture
  | TextBox;
