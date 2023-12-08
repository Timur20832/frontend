import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { Editor } from "./components/editor";
import "./index.css";
import { Navbar } from "./components/navbar";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Editor />
    </div>
  );
}
const root = ReactDOMClient.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(<App />);
