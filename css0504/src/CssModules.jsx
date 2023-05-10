import { useState } from "react";
import classes from "./CssModules.module.scss";
import { useEffect } from "react";

export const CssModules = ()=>{
    const colorArr = ["white","red","blue"];
    const [currColorNum,setcurrColorNum] = useState(0);
    const [clickedNum, setClickedNum] = useState(0);
    const clicked=()=>{
        setcurrColorNum((prev)=>{
            if(prev >=2){   
                return(0);
            }else{
                return(prev+1);
            }
        });
        setClickedNum(clickedNum+1);
    }
    useEffect(()=>{
        const title = document.getElementById("title"); 
        if(clickedNum % 2 == 0){
            title.textContent =clickedNum+"번 눌림 : 손원일";
        }else{
            title.textContent=clickedNum+"번 눌림 : 22060031";
        }
        const searchBar = document.getElementById("searchBar");
        searchBar.style.backgroundColor = colorArr[currColorNum];
        
    },[currColorNum,clickedNum]);
    

    return(
        <div id="searchBar" className={classes.container}>
            <p id="title" className={classes.title}>CSS Modules입니다</p>
            <button className={classes.button} onClick={clicked}>버튼</button>
        </div>
    )
}