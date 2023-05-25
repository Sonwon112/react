import React from 'react'

import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

const white_style={
    "backgroundColor":"#C9C7C7",

}
const black_style={

}

const InputChat = () => {
    const {theme} = useContext(ThemeContext);

  return (
    <div className='inputChatBox' style={white_style}>
        <input type='image' className='chatSetting' alt='설정'></input>
        <input type='text ' className={`inputChat_${theme}`} style={{width:"200px"}}></input>
        <button id=''>보내기</button>
    </div>
  )
}

export default InputChat