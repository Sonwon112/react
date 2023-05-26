import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = props =>{
    const {children} = props;
    const [theme,setTheme] = useState("white");
    const [user,setUser] = useState("none");
    const [userColor, setUserColor] = useState("pink");

    return(
        <ThemeContext.Provider value={{theme,setTheme,user,setUser,userColor,setUserColor}}>
            {children}
        </ThemeContext.Provider>
    )
};