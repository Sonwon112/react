import './App.css';
import React,{useState,useEffect} from 'react';
import TodoListBoard from './component/TodoListBoard';

function App() {
  let timeText = new Date().toLocaleDateString()+' '+new Date().toLocaleTimeString();

  useEffect(()=>{
    return(()=>{
      setInterval(()=>{timeText = new Date().toLocaleDateString()+' '+new Date().toLocaleTimeString();},1000);
    })
  })
    return (
    <div className="App">
      <div className='title'>
        <h1>시험대비 및 프로젝트 용 TodoList</h1>
        <div id='clock'>{timeText}</div>
      </div>
      <hr/>
      <TodoListBoard/>
    </div>
  );
}

export default App;
