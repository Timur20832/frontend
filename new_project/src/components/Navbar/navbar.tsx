import style from "./navbar.module.css";
import iconimg from "../../img/icon.png";
import shapetext from "../../img/shapetext.png";
import shapecircle from "../../img/shapecircle.png";
import shapesquare from "../../img/shapesquare.png";
import shapetriangle from "../../img/shapetriangle.png";
export let textElement = false;

export function false_text() {
  textElement = false;
}

export function Navbar() {
  const text = () => {
    textElement = true;
  };

  return (
    <div className={style.navbar}>
      <img className={style.icon} src={iconimg} alt="" />
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
            <button className={style.button_style}>Download file</button>
            <button className={style.button_style}>Create slide</button>
            <button className={style.button_style}>Delete slide</button>
            <button className={style.button_style}>Next slide</button>
            <button className={style.button_style}>Prev slide</button>
          </div>
          <div className={style.info__tools}>
            <button
              className={`${style.buttontools} ${style.active}`}
              onClick={text}
            >
              <img className={style.icontools} src={shapetext} alt="" />
            </button>
            <span className={style.borderindent}></span>
            <button className={style.buttontools}>
              <img className={style.icontools} src={shapecircle} alt="" />
            </button>
            <span className={style.borderindent}></span>
            <button className={style.buttontools}>
              <img className={style.icontools} src={shapesquare} alt="" />
            </button>
            <span className={style.borderindent}></span>
            <button className={style.buttontools}>
              <img className={style.icontools} src={shapetriangle} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
