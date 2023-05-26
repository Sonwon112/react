import React from 'react'
import { useContext, useState } from 'react'
import { ThemeContext } from '../ThemeContext'

import InputChat from './InputChat'
import ShowChat from './ShowChat'

const ChattingBox = () => {
    const {theme} = useContext(ThemeContext);
    const [chatRecord, setChateRecord] = useState([]);
    const addChatRecord = (chatText)=>{
        let currTime = new Date().toLocaleTimeString();
        setChateRecord([...chatRecord,{chat:chatText,time:currTime}]);
        console.log(chatRecord)
    }

    return (
        <div className='chattingBox' id={theme}>
            <ShowChat chatRecord = {chatRecord} />
            <InputChat addChatRecord = {addChatRecord}/>
        </div>
    )
}

export default ChattingBox