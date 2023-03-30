import React,{useState} from 'react';
import { Component } from 'react';
import './App.css';
import Box from './component/Box';
import Box2 from './component/Box2';

function App() {
  const [count,setCount] = useState(0);
  const clickButton = ()=> {
    setCount(count+1);
    document.title = `클릭회수 : ${count}`;
  }

  inc = ()=>{
    
  }

  return (
    <div className="App">
      <div>클릭회수 : {count}</div>
      <button onClick={clickButton}>클릭</button>
      <hr/><hr/>
      <Box num={count}/>
      <button onClick={this.inc}>클릭2!</button>
      <Box2 num={count}/>
    </div>
  );
}

export default App;
