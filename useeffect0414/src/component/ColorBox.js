import React,{useEffect} from 'react'
import '../App.css'

const ColorBox = (props) => {
  const clickBtn = (e)=>{
    let color = e.target.innerText;
    // console.log(color);
    props.changeColor(color);
  }
  useEffect(() => {
    let box = document.getElementsByClassName('ColorBox');
    box[0].style.backgroundColor = props.color;
  }, [props.color])
  

  return (
    <div>
        <div className='ColorBox'></div>
        <button onClick={clickBtn}>RED</button>
        <button onClick={clickBtn}>GREEN</button>
        <button onClick={clickBtn}>BLUE</button>
        <button onClick={clickBtn}>PINK</button>
    </div>
  )
}

export default ColorBox