import React, { Component } from 'react'
import "../App.css"

export default class TodoListContent extends Component {

    

    deleteContent = ()=>{
        this.props.deleteItem(this.props.item);
    }

    render() {
        return (
            <div className='listContent'>
                {this.props.value}
                <button onClick={this.deleteContent}>삭제</button>
            </div>
        )
  }
}
