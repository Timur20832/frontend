import React, { ChangeEvent } from "react";
import { Presentation } from "../../../../data/types";

type downloaderProps = {
  setPresentation: (presentation: Presentation) => void;
};

const DownloadFile = (props: downloaderProps) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target?.result as string;
        console.log(JSON.parse(contents) as Presentation);
        const newPresentation = JSON.parse(contents) as Presentation;
        props.setPresentation(newPresentation);
      };
      reader.readAsText(file);
    }
  };

  return (
    <input
      id="import-file-button"
      type="file"
      className="popUp-import"
      onChange={handleFileChange}
    />
  );
};

export default DownloadFile;
