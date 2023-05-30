import React,{memo} from 'react'
import ColorPalette from './ColorPalette';

const SettingChat = memo((props) => {
    const colorArr = ["red","yellow","black","pink","violet","lightgreen"];
    const clickClose = ()=>{
        props.convertIsSetting((prev)=>!prev);
    }
    return (
        <div className='settingChatBox'>
            <button onClick={clickClose}>X</button>
            <p style={{marginLeft:"20px"}}>색상변경</p>
            <div style={{display:"flex",justifyContent:"space-around"}}>
              {colorArr.map((v)=>{return(<ColorPalette color={v}/>)})}
            </div>
        </div>
    )
});

export default SettingChat