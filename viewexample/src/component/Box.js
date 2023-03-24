import React,{useState} from 'react'
import '../App.css'

const Box = (Props) => {
    const [count,setCouter] = useState(0);

    const clickList = ()=>{
        setCouter(count+1);
    }
    return (
    <div className = "Box" onClick = {clickList}>
        <p>{Props.name}<br/>조회수{count}</p>
    </div>
  )
}

export default Box