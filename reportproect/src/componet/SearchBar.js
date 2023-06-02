// 검색바 컴포넌트로 검색창과 세팅버튼 포함
import React from 'react'
import searchBtnThemeWhite from '../res/search_btn_theme_white.png';
import serachBtnThemeWhite_hover from '../res/search_btn_theme_white_hover.png';
import settingBtnThemeWhite from '../res/setting_btn_theme_white.png';
import settingBtnThemeWhite_hover from '../res/setting_btn_theme_white_hover.png';

import { useContext, useEffect } from 'react';
import { ThemeContext } from '../ThemeContext';


function SearchBar(props) {
    // console.log("SearchBar");
    const {theme} = useContext(ThemeContext);
    let searchBtn = document.getElementById(`searchBtn`);
    let settingBtn = document.getElementById(`settingBtn`);

    const searchBtnMouseOver = ()=>{
        switch(theme){
            case 'white':
                searchBtn.style.backgroundColor = '#C9C7C7';
                searchBtn.src = serachBtnThemeWhite_hover;
                break;
            case 'black':
                searchBtn.src = serachBtnThemeWhite_hover;
                break;
        }
    };

    const searchBtnMouseLeave = ()=>{
        switch(theme){
            case 'white':
                searchBtn.style.backgroundColor = '#ffffff';
                searchBtn.src = searchBtnThemeWhite;
                break;
            case 'black':
                searchBtn.src = searchBtnThemeWhite;
                break;
        }
    };

    const settingBtnMouseOver = ()=>{
        switch(theme){
            case 'white' :
                settingBtn.style.backgroundColor = '#C9C7C7';
                settingBtn.src = settingBtnThemeWhite_hover;
                break;
            case 'black' :
                settingBtn.src = settingBtnThemeWhite_hover;
                break;
        }
    }
    const settingBtnMouseLeave = ()=>{
        switch(theme){
            case 'white' :
                settingBtn.style.backgroundColor = '#ffffff';
                settingBtn.src = settingBtnThemeWhite;
                break;
            case 'black' :
                settingBtn.src = settingBtnThemeWhite;
                break;
        }
    }
    const clickSetting = ()=>{
        props.convertIsSettingOn((prev)=>!prev);
    }

    // 테마 변경시 버튼들의 배경색을 테마에 맞게 변경하는 useEffect
    useEffect(()=>{
        if(searchBtn !== null && settingBtn !== null){
            switch(theme){
                case 'white':
                    searchBtn.style.backgroundColor = '#ffffff';
                    settingBtn.style.backgroundColor = '#ffffff';
                    break;
                case 'black':
                    searchBtn.style.backgroundColor = '#000000';
                    settingBtn.style.backgroundColor = '#000000';
                    break;
            }
        }
    },[theme]);

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