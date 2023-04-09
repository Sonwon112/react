import React, { Component } from 'react'
import "../App.css"

export default class TodoListContent extends Component {

    deleteContent = ()=>{
        this.props.deleteData(this.props.index);
    }

    render() {
        return (
            <div>
                <div className='listContent'>
                {this.props.value}
                <button onClick={this.deleteContent}>삭제</button>
            </div>
            </div>
            
        )
  }
}
