import "./index.css";
import { Navbar } from "./components/navbarComponents/navbar/navbar";
import Editor from "./components/main/editor";
import ReactDOM from "react-dom";
import { presentationInitState } from "./data/consts";
import { useState } from "react";
function App() {
  const [presentation, setPresentationData] = useState(presentationInitState);

  return (
    <div className="container">
      <Navbar
        presentation={presentation}
        setPresentation={setPresentationData}
      />
      <Editor
        presentation={presentation}
        setPresentation={setPresentationData}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
