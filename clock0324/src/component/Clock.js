import React from 'react'

const Clock = (Props) => {
  return (
    <div>
        <h1>{Props.name}의 시계</h1>
        <h2>현재시각은 : {new Date().toLocaleTimeString()}</h2>
    </div>
  )
}

  export default Clock
