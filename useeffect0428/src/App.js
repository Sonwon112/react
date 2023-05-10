import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [cnt,setCnt] = useState(0);
  const [toggle, setToggle] = useState(false);  

  const increaseCnt = ()=>{
    setCnt(cnt+1)
  }

  useEffect(()=>{
    let timer = toggle ? setInterval(increaseCnt,1000) : "정지중";
    const textDiv = document.getElementById("textDiv");
    textDiv.style.color = cnt % 2 === 0 ? "blue" : "red";
    document.body.style.backgroundColor  = cnt %  2 === 0 ?"gold":"cyan";
    return(()=>{
      console.log(cnt)
      if(timer !== "정지중"){
        clearInterval(timer)
      }
    })
  })

  return (
    <div className="App">
      <h2>Increase Count Automatically</h2>
      <h3 id="textDiv">카운트 : {cnt}</h3>
      <button onClick={()=>{setToggle(!toggle)}}>{toggle ? "정지":"시작"}</button>
    </div>
  );
}

export default App;
