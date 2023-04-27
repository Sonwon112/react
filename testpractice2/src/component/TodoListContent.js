import React from 'react'
import './TodoListBoard.css'

const TodoListContent = ({value,index,deleteData,editData}) => {
  const clickDeleteBtn = ()=>{
    deleteData(index);
  }

  return (
    <div className='listContent'>
        {index+1}.
        <div className='contentBox'>{value}
            <button id='deleteBtn' onClick={clickDeleteBtn}>삭제</button>
            <button id='editBtn'>수정</button>
        </div>
    </div>
  )
}

export default TodoListContent