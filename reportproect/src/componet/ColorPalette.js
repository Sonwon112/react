// 닉네임 색깔을 변경하는 버튼 컴포넌트

import React,{useContext} from 'react'
import { ThemeContext } from '../ThemeContext'

const ColorPalette = (props) => {
    // console.log("ColorPalette");
    const style = {
        "backgroundColor" : props.color,
        "height":"30px",
        "width":"30px",
        "borderRadius":"50%",
        "border":"solid 2px white"
    }
    const {setUserColor} = useContext(ThemeContext);
    const clickColor = ()=>{
        setUserColor(props.color);
    }
    return (
        <button style={style} onClick={clickColor}></button>
    )
}

export default ColorPalette