import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = props =>{
    const {children} = props;
    const [theme,setTheme] = useState("white");

    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};