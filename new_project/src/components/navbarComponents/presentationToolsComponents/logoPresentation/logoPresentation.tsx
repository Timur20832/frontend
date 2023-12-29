import React from "react";
import logo from "./icon.png";
import style from "./logoPresentation.module.css";

const LogoPresentation = () => {
  return <img className={style.icon} src={logo} alt="" />;
};

export default LogoPresentation;
