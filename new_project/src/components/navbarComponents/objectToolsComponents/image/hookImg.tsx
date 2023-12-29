import { Picture } from "../../../../data/types";
import img from "../../../../sources/shapes/shapes images/shape-img.png";
export function ShowImageElement(Element: Picture) {
  return (
    <img
      className="pos"
      src={img}
      alt="jopa"
      style={{
        width: Element.size.width + "%",
        height: Element.size.height + "%",
        top: Element.pos.top + "%",
        left: Element.pos.left + "%",
      }}
    />
  );
}
