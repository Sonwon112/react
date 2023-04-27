import React from 'react'
import "../App.css"

const TodoListContent = (props) => {
    const clickedButton = ()=>{
        props.deleteData(props.index);
    };
    
    const editClick = ()=>{
        const editDiv = document.createElement("div");
        const editInput = document.createElement("input");
        const editButton = document.createElement("button");
        const cancleButton = document.createElement("button");
        editDiv.id = `edit${props.index}`
        editDiv.className = "editBox"
        
        
        let text = "";
        editInput.onchange = (e)=>{
           text = e.target.value;
        }
        editButton.textContent = "수정";
        editButton.className = "editBoxButton"
        editButton.onclick = ()=>{
            props.editData(text,props.index);
            const tag = document.getElementById(`edit${props.index}`);
            tag.remove();
        }
        cancleButton.textContent="취소";
        cancleButton.onclick=()=>{
            const tag = document.getElementById(`edit${props.index}`);
            tag.remove();
        }

        editDiv.appendChild(editInput);
        editDiv.appendChild(editButton);
        editDiv.appendChild(cancleButton);
        const listTag = document.getElementsByClassName("listContent");
        listTag[props.index].appendChild(editDiv);
    }
    

    return (
        <div className="listContent">
            {props.index + 1}.
            <div style={{color : "red",backgroundColor : "gold"}} id={`list${props.index}`}>{props.data}
                <button className='editButton' onClick={editClick}>수정</button>
                <button className='deletButton' onClick={clickedButton}>삭제</button>
            </div>
        </div>
    )
}

export default TodoListContent