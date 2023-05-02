import React,{useState,useRef} from 'react';
import './App.css';
import Clock from './component/Clock'


function App() {
  const [toggleTime, setToggleTime] = useState(false);
  const [time,setTime] = useState(()=>new Date().toLocaleTimeString());
  const increment = useRef(null);

  const stopwatch = ()=>{
    setToggleTime(!toggleTime);
    {!toggleTime ? increment.current = setInterval(()=>{setTime(new Date().toLocaleTimeString());console.log("타이머실행중");},1000)
    :clearInterval(increment.current);
    }
  }

  return (
    <div className="App">
      {/* {toggleTime ? <Clock/> : <h2>시계가 표시되는 부분</h2>} */}
      <Clock time = {time} ></Clock>
      <button style={{fontSize:"20px"}} onClick={stopwatch}>{toggleTime ? "stop" : "start"}</button>
    </div>
  );
}

export default App;
