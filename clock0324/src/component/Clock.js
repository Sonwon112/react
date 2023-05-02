import React,{useState,useEffect} from 'react'

const Clock = (Props) => {

  return (
    <div>
        <h2>현재시각은 : {Props.time}</h2>
    </div>
  )
}

  export default Clock
