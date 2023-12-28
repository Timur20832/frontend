import { TextBox } from "../../../../data/types";
export function ShowTextElement(Element: TextBox, zoom: number) {
  return (
    <p
      className="pos"
      style={{
        width: Element.size.height * zoom,
        height: Element.size.width * zoom,
        fontSize: Element.font.font_size * zoom,
        color: Element.font.Color,
        top: Element.pos.top + "%",
        left: Element.pos.left + "%",
      }}
    >
      {Element.content}
    </p>
  );
}
