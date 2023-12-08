import React, { useState } from "react";

import style from "./navbar1.module.css";

export let textElement: boolean = false;

export function false_text() {
  textElement = false;
}

export function Navbar() {
  const text = () => {
    setEl(true);
    textElement = true;
  };

  const [el, setEl] = useState(false);
  return (
    <div className={style.navbar}>
      <img className="icon" src={require("../img/icon.png")} alt="" />
      <div className="info">
        <div className="info__presentation">
          <input
            className="presentation__name"
            type="text"
            placeholder="Presentation name"
          />
        </div>
        <div className="info__main">
          <div className="info__menubar">
            <button className="button__style">Download fail</button>
            <button className="button__style">Noname</button>
            <button className="button__style">Noname</button>
            <button className="button__style">Noname</button>
          </div>
          <div className="info__tools">
            <button className="button__tools-style active" onClick={text}>
              <img
                className="icon__tools-style"
                src={require("../img/shapetext.png")}
                alt=""
              />
            </button>
            <span className="border__indent"></span>
            <button className="button__tools-style">
              <img
                className="icon__tools-style"
                src={require("../img/shapecircle.png")}
                alt=""
              />
            </button>
            <span className="border__indent"></span>
            <button className="button__tools-style">
              <img
                className="icon__tools-style"
                src={require("../img/shapesquare.png")}
                alt=""
              />
            </button>
            <span className="border__indent"></span>
            <button className="button__tools-style">
              <img
                className="icon__tools-style"
                src={require("../img/shapetriangle.png")}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
