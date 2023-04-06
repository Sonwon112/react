import React from 'react'
import TodoListContent from './TodoListContent'

const TodoListBoard = (props) => {
  return (
    <div>
        <h1>Todo List</h1>
        {props.data.map((item,index) => {
          return(
            <TodoListContent content={item} index = {index} deleteData={props.deleteData}/>
        )
      })
      }
    </div>
  )
}

export default TodoListBoard