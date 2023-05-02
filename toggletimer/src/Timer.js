import React,{useEffect} from 'react'

const Timer = () => {

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("타이머실행중");},1000);
            return(()=>{
                clearInterval(timer);
                console.log("타이머 종료")});
        
    },[]);

    return (
        <div>타이머 시작 console 창을 확인하세요</div>
    )
}

export default Timer