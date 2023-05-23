import {useState, useRef,useEffect} from 'react';
import './App.css';

function App() {
  const [cnt, setCnt] = useState(0);
  const inputRef = useRef();

  useEffect(()=>{
    console.log(inputRef);
  },[]);

  const clickBtn = ()=>{
    alert(`어서오세요 ${inputRef.current.value}님`);
  }

  const btnStateClick = ()=>{
    setCnt((prev)=>{
      
      return(prev+1);
    });
  }
  return (
    <div className="App">
        <button onClick={btnStateClick}>state</button>
        <input ref = {inputRef} value={cnt} placeholder='이름을 입력해주세요'></input>
        <button onClick={clickBtn}>로그인</button>
    </div>
  );
}

export default App;
