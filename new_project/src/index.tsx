import "./index.css";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import React from "react";
import ShowPresentationElement from "./components/main/showPresentation/showPresentation";
import MainContainer from "./components/main/mainContainer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <div className="container" style={{ overflow: "hidden" }}>
        <ShowPresentationElement />
        <MainContainer />
      </div>
    </React.StrictMode>
  </Provider>,
);
