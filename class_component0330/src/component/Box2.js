import React, { Component } from 'react'

export default class Box2 extends Component {
     
    constructor(props){
        super(props);
        this.state = {
            city:'진주',
            cnt:0
        };
    }
    ff=()=>{
        this.setState({cnt:this.state.cnt+1});
    }

    render() {

    return (
      <div>
        <h2>class Component name in,{this.props.num} in {this.state.city}</h2>
        <hr/>
        <button onClick={this.ff}>클릭!</button>
        <div>클릭 회수 : {this.state.cnt}</div>
      </div>
      
      
    )
  }
}
