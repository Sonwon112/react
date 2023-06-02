// 채팅을 입력하는 곳과 채팅이 보여지는 곳을 통합하여 관리하는 컴포넌트
import React from 'react'
import { useContext, useState } from 'react'
import { ThemeContext } from '../ThemeContext'

import InputChat from './InputChat'
import ShowChat from './ShowChat'
import SettingChat from './SettingChat'

const ChattingBox = () => {
    // console.log("chattingBox");
    const {theme} = useContext(ThemeContext);
    const [chatRecord, setChateRecord] = useState([]);
    const [isShowSetting, setIsShowSetting] = useState(false);
    const addChatRecord = (chatText)=>{
        let currTime = new Date().toLocaleTimeString();
        setChateRecord([...chatRecord,{chat:chatText,time:currTime}]);
        // console.log(chatRecord)
    }

    return (
        <div className='chattingBox' id={theme} style={{borderTop:"none"}}>
            <ShowChat chatRecord = {chatRecord} />
            <InputChat addChatRecord = {addChatRecord} convertIsSetting = {setIsShowSetting}/>
            {isShowSetting?<SettingChat convertIsSetting = {setIsShowSetting} theme={theme}/>:<div/>}
        </div>
    )
}

export default ChattingBox