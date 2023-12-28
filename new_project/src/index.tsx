import "./index.css";
import { Navbar } from "./components1/navbarComponents/navbar/navbar";
import Editor from "./components1/main/editor";
import ReactDOM from "react-dom";
import { presentation } from "./data/consts";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Editor presentation={presentation} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
