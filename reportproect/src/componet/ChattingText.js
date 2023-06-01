import React,{memo} from 'react'

const ChattingText = memo((props) => {
  // console.log("ChattingText");
  return (
    <div style={{display:"flex",flexDirection:"row"}}>
        <div className='chatTimeText' style={{color:'#aaaaaa'}}>{props.time}</div>
        <div className='chatUserText' style={{color:`${props.userColor}`}}>&nbsp;{props.user}:</div>
        <div className={`chatText_${props.theme}`}>&nbsp;{props.text}</div>
    </div>
  )
});

export default ChattingText