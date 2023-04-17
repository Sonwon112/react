import React from 'react'
import TodoListContent from './TodoListContent'

const TodoListBoard = (props) => {
  return (
    <div className='listBoard'>
        {props.dataArr.map((v,i)=>{
            return(<TodoListContent key={i} data={v} index={i} deleteData={props.deleteData}/>)
        })}
    </div>
  )
}

export default TodoListBoard