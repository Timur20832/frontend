import {
  Figure,
  Picture,
  Presentation,
  Slide,
  TextBox,
  ToolState,
  ToolType,
  PresentationState,
} from "./types";

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
  borderColor: "black",
  isSelected: false,
  shape: "square",
  innerColor: "black",
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
  borderColor: "black",
  isSelected: false,
  path: require("../sources/images/kot.jpg"),
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
  borderColor: "black",
  isSelected: false,
  content: "Write your text",
  backgroundColor: "transparent",
  font: {
    font_style: "normal",
    font_family: "",
    font_size: 36,
    Color: "black",
  },
};

export const text1: TextBox = {
  type: "Text",
  id: 1,
  pos: {
    top: 15,
    left: 10,
  },
  size: {
    height: 20,
    width: 40,
  },
  borderColor: "black",
  isSelected: false,
  content: "Write your text",
  backgroundColor: "transparent",
  font: {
    font_style: "normal",
    font_family: "",
    font_size: 36,
    Color: "black",
  },
};
export const slide: Slide = {
  id: 1,
  elements: [],
  numberOfSlide: 1,
  backgroundColor: "#ff0000",
  active: true,
};

const slide2: Slide = {
  id: 2,
  elements: [figure, img, text],
  numberOfSlide: 2,
  backgroundColor: "#ffffff",
  active: false,
};

export const presentationInitData: Presentation = {
  name: "untitled1",
  slide: [slide, slide2],
  history: [],
  historyIndex: 1,
};

export const toolsInitState: ToolState = {
  activeTool: ToolType.NO_TOOL,
  activeColor: "#ffffff",
};

export const presentationInitState: PresentationState = {
  Presentation: presentationInitData,
  ViewMode: false,
};
