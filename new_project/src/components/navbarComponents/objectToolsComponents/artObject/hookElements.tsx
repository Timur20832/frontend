import { Figure, Slide } from "../../../../data/types";
import React from "react";

export function ShowGraphElement(Element: Figure) {
  return (
    <div>
      <svg
        key={Element.id}
        style={{
          position: "absolute",
          width: Element.size.width + "%",
          height: Element.size.height + "%",
          left: Element.pos.left / 9 + "%",
          top: Element.pos.top / 6 + "%",
        }}
      >
        {Element.shape === "triangle" && (
          <g>
            <g>
              <polygon
                points=""
                fill={Element.innerColor}
                stroke={Element.borderColor}
                strokeWidth={25}
              />
            </g>
          </g>
        )}
        {Element.shape === "square" && (
          <g>
            <g>
              <rect
                width={100 + "%"}
                height={100 + "%"}
                fill={Element.innerColor}
                stroke={Element.borderColor}
              />
            </g>
          </g>
        )}
        {Element.shape === "circle" && (
          <g>
            <g>
              <circle
                cx={100}
                cy={75}
                r={70}
                fill={Element.innerColor}
                stroke={Element.borderColor}
              />
            </g>
          </g>
        )}
      </svg>
      <div
        style={{
          cursor: "nwse-resize",
          position: "absolute",
          width: "5px",
          height: "5px",
          left: Element.pos.left - 0.3 + "%",
          top: Element.pos.top - 0.3 + "%",
          backgroundColor: "black",
        }}
      />
    </div>
  );
}

export const createGraphElement = (
  event: React.MouseEvent,
  slide: Slide,
  shape: string,
) => {
  const id: number = slide.elements.length + 1;
  const shapec = shape;
  const element: Figure = {
    type: "Figure",
    id: id,
    pos: {
      left: event.clientX - event.currentTarget.getBoundingClientRect().left,
      top: event.clientY - event.currentTarget.getBoundingClientRect().top,
    },
    size: {
      height: 25,
      width: 25,
    },
    borderColor: "black",
    isSelected: false,
    shape: shapec,
    innerColor: "black",
  };
  return element;
};

export const SampleGraphElement = ({ element }: { element: Figure }) => {
  return (
    <div>
      <svg
        key={element.id}
        style={{
          position: "absolute",
          width: element.size.width,
          height: element.size.height,
          left: element.pos.left,
          top: element.pos.top,
        }}
      >
        {element.shape === "triangle" && (
          <g>
            <g>
              <polygon
                points=""
                fill={element.innerColor}
                stroke={element.borderColor}
                strokeWidth={25}
              />
            </g>
          </g>
        )}
        {element.shape === "square" && (
          <g>
            <g>
              <rect
                width={150}
                height={150}
                fill={element.innerColor}
                stroke={element.borderColor}
              />
            </g>
          </g>
        )}
        {element.shape === "circle" && (
          <g>
            <g>
              <circle
                cx={100}
                cy={75}
                r={70}
                fill={element.innerColor}
                stroke={element.borderColor}
              />
            </g>
          </g>
        )}
      </svg>
      <div
        style={{
          cursor: "nwse-resize",
          position: "absolute",
          width: "5px",
          height: "5px",
          left: element.pos.left - 0.3 + "%",
          top: element.pos.top - 0.3 + "%",
          backgroundColor: "black",
        }}
      />
    </div>
  );
};
