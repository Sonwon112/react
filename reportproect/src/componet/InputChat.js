import React from 'react'

import { useContext, useState } from 'react'
import { ThemeContext } from '../ThemeContext'

const white_style={
    "backgroundColor":"#C9C7C7",

}
const black_style={

}

const InputChat = (props) => {
    const {theme} = useContext(ThemeContext);
    const [inputData, setInputData] = useState("");
    const send = ()=>{
      props.addChatRecord(inputData);
      setInputData("");
    }
  return (
    <div className='inputChatBox' style={white_style}>
        <input type='image' className='chatSetting' alt='설정'></input>
        <input type='text ' value={inputData} className={`inputChat_${theme}`} style={{width:"200px"}} onChange={(e)=>{setInputData(e.target.value)}}></input>
        <button className='sendBtn' onClick={send}>보내기</button>
    </div>
  )
}

export default InputChat