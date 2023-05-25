import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

import InputChat from './InputChat'
import ShowChat from './ShowChat'

const ChattingBox = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <div className='chattingBox' id={theme}>
            <ShowChat/>
            <InputChat/>
        </div>
    )
}

export default ChattingBox