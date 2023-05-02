import React,{useState} from 'react'
import './App.css';
import Timer from './Timer';

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div className="App">
      {showTimer && <Timer/>}
      <button onClick={()=>{setShowTimer(!showTimer)}}>{showTimer ? "STOP" : "START"}</button>
    </div>
  );
}

export default App;
