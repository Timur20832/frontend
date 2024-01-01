import { Picture } from "../../../../data/types";
import img from "../../../../sources/shapes/shapes images/shape-img.png";
import React from "react";
export function ShowImageElement(
  Element: Picture,
  zoomX: number,
  zoomY: number,
  visibility: string,
) {
  function getIdElement(
    event:
      | React.DragEvent<HTMLTextAreaElement>
      | React.DragEvent<HTMLDivElement>,
    element: Picture,
    type: "img" | "div",
  ) {
    event.dataTransfer.setData("id", `${element.id}`);
    switch (type) {
      case "div":
        event.dataTransfer.setData("div", "true");
        event.dataTransfer.setData("img", "false");
        break;
      case "img":
        event.dataTransfer.setData("img", "true");
        event.dataTransfer.setData("div", "false");
        break;
    }
  }
  return (
    <>
      <img
        className="pos"
        onDragStart={(event) => getIdElement(event, Element, "img")}
        draggable={true}
        src={img}
        alt="jopa"
        style={{
          width: Element.size.width * zoomX,
          height: Element.size.height * zoomX,
          top: Element.pos.top * zoomX,
          left: Element.pos.left * zoomX,
        }}
      />
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
