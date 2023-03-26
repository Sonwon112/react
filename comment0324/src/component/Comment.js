import React from 'react'
import logo from "../logo.svg"
import styles from "./styles.json"

const Comment = (Props) => {
  return (
    <div style={styles.wrapper}>
        <div style={styles.imgContainer}>
            <img src={logo} style={styles.img} alt="그림없음"></img>
        </div>
        <div style={styles.contentContainer}>
            <span style={styles.nameText}>{Props.name}</span>
            <span style={styles.commentText}>{Props.comment}</span>
        </div>
    </div>
    
  )
}

export default Comment