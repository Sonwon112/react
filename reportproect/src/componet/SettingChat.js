// 닉네임 색상을 변경할 수 있는 채팅 설정 창 컴포넌트

import React,{memo} from 'react'
import ColorPalette from './ColorPalette';

const SettingChat = memo((props) => {
    // console.log(SettingChat);
    const colorArr = ["red","yellow","black","pink","violet","lightgreen"];
    const clickClose = ()=>{
        props.convertIsSetting((prev)=>!prev);
    }
    return (
        <div className={`settingChatBox_${props.theme}`}>
            <button onClick={clickClose}>X</button>
            <p style={{marginLeft:"20px"}}>색상변경</p>
            <div style={{display:"flex",justifyContent:"space-around"}}>
              {colorArr.map((v)=>{return(<ColorPalette color={v}/>)})}
            </div>
        </div>
    )
});

export default SettingChat