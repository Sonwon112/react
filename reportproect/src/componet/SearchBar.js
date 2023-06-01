import React from 'react'
import searchBtnThemeWhite from '../res/search_btn_theme_white.png';
import serachBtnThemeWhite_hover from '../res/search_btn_theme_white_hover.png';
import settingBtnThemeWhite from '../res/setting_btn_theme_white.png';
import settingBtnThemeWhite_hover from '../res/setting_btn_theme_white_hover.png';

import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';


function SearchBar(props) {
    // console.log("SearchBar");
    const {theme} = useContext(ThemeContext);

    const searchBtnMouseOver = ()=>{
        let searchBtn = document.getElementById(`searchBtn_${theme}`);
        switch(theme){
            case 'white':
                searchBtn.style.backgroundColor = '#C9C7C7';
                searchBtn.src = serachBtnThemeWhite_hover;
                break;
            case 'black':
                
                break;
        }
    };

    const searchBtnMouseLeave = ()=>{
        let searchBtn = document.getElementById(`searchBtn_${theme}`);
        switch(theme){
            case 'white':
                searchBtn.style.backgroundColor = '#ffffff';
                searchBtn.src = searchBtnThemeWhite;
                break;
            case 'black':
                break;
        }
    };

    const settingBtnMouseOver = ()=>{
        let settingBtn = document.getElementById(`settingBtn`);
        switch(theme){
            case 'white' :
                settingBtn.style.backgroundColor = '#C9C7C7';
                settingBtn.src = settingBtnThemeWhite_hover;
                break;
            case 'black' :
                break;
        }
    }
    const settingBtnMouseLeave = ()=>{
        let settingBtn = document.getElementById(`settingBtn`);
        switch(theme){
            case 'white' :
                settingBtn.style.backgroundColor = '#ffffff';
                settingBtn.src = settingBtnThemeWhite;
                break;
            case 'black' :
                break;
        }
    }
    const clickSetting = ()=>{
        props.convertIsSettingOn((prev)=>!prev);
    }


    return (
        <div className='searchTitle' id={theme}>
            <div style={{display:'flex',flexDirection:'row'}}>
                <input className={`searchBar_${theme}`} type='text' placeholder='검색'></input>
                <input id={`searchBtn`} type='image' src={searchBtnThemeWhite} alt='검색버튼' onMouseOver={searchBtnMouseOver} onMouseLeave={searchBtnMouseLeave}></input>
            </div>
            <input id={`settingBtn`} type='image' alt='설정' src={settingBtnThemeWhite} onMouseOver={settingBtnMouseOver} onMouseLeave={settingBtnMouseLeave} onClick={clickSetting}></input>
        </div>
    )
}

export default SearchBar