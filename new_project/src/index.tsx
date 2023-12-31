import "./index.css";
import { Navbar } from "./components/navbarComponents/navbar/navbar";
import Editor from "./components/main/editor";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import React from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <div className="container">
        <Navbar />
        <Editor />
      </div>
    </React.StrictMode>
  </Provider>,
);
