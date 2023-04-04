import React from 'react'
import '../App.css'
<<<<<<< HEAD
import App from '../App'



const TodoListContent = (props) => {
    const deleteListContent = ()=>{
        props.deleteData(props.index);
=======

const TodoListContent = (props) => {
    
    const deleteListContent = ()=>{
        props.deleteData(props.index);
        
>>>>>>> 4668d13a983dd76a575ff5b332724aa35581e59e
    }

    return (
    <div className='listContent'>
        <div>{props.content}</div>
        <button className='deleteButton' onClick={deleteListContent}>삭제</button>
    </div>
  )
}

export default TodoListContent