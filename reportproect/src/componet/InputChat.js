// 채팅을 입력하는 컴포넌트

import React from 'react'
import { useContext, useState } from 'react'
import { ThemeContext } from '../ThemeContext'

import chatSettingBtn from '../res/chat_setting_btn.png';
import chatSettingBtnHover from '../res/chat_setting_btn_hover.png';

const black_style={

}

const InputChat = (props) => {
    // console.log("InputChat");
    const {theme} = useContext(ThemeContext);
    // const {user} = useContext(ThemeContext);
    const {setRecentChat} = useContext(ThemeContext);
    const [inputData, setInputData] = useState("");
    const send = ()=>{
      if(inputData !== ""){
        props.addChatRecord(inputData);
        setRecentChat(inputData);
        setInputData("");
      }
    }

    const overMouseChatSetting = ()=>{
      let chatSetting = document.getElementsByClassName("chatSetting");
      chatSetting[0].src = chatSettingBtnHover;
    }

    const leaveMouseChatSetting = ()=>{
      let chatSetting = document.getElementsByClassName("chatSetting");
      chatSetting[0].src = chatSettingBtn;
    }

    const clickChatSetting = ()=>{
      props.convertIsSetting((prev)=>{return(!prev)});
    }


  return (
    <div className={`inputChatBox_${theme}`}>
        <input type='image' className='chatSetting' src={chatSettingBtn} alt='설정' onMouseOver={overMouseChatSetting} onMouseLeave={leaveMouseChatSetting} onClick={clickChatSetting}></input>
        <input type='text ' value={inputData} className={`inputChat_${theme}`} style={{width:"200px"}} onChange={(e)=>{setInputData(e.target.value)}} placeholder='메시지 보내기'></input>
        <button className={`sendBtn_${theme}`} onClick={send}>보내기</button>
    </div>
  )
}

export default InputChat