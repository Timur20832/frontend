import React from "react";
import {
    Presentation,
    SlideElement,
    Figure,
    Picture,
    TextBox,
    GeneralElementType,

} from "../data/types";

function ShowTextElement(Element: TextBox) {
    return (
        <p>
            {Element.content}
        </p>
    );
}

function ShowImageElement(Element: Picture) {
    return (
        <img src={Element.path} alt="kek" />
    );
}

function ShowGraphicElement(Element: Figure) {
    return (
        <img src={Element.shape} alt="kek" />
    );
}

function SelectTypeOfElement(Element: GeneralElementType) {
    switch (Element.type) {
        case "Text":
            return ShowTextElement(Element)
        case "Image":
            return ShowImageElement(Element);
        case "Figure":
            return ShowGraphicElement(Element);
    }
}


function ShowElement(props: SlideElement) {
    return (
        <p>
            {props.id}
        </p>
    )
}

export function ShowSlide(presentation: Presentation) {
    return (
        <ul>
            {presentation.slide.map((slide) => (
                <li>
                    {/* {ShowElement(slide.elements[0])} */}
                    {slide.elements.map((element) => (
                        ShowElement(element)
                    ))}
                </li>
            )

            )}
        </ul>
    );
}

