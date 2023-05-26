import Child1 from './component/Child1';
import Child4 from './component/Child4';
import './App.css';
import { useState, memo, useCallback, useMemo, useEffect } from 'react';


// memo, useCallback 예제
// const App = memo(()=> {
//   console.log("App 랜더링");
//   const [num,setNum] = useState(0);
//   const [num1,setNum1] = useState(0);

//   const clickBtn = ()=>{
//     setNum(num+1);
//   }
//   const minusBtn = ()=>{
//     setNum1(num1+1);
//   }

//   const onClickReset = useCallback(()=>{
//     setNum(0);
//     setNum1(0);
//   },[]);

//   return (
    
//     <div className="App">
//       <button onClick={clickBtn}>+</button>
//       <button onClick={minusBtn}>+</button>
//       <p>{num}</p>
//       <p>{num1}</p>
//       <p>{num - num1}</p>
//       <Child1 onClickReset = {onClickReset}/>
//       <Child4/>
//     </div>
//   );
// })


// useMemo 예제
// const hardCaculate=(number)=>{
//   console.log("어려운 계산 :"+(number+1000000));
//   for(let i = 0 ; i < 1000000000;i++);
//   return number+1000000;
// }
// const easyCaculate=(number)=>{
//   console.log("쉬운 계산 : "+(number+1));
//   return number+1;
// }

// function App(){
//   const [hardNumber,setHardNumber] = useState(0);
//   const [easyNumber,setEasyNumber] = useState(0);


//   // const hardSum = hardCaculate(hardNumber);
//   const hardSum = useMemo(()=>{return hardCaculate(hardNumber);},[hardNumber]);
//   const easySum = easyCaculate(easyNumber);

//   return(
//     <div>
//       <h3 style={{color:"red"}}>어려운 계산기</h3>
//       <input type='number' value={hardNumber} onChange={(e)=>{setHardNumber(parseInt(e.target.value))}}></input>
//       <span>+100000 = {hardSum}</span><hr/>
//       <h3 style={{color:"blue"}}>쉬운 계산기</h3>
//       <input type='number' value={easyNumber} onChange={(e)=>{setEasyNumber(parseInt(e.target.value))}}></input>
//       <span>+1 = {easySum}</span><hr/><hr/>
//     </div>
//   )
// }

function App(){
  const [num, setNum] = useState(0); 
  const [isKorea, setIsKorea] = useState(true);
  const location =  useMemo(()=>{
    return {country : isKorea ? '한국' : '미국'} },[isKorea]);
  useEffect(()=>{console.log("UseEffect 호출")},[location]);

  return(
    <div>
       <h2>1일 식사 횟수?</h2>
      <input type='number'
             value={num}
             onChange={(e)=>setNum(e.target.value)} />
      <hr />
      <h2>한국에 있니? 미국에 있니?</h2>
      <p>장소 : {location.country}</p>
      <button onClick={()=>setIsKorea(!isKorea)}>Toggle</button>
    </div>
  )
}

export default App;
