import React,{memo} from 'react'

const style = {
    height:"50px",
    backgroundColor : "lightgreen"
}

// const Child5 = memo(() => {
const Child5 = ()=>{
    console.log("Child5 랜더링")
    return (
        <div style={style}>
            <p>Child5</p>    
        </div>
    )
}
// });

export default Child5