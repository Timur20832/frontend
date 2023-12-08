import { TextBox } from "../../../data/types";
export function ShowTextElement(Element: TextBox) {
  return (
    <p
      className="pos"
      style={{
        width: Element.size.height + "%",
        height: Element.size.width + "%",
        fontSize: Element.font.font_size,
        color: Element.font.Color,
        top: Element.pos.top + "%",
        left: Element.pos.left + "%",
      }}
    >
      {Element.content}
    </p>
  );
}
