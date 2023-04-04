import React,{useState} from 'react';
import './App.css';
<<<<<<< HEAD
import TodoListBoaard from './component/TodoListBoaard';


=======
import TodoListBoard from './component/TodoListBoard';
>>>>>>> 4668d13a983dd76a575ff5b332724aa35581e59e

function App() {
  const [inputText,setInputText] = useState("");
  const [listData,setListData] = useState([]);
  

<<<<<<< HEAD

  const addData = ()=>{
    setListData([...listData,inputText]);
    document.getElementById()
=======
  const addData = ()=>{
    if(!inputText == ''){
      setListData([...listData,inputText]);
      setInputText("");
    }else{
      alert("텍스트를 입력하세요");
    }
>>>>>>> 4668d13a983dd76a575ff5b332724aa35581e59e
  }

  const deleteData = (index)=>{
    listData.splice(index,1);
    setListData([...listData]);
<<<<<<< HEAD
    //console.log(listData);
  }

=======
    
    //console.log(listData);
  }


>>>>>>> 4668d13a983dd76a575ff5b332724aa35581e59e
  const clear = ()=>{
    listData.splice(0);
    setListData([...listData]);
  }


  return (
    <div className="App">
<<<<<<< HEAD
      <input id="todoListInput" onChange={event=>{setInputText(event.target.value)}}></input>
      <button onClick={addData}>추가</button>
      <button onClick={clear}>전체 삭제</button>
      <hr/>
      <TodoListBoaard data={listData} deleteData = {deleteData}/>
=======
      <input id="todoListInput" value={inputText} onChange={event=>{setInputText(event.target.value)}}></input>
      <button onClick={addData}>추가</button>
      <button onClick={clear}>전체 삭제</button>
      <hr/>
      <TodoListBoard data={listData} deleteData = {deleteData}/>
>>>>>>> 4668d13a983dd76a575ff5b332724aa35581e59e
    </div>
  );
}

export default App;
