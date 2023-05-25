import Child1 from './component/Child1';
import Child4 from './component/Child4';
import './App.css';
import { useState, memo, useCallback } from 'react';

const App = memo(()=> {
  console.log("App 랜더링");
  const [num,setNum] = useState(0);
  const [num1,setNum1] = useState(0);

  const clickBtn = ()=>{
    setNum(num+1);
  }
  const minusBtn = ()=>{
    setNum1(num1+1);
  }

  const onClickReset = useCallback(()=>{
    setNum(0);
    setNum1(0);
  },[]);

  return (
    
    <div className="App">
      <button onClick={clickBtn}>+</button>
      <button onClick={minusBtn}>+</button>
      <p>{num}</p>
      <p>{num1}</p>
      <p>{num - num1}</p>
      <Child1 onClickReset = {onClickReset}/>
      <Child4/>
    </div>
  );
})

export default App;
