import React,{useState} from 'react';
import './App.css';
import TodoListBoard from './component/TodoListBoard';

function App() {
  const [inputText,setInputText] = useState("");
  const [listData,setListData] = useState([]);
  

  const addData = ()=>{
    if(!inputText == ''){
      setListData([...listData,inputText]);
      setInputText("");
    }else{
      alert("텍스트를 입력하세요");
    }
  }

  const deleteData = (index)=>{
    listData.splice(index,1);
    setListData([...listData]);
    
    //console.log(listData);
  }


  const clear = ()=>{
    listData.splice(0);
    setListData([...listData]);
  }


  return (
    <div className="App">
      <input id="todoListInput" value={inputText} onChange={event=>{setInputText(event.target.value)}}></input>
      <button onClick={addData}>추가</button>
      <button onClick={clear}>전체 삭제</button>
      <hr/>
      <TodoListBoard data={listData} deleteData = {deleteData}/>
    </div>
  );
}

export default App;
