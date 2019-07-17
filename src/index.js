import React from 'react';
import ReactDOM from "react-dom";
import { Tips } from "./lib";
let showFlag = true;//true false
let location = "bottom";//top center bottom
let distance = '50px';//默认50px，只有location为top/bottom生效
let tipsMsg = "系统错误";//默认文案为：提示
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      flag:false
    }
  }
  funs = () => {
    this.setState({
      flag:true
    });
    setTimeout(() => {
      this.setState({
        flag:false
      });
    }, 2000);
  }
  render(){
    return(
      <div>
        <h1>Hello React</h1>
        <Tips 
        showFlag = { this.state.flag }
        location = { location }
        distance = { distance }
        tipsMsg = { tipsMsg }
        />
        <button onClick={this.funs}>tips</button>
        <h1>Hello React</h1>
      </div>
    )
  }
}
  

ReactDOM.render(<App />, document.getElementById("root"));