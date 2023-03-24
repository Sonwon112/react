import { useState } from "react";
import Box from "./componenet/Box"

function App() {
  const [count,setCount] = useState(0);
  const increase = ()=>{
    // clickCount++;
    setCount(count+1);
    // document.title = count;
    if(count%2 == 0){
      console.log("홀수");
    }else{
      console.log("짝수,");
    }
  }

  return (
    <div className="App">
      <button onClick={increase}>클릭</button>      
      {count}번 클릭하였습니다
      <Box title = "Hello😍.AI개론" num ='1'/>
      <Box title = "Hello💜.React" num = '2'/>
      <Box title = "Hello💻.HTML" num = '3'/>
    </div>
  );
}

export default App;
