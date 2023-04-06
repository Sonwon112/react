import React,{Component} from 'react';
import TodoListContent from './TodoListContent';

export default class TodoListBoard extends Component{
    render(){
        return(
            <div>
                {this.props.dataArr.map((item,index)=>{<TodoListContent value = {item} index = {index} deleteItem={this.props.deleteItem}/>})}
            </div>
        )
    }
}