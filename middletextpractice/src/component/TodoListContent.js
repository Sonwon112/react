import React, { useState } from 'react'
import "../App.css"

const TodoListContent = (props) => {
    const [textContent, setTextContent] = useState(props.data);
    const clickedButton = ()=>{
        props.deleteData(props.index);
    };
    
    const editClick = ()=>{
        const editDiv = document.createElement("div");
        const editInput = document.createElement("input");
        const editButton = document.createElement("button");
        editDiv.id = `edit${props.index}`
        editDiv.className = "editBox"
        
        editInput.onchange = (e)=>{
            setTextContent(e.target.value);
        }
        editButton.textContent = "수정";
        editButton.onclick = ()=>{
            const tag = document.getElementById(`edit${props.index}`);
            tag.remove();
        }

        editDiv.appendChild(editInput);
        editDiv.appendChild(editButton);
        const listTag = document.getElementsByClassName("listContent");
        listTag[props.index].appendChild(editDiv);
    }

    return (
        <div className="listContent">
            {props.index + 1}.
            <div id={`list${props.index}`}>{textContent}
                <button className='editButton' onClick={editClick}>수정</button>
                <button className='deletButton' onClick={clickedButton}>삭제</button>
            </div>
        </div>
    )
}

export default TodoListContent