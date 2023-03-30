import React from 'react'
import '../App.css'

const Box = (Props) => {
  return (
    <div className='box'>
        클릭횟수 : {Props.num}
    </div>
  )
}

export default Box