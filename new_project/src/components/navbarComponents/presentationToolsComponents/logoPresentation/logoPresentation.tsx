import React from "react";
import style from "./logoPresentation.module.css";

import { ReactComponent as LogoSVG } from "../../../../sources/navbar icons/logo.svg";

const LogoPresentation = () => {
  return (
    <div className={style.Logo}>
      <LogoSVG />
    </div>
  );
};

export default LogoPresentation;
