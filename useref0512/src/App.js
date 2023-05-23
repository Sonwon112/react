import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';

let cntVar=0;
function App() {
  const [cnt, setCnt]=useState(0);
  const cntRef=useRef(0);
  //console.log("렌더링  state : ", cnt, "  Ref : ", cntRef.current);

  useEffect(()=>{
    //----useState를 통해 useEffect 사용시 무한루프에 빠지게 된다
    // console.log('useEffect rendering!');
    // setCnt(cnt+1);
    cntRef.current = cntRef.current+1;
    console.log("useEffect Rendering",cntRef.current);
  })

  const incVar=()=>{
    cntVar=cntVar+1;
    console.log("cntVar(일반 변수) : ", cntVar);  }
  
    const incState=()=>{
    setCnt(cnt+1);
    console.log("state click! ");  }

  const incRef=()=>{
    cntRef.current=cntRef.current+1;
    console.log("Ref : ", cntRef.current);  }
  
  const mouseOver = (e)=>{
    document.body.style.backgroundColor = "yellow";
  }

  const mouseOut = (e) =>{
    document.body.style.backgroundColor = "white";
  }

  const [cnt1, setCnt1] = useState(0);
  const inputRef = useRef();

  useEffect(()=>{
    console.log(inputRef);
  },[]);

  const clickBtn = ()=>{
    alert(`어서오세요 ${inputRef.current.value}님`);
  }

  const btnStateClick = ()=>{
    setCnt1((prev)=>{
      return(prev+1);
    });
  }
  
  return (
    <div className="App">
      <p>카운트 회수 : {cnt}</p>
      <p style={{color:"blue",fontWeight:"bold"}}>
            Ref : {cntRef.current}</p>
      <button onClick={incState}>state</button>
      <button onClick={incRef}>Ref</button><hr />
      <button onClick={incVar}>var</button> 
      <p>일반 변수(cntVar) : {cntVar}</p>  
      <hr />
      <button onClick={()=>{setCnt(cnt+1)}}>무한루프</button>
      <button className='colorbtn' onMouseOver={mouseOver} onMouseOut ={mouseOut} > 배경색 변경 </button>
      <hr/>
      <div className="App">
        <Sbutton onClick={btnStateClick}>state</Sbutton>
        <input ref = {inputRef} value={cnt1} placeholder='이름을 입력해주세요'></input>
        <button onClick={clickBtn}>로그인</button>
    </div>

    </div>
  );
}

const Sbutton = styled.button`
  background-color: #ddd;
  color: black;
  &:hover{
    background-color: #aaa;
    color: white;
  }
`;

export default App;