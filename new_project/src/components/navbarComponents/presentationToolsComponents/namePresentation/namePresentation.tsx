import React from "react";
import style from "./namePresentation.module.css";

const NamePresentation = () => {
  return (
    <input className={style.name} type="text" placeholder="Presentation name" />
  );
};

export default NamePresentation;
