import './App.css';
import SearchBar from './componet/SearchBar';
import ChattingBox from './componet/ChattingBox';
import SetUserNicknameBox from './componet/SetUserNicknameBox';
import SettingBox from './componet/SettingBox';

import React,{useContext, useState} from 'react';
import { ThemeContext } from './ThemeContext';


function App() {
  const {user} = useContext(ThemeContext);
  const [isSettingOn, setIsSettingOn] = useState(false);
  console.log(user);

  return (
    <div className="App">
        <SearchBar convertIsSettingOn={setIsSettingOn}/>
        <ChattingBox/>
        {user==="none"?<SetUserNicknameBox/>:false}
        {isSettingOn?<SettingBox convertIsSettingOn={setIsSettingOn}/>:false}
    </div>
  );
}

export default App;
