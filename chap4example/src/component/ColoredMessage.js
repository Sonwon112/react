import React from 'react'

const ColoredMessage = (props) => {
    const contentStyle = {
        color:props.color,
        fontSize : "20px"
    };

    return (
    <div>
        <div style={contentStyle}>{props.message}</div>
    </div>
  )
}

export default ColoredMessage