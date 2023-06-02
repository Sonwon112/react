import './App.css';
import SearchBar from './componet/SearchBar';
import ChattingBox from './componet/ChattingBox';
import SetUserNicknameBox from './componet/SetUserNicknameBox';
import SettingBox from './componet/SettingBox';
import MainContent from './componet/MainContent';

import React,{useContext, useState,useEffect} from 'react';
import { ThemeContext } from './ThemeContext';


function App() {
  const {user} = useContext(ThemeContext);
  const {theme} = useContext(ThemeContext);
  const [isSettingOn, setIsSettingOn] = useState(false);
  // console.log(user);

  useEffect(()=>{
    // console.log(theme);
    document.body.style.backgroundColor = theme;
  },[theme])


  return (
    <div className="App">
        {/*검색창 : 현재 설정 버튼을 제외하고 구현된 기능 없음*/}
        <SearchBar convertIsSettingOn={setIsSettingOn}/>
        {/*채팅창 : 채팅입력, 채팅표시, 사용자 닉네임 색상 변경 기능 구현*/}
        <ChattingBox/>
        <MainContent/>
        {/*사이트 최초로 열경우 사용자 닉네임을 입력하게끔 하기 위한 닉네임 입력창*/}
        {user==="none"?<SetUserNicknameBox/>:false}
        {/*검색창의 설정 버튼을 누르면 표시되는 설정창*/}
        {isSettingOn?<SettingBox convertIsSettingOn={setIsSettingOn} theme={theme}/>:false}
    </div>
  );
}

export default App;
