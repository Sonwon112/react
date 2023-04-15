import React from 'react'
import {useState, useEffect} from 'react';
import ColorBox from './component/ColorBox';

// const App = () => {
//   const [count,setCount] = useState(0);
//   const [a, setA] = useState("")
//   useEffect(()=>{
//     if(count % 2 === 0){
//       document.title = `${count}번 클릭`
//       document.body.style.backgroundColor= "aqua";
//     }else{
//       document.title = `clicke ${count}번 클릭`
//       document.body.style.backgroundColor= "gold";
//     }
    
//   },);
  
//   return(
//     <div>
//       <h1>{count}번 클릭</h1>
//       <button onClick={()=>{setCount(count+1)}}>클릭</button>
//     </div>
//   )
// }

const App = ()=>{
  const [boxColor,setColor] = useState('GOLD');
  const [count1,setCount1] = useState(0);
  const [count2,setCount2] = useState(0);

  const changeColor = (color) =>{
    // console.log(color);
    setColor(color);
  }
  const increase = ()=>{
    setCount1(count1+1)
  }

  useEffect(()=>{
    console.log(`${count1}:${count2}:${boxColor}`);
    document.title = `카운트의 합 ${count1+count2}`
  },[count1])


  return(
    <div>
      <h1>useEffect 실습 예제</h1>
      <ColorBox color = {boxColor} changeColor = {changeColor}/>
      <hr/>
      <button onClick={increase}>카운트 1</button>
      <button onClick={()=>{setCount2(count2+1)}}>카운트 2</button>
      <p>카운트1 : {count1} <br/> 카운트 2 : {count2}</p>
    </div>
  )
}

export default App