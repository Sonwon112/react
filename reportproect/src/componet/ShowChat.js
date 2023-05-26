import React from 'react'
import ChattingText from './ChattingText'

const ShowChat = (props) => {
  return (
    <div className='showChat' style={{overflow:"auto"}}>
        {props.chatRecord.map(((value)=>{
          <ChattingText text={value}/>
        }))}
    </div>
  )
}

export default ShowChat