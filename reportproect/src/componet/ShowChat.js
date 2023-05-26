import React,{useContext} from 'react'
import ChattingText from './ChattingText'

import { ThemeContext } from '../ThemeContext'

const ShowChat = (props) => {
  const {user} = useContext(ThemeContext);
  const {userColor} = useContext(ThemeContext);
  return (
    <div className='showChat' style={{overflow:"auto",height:"86.9vh"}}>
        {props.chatRecord.map(((value)=>{
          return(<ChattingText text={value.chat} time ={value.time} user = {user} userColor = {userColor}/>)
        }))}
    </div>
  )
}

export default ShowChat