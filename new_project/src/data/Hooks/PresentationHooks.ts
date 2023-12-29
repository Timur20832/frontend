import { useEffect, useState } from "react";
import { presentationInitState } from "../consts";
import { Presentation } from "../types";

export const presentationHook = () => {
  const [presentation, setPresentationData] = useState(presentationInitState);
  const presentationEffect = (oldData: Presentation) => {
    useEffect(() => {
      oldData.history = [];
      oldData.slide = presentation.slide;
      oldData.name = presentation.name;
      oldData.historyIndex = 0;
    }, [presentation]);
    return null;
  };

  return {
    presentation,
    setPresentationData,
  };
};
