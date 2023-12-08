import React, { useState } from "react";

import style from "./navbar.module.css";

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
      <img className={style.icon} src={require("../img/icon.png")} alt="" />
      <div className={style.info}>
        <div className={style.info__presentation}>
          <input
            className={style.presentation__name}
            type="text"
            placeholder="Presentation name"
          />
        </div>
        <div className={style.info__main}>
          <div className={style.info__menubar}>
            <button className={style.button__style}>Download fail</button>
            <button className={style.button__style}>Noname</button>
            <button className={style.button__style}>Noname</button>
            <button className={style.button__style}>Noname</button>
          </div>
          <div className={style.info__tools}>
            <button
              className={`${style.buttontools} ${style.active}`}
              onClick={text}
            >
              <img
                className={style.icontools}
                src={require("../img/shapetext.png")}
                alt=""
              />
            </button>
            <span className={style.borderindent}></span>
            <button className={style.buttontools}>
              <img
                className={style.icontools}
                src={require("../img/shapecircle.png")}
                alt=""
              />
            </button>
            <span className={style.borderindent}></span>
            <button className={style.buttontools}>
              <img
                className={style.icontools}
                src={require("../img/shapesquare.png")}
                alt=""
              />
            </button>
            <span className={style.borderindent}></span>
            <button className={style.buttontools}>
              <img
                className={style.icontools}
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
