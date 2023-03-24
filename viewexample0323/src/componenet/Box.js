import React from 'react'
import "../App.css"

const Box =(Props)=> {
  return(
    <div className='box'>
        {Props.title} {Props.num}
    </div>
  ) 
} 

export default Box