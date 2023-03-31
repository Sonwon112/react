import React,{useState} from 'react';
import './App.css';
import TodoListBoaard from './component/TodoListBoaard';

function App() {
  const [inputText,setInputText] = useState("");
  const [listData,setListData] = useState([]);
  


  const addData = ()=>{
    setListData([...listData,inputText]);
    //document.getElementById()
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
      <input id="todoListInput" onChange={event=>{setInputText(event.target.value)}}></input>
      <button onClick={addData}>추가</button>
      <button onClick={clear}>전체 삭제</button>
      <hr/>
      <TodoListBoaard data={listData} deleteData = {deleteData}/>
    </div>
  );
}

export default App;
