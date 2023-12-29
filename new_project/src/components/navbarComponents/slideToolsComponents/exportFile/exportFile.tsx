import React from "react";
import { Presentation } from "../../../../data/types";
import style from "./exportFile.module.css";

type exportProps = {
  presentation: Presentation;
};

const ExportFile = (props: exportProps) => {
  const downloadObjectAsJson = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(props.presentation));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "presentation.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <button className={style.buttonstyle} onClick={downloadObjectAsJson}>
      Export file
    </button>
  );
};

export default ExportFile;
