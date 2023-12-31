type Scale = {
  width: number;
  height: number;
};

export type Position = {
  top: number;
  left: number;
};

export type SlideElement = {
  id: number;
  pos: Position;
  size: Scale;
  borderColor: string;
  isSelected: boolean;
};

type Font = {
  font_style: string;
  font_size: number;
  font_family: string;
  Color: string;
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

export type GeneralElementType = Figure | Picture | TextBox;

export type Slide = {
  id: number;
  elements: Array<GeneralElementType>;
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
