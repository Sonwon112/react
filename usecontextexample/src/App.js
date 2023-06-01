import {useState,useContext} from "react";
import './App.css';
import Card from "./Card";

import {AdminFlagContext} from './AdminFlagProvider';

export const App=()=> {
  const {isAdmin} = useContext(AdminFlagContext);
  const {setIsAdmin} = useContext(AdminFlagContext);
  // const [isAdmin, setIsAdmin] = useState(true);
  const onClickSwitch = ()=>{setIsAdmin(!isAdmin)}

  return (
    <div className="App">
      {isAdmin?<span>관리자입니다</span>:<span>관리자가 아닙니다</span>}
      <button onClick={onClickSwitch}>전환</button>
      <Card/>
    </div>
  );
}

