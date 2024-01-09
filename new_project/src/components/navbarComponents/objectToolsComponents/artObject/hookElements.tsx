import { Figure, Slide, SlideElement, ToolType } from "../../../../data/types";
import React from "react";
import { useAppActions } from "../../../../redux/hooks";

export function ShowGraphElement(
  Element: Figure,
  zoomX: number,
  zoomY: number,
  visibility: string,
) {
  const { createSetActiveElementAction } = useAppActions();
  function getIdElement(
    event: React.DragEvent<HTMLDivElement>,
    element: Figure,
    type: "div" | "artobj",
  ) {
    event.dataTransfer.setData("id", `${element.id}`);
    switch (type) {
      case "div":
        event.dataTransfer.setData("div", "true");
        event.dataTransfer.setData("artobj", "false");
        break;
      case "artobj":
        event.dataTransfer.setData("artobj", "true");
        event.dataTransfer.setData("div", "false");
        break;
    }
  }
  const setActive = () => {
    createSetActiveElementAction(Element.id);
  };
  return (
    <>
      <div
        onDragStart={(event) => getIdElement(event, Element, "artobj")}
        draggable={true}
        onClick={setActive}
      >
        <svg
          key={Element.id}
          style={{
            position: "absolute",
            width: Element.size.width * zoomX,
            height: Element.size.height * zoomX,
            left: Element.pos.left * zoomX,
            top: Element.pos.top * zoomX,
          }}
        >
          {Element.shape === "triangle" && (
            <g>
              <g>
                <polygon
                  points={`${0}, ${Element.size.height * zoomY} 
                ${(Element.size.width / 2) * zoomX},${0} 
                ${Element.size.width * zoomX}, ${Element.size.height * zoomY}`}
                  fill={Element.innerColor}
                  stroke={Element.borderColor}
                  strokeWidth={2 * zoomX}
                />
              </g>
            </g>
          )}
          {Element.shape === "square" && (
            <g>
              <g>
                <rect
                  width={Element.size.width * zoomX}
                  height={Element.size.height * zoomX}
                  fill={Element.innerColor}
                  stroke={Element.borderColor}
                  strokeWidth={2 * zoomX}
                />
              </g>
            </g>
          )}
          {Element.shape === "circle" && (
            <g>
              <g>
                <circle
                  cx={(Element.size.width * zoomX) / 2}
                  cy={(Element.size.height * zoomY) / 2}
                  r={(Element.size.height * ((zoomX + zoomY) / 2)) / 2 - 5}
                  fill={Element.innerColor}
                  stroke={Element.borderColor}
                  strokeWidth={2 * zoomX}
                />
              </g>
            </g>
          )}
        </svg>
      </div>
      <div
        onDragStart={(event) => getIdElement(event, Element, "div")}
        draggable={true}
        style={{
          cursor: "nwse-resize",
          position: "absolute",
          backgroundColor: "green",
          width: `${5 * zoomX}px`,
          height: `${5 * zoomY}px`,
          top: (Element.pos.top + Element.size.height) * zoomX + 5 * zoomX,
          left: (Element.pos.left + Element.size.width) * zoomX + 5 * zoomY,
          display: visibility,
        }}
      ></div>
    </>
  );
}

export const createGraphElement = (
  event: React.MouseEvent,
  slide: Slide,
  shape: ToolType,
) => {
  const findLastId = (elements: SlideElement[]) => {
    if (elements.length === 0) {
      return 0;
    }
    const max = elements.reduce((acc, curr) => (acc.id > curr.id ? acc : curr));
    return max.id;
  };

  const id: number = findLastId(slide.elements) + 1;
  const shapec = shape;
  console.log(shape);
  const element: Figure = {
    type: "Figure",
    id: id,
    pos: {
      left: event.clientX - event.currentTarget.getBoundingClientRect().left,
      top: event.clientY - event.currentTarget.getBoundingClientRect().top,
    },
    size: {
      height: 150,
      width: 150,
    },
    borderColor: "black",
    isSelected: false,
    shape: shapec,
    innerColor: "black",
  };
  return element;
};
