import React from 'react'

const TodoListContent = (props) => {

    const deleteListContent = ()=>{
        props.deleteData(props.index);
    }

    return (
        <div>
            <div className='listTitle'>{props.index+1}.</div>
            <div className='listContent'>
                <div>{props.content[1]}</div>
                <button className='deleteButton' onClick={deleteListContent}>삭제</button>
                <div className='listPos'>{props.content[0]}번째 리스트</div>
            </div>
        </div>
  )
}

export default TodoListContent