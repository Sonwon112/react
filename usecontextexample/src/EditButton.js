import React,{useContext} from 'react'
import {AdminFlagContext} from './AdminFlagProvider';

const style = {
    width:"100px",
    padding:"6px",
    borderRadius:"8px"
}

const EditButton = () => {
    const {isAdmin} = useContext(AdminFlagContext);
  return (
    <button style={style} disabled={!isAdmin}>수정</button>
  )
}

export default EditButton