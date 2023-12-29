import React from "react";

// import object / object's
import { Presentation } from "../../../../data/types";

// import Button styles
import ButtonStyle from "./exportFile.module.css";

// import svg / svg's
import { ReactComponent as ExportNavbarSVG } from "../../../../sources/navbar icons/export-navbar-icon.svg";

type exportProps = {
  presentation: Presentation;
};

const ExportFile = (props: exportProps) => {
  const exportObjectAsJson = () => {
    const presentationForSave: Presentation = {
      name: props.presentation.name,
      slide: props.presentation.slide,
      history: [],
      historyIndex: 1,
    };

    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(presentationForSave));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "presentation.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <button className={ButtonStyle.buttontools} onClick={exportObjectAsJson}>
      <ExportNavbarSVG />
    </button>
  );
};

export default ExportFile;
