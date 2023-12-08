import { ShowSlide } from "./slide";
import { ShowSlider } from "./slide";
import { presentation } from "../data/consts";
import { textElement, false_text } from "./navbar";
import { useState } from "react";
import { TextBox, Position } from "../data/types";
import { text } from "../data/consts";
import { getByPlaceholderText } from "@testing-library/react";
export function Editor() {
  const [textElements, setTextElements] = useState<TextBox[]>([]);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  function createInput(event: React.MouseEvent) {
    const clickPosition: Position = {
      top: event.clientY - event.currentTarget.getBoundingClientRect().top,
      left: event.clientX - event.currentTarget.getBoundingClientRect().left,
    };

    if (textElement) {
      const childTextElements: TextBox = {
        id: textElements.length + 1,
        pos: clickPosition,
        type: text.type,
        content: "Write your text",
        size: text.size,
        borderColor: text.borderColor,
        isSelected: text.isSelected,
        font: text.font,
      };
      setTextElements([...textElements, childTextElements]);
      false_text();
    }
  }

  return (
    <div className="editor">
      <div className="slider">{ShowSlider(presentation)}</div>
      <div className="main-slaid" onClick={createInput}>
        {ShowSlide(presentation)}
        {textElements.map((element) => (
          <input
            type="text"
            key={element.id}
            placeholder= "write your text"
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
