import React from "react";

// import Presentation style
import PresentationNameStyle from "./namePresentation.module.css";

const NamePresentation = () => {
  return (
    <div className={PresentationNameStyle.presentation_name}>
      <input
        spellCheck="false"
        className={PresentationNameStyle.presentation_name_input}
        type="text"
        placeholder="Presentation name"
      />
      <hr className={PresentationNameStyle.undextext_line}></hr>
    </div>
  );
};

export default NamePresentation;
