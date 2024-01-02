import React, { useState } from "react";
import PalleteStyle from "./palleteElement.module.css";

import { ReactComponent as PalleteSVG } from "../../../../sources/navbar icons/pallete-navbar-icon.svg";

function colorPalleteElement() {
  const [show, setShow] = React.useState(false);
  const [hexColor, setHexColor] = React.useState("#ffffff");
  const [Pallete] = useState([
    { unitId: 1, nameColor: "white", color: "#ffffff" },
    { unitId: 2, nameColor: "black", color: "#000000" },
    { unitId: 3, nameColor: "red", color: "#ff0000" },
    { unitId: 4, nameColor: "blue", color: "#0000ff" },
    { unitId: 5, nameColor: "yellow", color: "#ffff00" },
    { unitId: 6, nameColor: "green", color: "#008000" },
    { unitId: 7, nameColor: "white", color: "#ffffff" },
    { unitId: 8, nameColor: "white", color: "#ffffff" },
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
      }
    } else {
      setHexColor("#ffffff");
    }
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
      >
        <PalleteSVG />
      </button>
      <ShowPallete status={show} />
    </>
  );
}

export default colorPalleteElement;
