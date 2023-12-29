import React from "react";
import { Presentation } from "../../../data/types";
import { SelectTypeOfElement } from "../viewHook";
import styles from "./slider.module.css";
import EditorStyle from "../editor.module.css";

function ShowSlider({ presentation }: { presentation: Presentation }) {
  const presentationComponent = presentation;
  const zoom = 0.3;
  return (
    <div className={styles.slider}>
      <ul className={styles.list}>
        {presentationComponent.slide.map((slide) => (
          <li className={styles.child}>
            {slide.elements.map((element) =>
              SelectTypeOfElement(element, zoom),
            )}
          </li>
        ))}
      </ul>
      <div className={EditorStyle.scroll_area}></div>
    </div>
  );
}

export default ShowSlider;
