import React,{memo} from 'react'
import Child5 from './Child5';
import Child6 from './Child6';

const style = {
    height:"200px",
    backgroundColor:"wheat",
    padding:"8px"
};

const Child4 = memo(() => {
// const Child4 = ()=>{
    console.log("Child4 렌더링");
    return (
        <div style={style}>
            <p>Child4</p>
            <Child5/>
            <Child6/>
        </div>
    )
//   }
});

export default Child4