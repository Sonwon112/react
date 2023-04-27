import React,{useState} from 'react'
import './TodoListBoard.css'
import TodoListContent from './TodoListContent';

const TodoListBoard = () => {
  const [inputData,setInputData] = useState("");
  const [dataArr, setDataArr] = useState([]);

  const addData = ()=>{
    setDataArr((prev)=>{
        return([...prev,inputData]);
    })
  }
  const deleteData = (index)=>{
    setDataArr((prev)=>{
        let flagArr = [...prev];
        // flagArr.splice(index,1);
        flagArr = flagArr.filter((v,i)=>i!=index);
        return(flagArr)
    })
  }
  const editData = ()=>{

  }

  return (
    <div className='TodoListBoard'>
        <input id='contentInput' value={inputData} onChange={(e)=>{setInputData(e.target.value)}}></input>
        <button id='addBtn' onClick={addData}>추가</button>
        <div id='listBoard'>
            {dataArr.map((v,i)=>{return(<TodoListContent value={v} index={i} deleteData={deleteData} editData={editData}/>)})}
        </div>
    </div>
  )
}

export default TodoListBoard