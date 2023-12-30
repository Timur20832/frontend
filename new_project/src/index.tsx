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
  const [active, setActive] = useState("");
  return (
    <div className="container">
      <Navbar
        presentation={presentation}
        setPresentation={setPresentationData}
        setActive={setActive}
      />
      <Editor
        presentation={presentation}
        active={active}
        setPresentation={setPresentationData}
        setActive={setActive}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
