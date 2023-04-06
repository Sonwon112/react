import React,{Component} from 'react';
import './App.css';
import TodoListBoard from './component/TodListBoard';

export default class App extends Component {
  state = {
    inputData : "",
    dataArr : []
  }
  getInputText = (s)=>{
    this.setState({inputData : s});
  }
  addData = ()=>{
    this.setState({dataArr : [...this.state.dataArr,this.state.inputData]});
    // console.log(this.state.dataArr);
  }
  deleteData = (index)=>{
    this.state.dataArr.splice(index,1);
    this.setState({dataArr : [...this.state.dataArr]})
  }
  clearData = ()=>{
    this.state.dataArr.splice(0)
    this.setState({dataArr : [...this.state.dataArr]});
    // console.log(this.state.dataArr);
  }
  render(){
    return (
      <div className="App">
          <input onChange={(e)=>{this.getInputText(e.target.value)}}></input>
          <button onClick={this.addData}>추가</button>
          <button onClick={this.clearData}>전체 삭제</button>
          <hr/>
          <h1>ToDoList(classComponent.ver)</h1>
          <TodoListBoard dataArr={this.state.dataArr} deleteData ={this.deleteData}></TodoListBoard>
      </div>
    )
  }
}


