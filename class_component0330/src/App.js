import React,{Component} from 'react';
import './App.css';
import Box from './component/Box';
import Box2 from './component/Box2';

function App() {
  //inc = ()=>{

  //}

  return (
    <div className="App">
      <h1>Hello,ClassComponent</h1>
      <hr/>
      <Box2 num={'홍길동'}/>
    </div>
  );
}

export default App;
