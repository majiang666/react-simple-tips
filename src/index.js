import React from 'react';
import ReactDOM from "react-dom";
import { Tips } from "./lib";
let showFlag = true;//true false
let location = "center";//top center bottom
let distance = '50px';//默认50px，只有location为top/bottom生效
let tipsMsg = "系统错误";//默认文案为：提示
let times = 2000;//number 默认2000
const App = () => (
  <div>
    <h1>Hello React</h1>
    <Tips 
    showFlag = { showFlag }
    location = { location }
    distance = { distance }
    tipsMsg = { tipsMsg }
    times = { times }
    />
    <h1>Hello React</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));