
import React,{useState} from 'react';
import './App.css';
import Box from './component/Box'


let counter = 0;
function App() {
  
  let [counter2, setCounter2] = useState(0);
  const increase = () =>{
    //counter = counter + 1;
    setCounter2(counter2+1)
    //console.log(counter , counter2);
  }
  const decrease = ()=>{
    setCounter2(counter2-1);
  }
  return (
    <div className="App">
      <div>현재 숫자 : {counter2}</div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <Box name = "기공"/>
      <Box name = "전자"/>
      <Box name = "소웨"/>
    </div>
  );
}

export default App;
