import './App.css';
import React,{ useEffect, useState } from 'react';
import TodoListBoard from './component/TodoListBoard';

function App() {
  const [input,setInput] = useState("");
  const [dataArr,setDataArr] = useState([]);
  const [timeText,setTimeText] = useState(()=>{return(new Date().toLocaleTimeString())});

  const addData = ()=>{
    setDataArr((prev) =>{
      return([...prev,input])
    });
    setInput("");
  }

  const deleteData = (index)=>{
    setDataArr((prev)=>{
      const flagArr = [...prev];
      flagArr.splice(index,1);
      return(flagArr);
    })
  }

  const clearData = ()=>{
    setDataArr([]);
  }

  const timer = ()=>{
    let timeString = new Date().toLocaleTimeString();
    setTimeText(timeString);
  }
  useEffect(()=>{
    setInterval(timer,1000);
  });

  return (
    <div className="App">
      <h1>중간고사 대비용 TodoList 제작</h1>
      <div>{timeText}</div>
      <hr/>
      <input value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
      <button onClick={addData}>추가</button>
      <button onClick={clearData}>삭제</button>
      <TodoListBoard dataArr={dataArr} deleteData={deleteData}/>
    </div>
  );
}

export default App;
