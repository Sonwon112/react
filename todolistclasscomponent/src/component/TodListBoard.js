import React,{Component} from 'react';
import TodoListContent from './TodoListContent';

export default class TodoListBoard extends Component{

    render(){
        return(
            <div>
                {this.props.dataArr.map((item,index)=>{return(<TodoListContent value = {item} index = {index} deleteData={this.props.deleteData}/>)})}
                {/* {this.props.dataArr} */}
            </div>
        )
    }
}

