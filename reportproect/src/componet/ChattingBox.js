import React from 'react'
import { useContext, useState } from 'react'
import { ThemeContext } from '../ThemeContext'

import InputChat from './InputChat'
import ShowChat from './ShowChat'

const ChattingBox = () => {
    const {theme} = useContext(ThemeContext);
    const [chatRecord, setChateRecord] = useState([]);
    const addChatRecord = (chat)=>{
        setChateRecord([...chatRecord,chat]);
    }

    return (
        <div className='chattingBox' id={theme}>
            <ShowChat chatRecord = {chatRecord} addChatRecord = {addChatRecord}/>
            <InputChat/>
        </div>
    )
}

export default ChattingBox