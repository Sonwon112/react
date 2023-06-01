import React from 'react'
import EditButton from './EditButton';

const style ={
    width:"300px",
    height:"200px",
    margin:"8px",
    borderRadius:"8px",
    backgroundColor:"#e9dbd0",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
}

const Card = () => {
    //  const {isAdmin} = props;
  return (
    <div style={style}>
        <p>야마다 타로</p>
        <EditButton/>
    </div>
  )
}

export default Card