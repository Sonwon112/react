import React from 'react'
import '../App.css'

const TodoListContent = (props) => {
    
    const deleteListContent = ()=>{
        props.deleteData(props.index);
        
    }

    return (
    <div className='listContent'>
        <div>{props.content}</div>
        <button className='deleteButton' onClick={deleteListContent}>삭제</button>
    </div>
  )
}

export default TodoListContent