import React,{useState} from 'react';
import './App.css';
import ColoredMessage from './component/ColoredMessage';

function App() {
  const [count,setCount] = useState(0);

  const clickedBtn = ()=>{
    setCount(count+1);
    alert("버튼을 눌렀습니다")
    //document.title = count;
  }

  return (
    <div className="App">
      <h1 style={{color:"red"}}>안녕!</h1>
      <ColoredMessage color="gray" message = "잘지내?"/>
      <ColoredMessage color="blue" message = "잘 못지내"/>
      <button onClick={clickedBtn}>클릭</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
