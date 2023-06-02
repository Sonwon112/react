// 여러곳에서 사용해야하는 공통 변수를 모아 props로 전달하지 않고 useContext를 통해 관리하게끔 하기위한 Context파일
import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = props =>{
    const {children} = props;
    const [theme,setTheme] = useState("white");
    const [user,setUser] = useState("none");
    const [userColor, setUserColor] = useState("pink");
    const [recentChat, setRecentChat] = useState("");

    return(
        <ThemeContext.Provider value={{theme,setTheme,user,setUser,userColor,setUserColor,recentChat,setRecentChat}}>
            {children}
        </ThemeContext.Provider>
    )
};