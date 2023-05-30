import React,{useContext, useState} from 'react';
import { ThemeContext } from '../ThemeContext';

const SettingBox = (props) => {
    const {setUser} = useContext(ThemeContext);
    const [inputData, setInputData] = useState("");
    const clickInputNickname = ()=>{
        if(inputData !== ""){
            setUser(inputData);
            props.convertIsSettingOn((prev)=>!prev);
        }else{
            alert("닉네임을 입력해주세요");
        }
    }

    return (
    <div className='settingBox'>
        <h4>테마 변경</h4>
        <div>
            <button style={{width:"30px",height:"30px",backgroundColor:"white",border:"black solid 2px",borderRadius:"50%"}}></button>
            <button style={{width:"30px",height:"30px",backgroundColor:"black",border:"white solid 2px",borderRadius:"50%",marginLeft:"20px"}}></button>
        </div>
        <h4>닉네임 변경</h4>
        <input className='inputNickname' style={{position:"relative",width:"280px",margin:"0px"}} type='text' placeholder='변경하실 닉네임을 입력하세요' onChange={(e)=>{setInputData(e.target.value)}}/>
        <button className='inputBtn' style={{marginLeft:"auto", marginTop:"10px"}} onClick={clickInputNickname}>입력</button>
    </div>
  )
}

export default SettingBox