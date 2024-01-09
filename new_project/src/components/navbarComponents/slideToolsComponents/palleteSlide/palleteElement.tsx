import React, { useState } from "react";
import PalleteStyle from "./palleteElement.module.css";

import { ReactComponent as PalleteSVG } from "../../../../sources/navbar icons/pallete-navbar-icon.svg";
import { useAppActions } from "../../../../redux/hooks";
import { Slide } from "../../../../data/types";

type PalleteProp = {
  slides: Slide[];
};

function colorPalleteElement(prop: PalleteProp) {
  const [show, setShow] = React.useState(false);
  const [hexColor, setHexColor] = React.useState("#ffffff");
  const { createChooseColorAction } = useAppActions();
  const [Pallete] = useState([
    { color: "#ffffff" },
    { color: "#000000" },
    { color: "#ff0000" },
    { color: "#0000ff" },
    { color: "#ffff00" },
    { color: "#008000" },
    { color: "#ffffff" },
    { color: "#ffffff" },
  ]);

  function handleSubmit(e: { preventDefault: () => void; target: any }) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    if (typeof formJson["myInput"] === "string") {
      if (
        formJson["myInput"] !== "" &&
        formJson["myInput"][0] === "#" &&
        formJson["myInput"].length === 7
      ) {
        setHexColor(formJson["myInput"]);
        Pallete.shift();
        Pallete.push({ color: formJson["myInput"] });
      }
    } else {
      setHexColor("#ffffff");
    }
    createChooseColorAction(hexColor);
  }

  function ShowPallete(props: { status: boolean }) {
    return (
      <div
        className={PalleteStyle.pallete}
        style={{
          opacity: props.status ? "100%" : "0%",
        }}
      >
        <div className={PalleteStyle.colorPreviewBlock}>
          {Pallete.map((PalleteUnit) => (
            <button
              className={PalleteStyle.palleteUnit}
              style={{ backgroundColor: PalleteUnit.color }}
              onClick={() => setHexColor(PalleteUnit.color)}
            ></button>
          ))}
        </div>
        <div className={PalleteStyle.inputMenu}>
          <form method="post" onSubmit={handleSubmit}>
            <input className={PalleteStyle.colorInput} name="myInput" />
            <div className={PalleteStyle.buttonNDiv}>
              <input
                type="submit"
                value="Enter"
                className={PalleteStyle.submitButton}
              />
              <div
                className={PalleteStyle.previewAddedColor}
                style={{ backgroundColor: hexColor }}
              ></div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      <button
        className={PalleteStyle.buttontools}
        onClick={() => setShow(!show)}
        style={{ backgroundColor: hexColor }}
      >
        <PalleteSVG />
      </button>
      <ShowPallete status={show} />
    </>
  );
}

export default colorPalleteElement;
