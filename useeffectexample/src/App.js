import React,{useEffect, useState} from 'react';
import './App.css';

function App() {
  const [cnt,setCnt] = useState(0);
  const [name,setName] = useState("");
  const cntUpdate = ()=>{
    setCnt((prev)=>{return(prev+1)});
  }

  const inputChange = (e)=>{
    setName(e.target.value);
  }

  useEffect(()=>{
    console.log("렌더링...");    
  },[name]); // state가 변경될때마다 실행

  return (
    <div className="App">
      <button onClick={cntUpdate}>업데이트</button>
      <span>카운트 : {cnt}</span><hr/>
      <input type='text' value={name} onChange={(e)=>{inputChange(e)}}/>
      <p>이름:{name}</p>
    </div>
  );
}

export default App;
