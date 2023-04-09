import React,{useState} from 'react';
import './App.css'
import TodoListBoard from './component/TodoListBoard'

let posCount = 0;

function App() {
  const [inputText,setInputText] = useState("");
  const [listData,setListData] = useState([]);
  
  
  const colorArr = ['red','blue','yellow','aqua','gold'];


  const addData = ()=>{
    if(!inputText == ''){
      posCount= posCount + 1;
      setListData([...listData,[posCount,inputText]]);
      setInputText("");
      console.log(listData);
    }else{
      alert("텍스트를 입력하세요");
    }
  }

  const deleteData = (index)=>{
    listData.splice(index,1);
    setListData([...listData]);
  }
  const clear = ()=>{
    listData.splice(0);
    setListData([...listData]);
  }

  const exactlyClear = ()=>{
    // setListCount(0);  
    posCount = 0;
    clear();
  }

  const chageColor = ()=>{
    document.body.style.backgroundColor=colorArr[randomColor()]
  }
  const randomColor = ()=>{
    return parseInt(Math.random()*colorArr.length);
  }


  return (
    <div className="App">

      <input id="todoListInput" value={inputText} onChange={event=>{setInputText(event.target.value)}}></input>
      <button onClick={addData}>추가</button>
      <button onClick={clear}>전체 삭제</button>
      <hr/>
      <TodoListBoard data={listData} deleteData = {deleteData}/>
      
      <div className='bottomButton'>
        <button  onClick={exactlyClear}>완전 삭제</button>
        <button  onClick={chageColor}>색 변경</button>
      </div>
    </div>
  );
  
}

export default App

