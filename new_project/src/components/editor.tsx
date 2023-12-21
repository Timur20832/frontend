import { ShowSlide, ShowSlider } from "./slide";
import { presentation, text } from "../data/consts";
import { textElement, false_text } from "./Navbar/navbar";
import { useState } from "react";
import { Position, TextBox } from "../data/types";
import { useDispatch, useSelector } from "react-redux";
import { appdispatch, rootState } from "../store/ObjectsReducer";
import { changeElements } from "./ElementsCreator/ElementsCreator";
import { createInputElement } from "./ElementsCreator/create";

export function Editor() {
  const [inputValue, setInputValue] = useState("");
  const useAppDispath = () => useDispatch<appdispatch>();
  const dispatch = useAppDispath();
  const elements = useSelector(
    (state: rootState) => state.elementsSlicer.elements,
  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  function createInput(event: React.MouseEvent) {
    const clickPosition: Position = {
      top: event.clientY - event.currentTarget.getBoundingClientRect().top,
      left: event.clientX - event.currentTarget.getBoundingClientRect().left,
    };
    if (textElement) {
      createInputElement(dispatch, elements, clickPosition);
    }
  }

  return (
    <div className="editor">
      <div className="slider">{ShowSlider(presentation)}</div>
      <div className="main-slaid" onClick={createInput}>
        {ShowSlide(presentation)}
        {elements.map((element) => (
          <input
            type="text"
            key={element.id}
            placeholder="write your text"
            style={{
              border: 0,
              position: "absolute",
              top: element.pos.top,
              left: element.pos.left,
            }}
          />
        ))}
      </div>
    </div>
  );
}
