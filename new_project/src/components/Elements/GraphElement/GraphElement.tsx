import { Figure } from "../../../data/types";
import classname from "./GraphElement.module.css";
export function ShowGraphElement(Element: Figure, zoom: number) {
  return (
    <div>
      <svg
        className={classname.pos}
        key={Element.id}
        style={{
          width: Element.size.width + "%",
          height: Element.size.height + "%",
          left: Element.pos.left + "%",
          top: Element.pos.top + "%",
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
                cx={256}
                cy={256}
                r={250 - 25 / 2}
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
