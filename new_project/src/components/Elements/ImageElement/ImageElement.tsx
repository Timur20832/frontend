import { Picture } from "../../../data/types";
export function ShowImageElement(Element: Picture) {
  return (
    <img
      className="pos"
      src={require("../../../img/kot.jpg")}
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
