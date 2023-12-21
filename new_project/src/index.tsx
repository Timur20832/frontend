import * as ReactDOMClient from "react-dom/client";
import { Editor } from "./components/editor";
import "./index.css";
import { Navbar } from "./components/Navbar/navbar";
import { Provider } from "react-redux";
import store from "./store/ObjectsReducer";
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

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
