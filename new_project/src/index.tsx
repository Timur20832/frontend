import "./index.css";
import { Navbar } from "./components/navbarComponents/navbar/navbar";
import Editor from "./components/main/editor";
import ReactDOM from "react-dom";
import { presentationInitState } from "./data/consts";
import { useEffect, useState } from "react";
function App() {
  const [presentation, setPresentationData] = useState(presentationInitState);
  useEffect(() => {
    console.log();
  }, [presentation]);

  return (
    <div className="container">
      <Navbar
        presentation={presentation}
        setPresentation={setPresentationData}
      />
      <Editor presentation={presentation} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
