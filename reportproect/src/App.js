import './App.css';
import SearchBar from './componet/SearchBar';
import ChattingBox from './componet/ChattingBox';
import SetUserNicknameBox from './componet/SetUserNicknameBox';

import React,{useContext} from 'react';
import { ThemeContext } from './ThemeContext';


function App() {
  const {user} = useContext(ThemeContext);
  console.log(user);
  const setNickname = ()=>{
    if(user === "none"){
      return(<SetUserNicknameBox/>);
    }
  }

  return (
    <div className="App">
        
        <SearchBar/>
        <ChattingBox/>
        {setNickname()}
        
        
    </div>
  );
}

export default App;
