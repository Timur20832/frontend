type Scale = {
  width: number;
  height: number;
};

export type Position = {
  top: number;
  left: number;
};

type Font = {
  font_style: string;
  font_size: number;
  font_family: string;
  Color: string;
};

export type SlideElement = {
  id: number;
  pos: Position;
  size: Scale;
  borderColor: string | null;
  isSelected: boolean;
};

export type Figure = SlideElement & {
  type: "Figure";
  shape: string;
  innerColor: string;
  width: number;
  height: number;
};

export type Picture = SlideElement & {
  type: "Image";
  path: string;
};

export type TextBox = SlideElement & {
  type: "Text";
  content: string;
  font: Font;
};

export type Slide = {
  id: number;
  elements: Array<Figure | Picture | TextBox>;
  numberOfSlide: number;
  backgroundColor: string;
  active: boolean;
};

export type Presentation = {
  name: string;
  slide: Array<Slide>;
  history: Array<Presentation>;
  historyIndex: number;
};

export type GeneralElementType = Figure | Picture | TextBox;
