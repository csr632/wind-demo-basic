import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@aliwind/component";
import WindAppLayout from "@aliwind/rc-app-layout";
import WindConsoleMenu from "@aliwind/rc-console-menu";

import "./styles.css";
import "@aliwind/component/dist/wind.css";

const menuItems = [
  {
    key: "overview",
    label: "概览"
  },
  {
    key: "lists",
    label: "列表",
    items: [
      {
        key: "basic-list-1",
        label: "基础列表1"
      },
      {
        key: "basic-list-2",
        label: "基础列表2"
      }
    ]
  },
  {
    key: "basic-form",
    label: "基础表单"
  }
];

function App() {
  return (
    <div className="App">
      <WindAppLayout
        nav={<WindConsoleMenu items={menuItems} header="页面一级导航" />}
      >
        页面内容：
        <Button type="primary">使用Button</Button>
      </WindAppLayout>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
