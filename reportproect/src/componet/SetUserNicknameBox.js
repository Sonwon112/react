import React,{useContext,useState} from 'react'
import { ThemeContext } from '../ThemeContext'

const SetUserNicknameBox = () => { 
  // console.log("SetUserNicknameBox");

  const {theme} = useContext(ThemeContext);
  const {setUser} = useContext(ThemeContext);
  const [nickName,setNickName] = useState("");
  const clickSetUser = ()=>{
      if(nickName != "")setUser(nickName);
      else{
        const alertMessage = document.getElementById("alertMessage");
        alertMessage.innerHTML = "-닉네임을 입력해주세요";
        alertMessage.style.color = "red";
      }
  }

  return (
    <div className='setNicknameBackground'>
      <div className={`setNicknameBox_${theme}`} id='white'>
        <h3 style={{color:'white'}}>닉네임을 입력해주세요</h3>
        <p id='alertMessage'><br/></p>
        <input className='inputNickname' type='text'value={nickName} onChange={(e)=>{setNickName(e.target.value)}} placeholder='닉네임'></input>
        <br/>
        <button className='inputBtn' onClick={clickSetUser}>입력</button>
      </div>
    </div>
  )
}

export default SetUserNicknameBox