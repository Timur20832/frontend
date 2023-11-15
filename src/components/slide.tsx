import React from "react";
import {
    Presentation,
    GeneralElementType,

} from "../data/types";

import { SelectTypeOfElement } from './Elements'

export function ShowSlider(presentation: Presentation) {
    return (
        <ul className="list">
            {presentation.slide.map((slide) => (
                <li className="list__child">
                    {slide.elements.map((element) => (
                        SelectTypeOfElement(element)
                    ))}
                </li>
            )

            )}
        </ul>
    );
}

export function ShowSlide(presentation: Presentation) {
    return (
        <div>
            {presentation.slide[0].elements.map((element) => (
                <>
                    {SelectTypeOfElement(element)}
                </>
            ))}
        </div>

    );
}