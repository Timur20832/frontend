import React, { ChangeEvent } from "react";

// import Presentation style
import PresentationNameStyle from "./namePresentation.module.css";
import { Presentation } from "../../../../data/types";

type NameProps = {
  presentation: Presentation;
  setPresentation: (presentation: Presentation) => void;
};
const NamePresentation = (props: NameProps) => {
  function updateName(e: { preventDefault: () => void; target: any }) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    if (typeof formJson["presentationName"] === "string") {
      props.presentation.history.push(props.presentation);
      const newPresentation: Presentation = {
        name: formJson["presentationName"],
        slide: props.presentation.slide,
        history: props.presentation.history,
        historyIndex: props.presentation.historyIndex + 1,
      };
      props.setPresentation(newPresentation);
    }
  }
  return (
    <div className={PresentationNameStyle.presentation_name}>
      <input
        spellCheck="false"
        className={PresentationNameStyle.presentation_name_input}
        type="text"
        name="presentationName"
        placeholder="Presentation name"
        onSubmit={updateName}
      />
      <hr className={PresentationNameStyle.undextext_line}></hr>
    </div>
  );
};

export default NamePresentation;
