import React,{useContext} from 'react'
import { ThemeContext } from '../ThemeContext'


const MainContent = () => {
    const {recentChat} = useContext(ThemeContext);
    const {theme} = useContext(ThemeContext);
    return (
    <div className={`mainContentBox_${theme}`}>
        <h1>{recentChat}</h1>
    </div>
  )
}

export default MainContent