import { Figure } from "../../../data/types";
export function ShowGraphElement(Element: Figure) {
  return (
    <img
      className="pos"
      src={require(`../../../img/shape-${Element.shape}.svg`)}
      alt="kek"
      style={{
        width: Element.size.width + "%",
        height: Element.size.height + "%",
        top: Element.pos.top + "%",
        left: Element.pos.left + "%",
      }}
    />
  );
}
