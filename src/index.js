import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@aliwind/component";
import "./styles.css";
import "@aliwind/component/dist/wind.css";

function App() {
  return (
    <div className="App">
      <h1>Wind Demo</h1>
      <Button type="primary">Button works!</Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
