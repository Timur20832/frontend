import React from "react";
import { Presentation } from "../data/types";

import { SelectTypeOfElement } from "./Elements/Elements";

export function ShowSlider(presentation: Presentation) {
  const zoom = 0.3;
  return (
    <ul className="list">
      {presentation.slide.map((slide) => (
        <li className="list__child">
          {slide.elements.map((element) => SelectTypeOfElement(element, zoom))}
        </li>
      ))}
    </ul>
  );
}

export function ShowSlide(presentation: Presentation) {
  const zoom = 1;
  return (
    <div>
      {presentation.slide[0].elements.map((element) => (
        <>{SelectTypeOfElement(element, zoom)}</>
      ))}
    </div>
  );
}
