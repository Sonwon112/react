import React,{memo} from 'react'
import Child2 from './Child2'
import Child3 from './Child3'

const style = {
    height : "200px",
    backgroundColor : "lightblue",
    padding : "8px"
};

const Child1 = memo((props) => {
    console.log("Child1 렌더링");
    
    return (
        <div style={style}>
            <p>Child1</p>
            <button onClick={props.onClickReset}>리셋</button>
            <Child2/>
            <Child3/>
        </div>
    )
})

export default Child1