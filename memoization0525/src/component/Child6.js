import React,{memo} from 'react'

const style={
    height:"50px",
    backgroundColor:"pink",
}

const Child6 = memo(() => {
  return (
    <div style={style}>
        <p>Child6</p>
    </div>
  )
});

export default Child6