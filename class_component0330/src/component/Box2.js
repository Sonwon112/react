import React, { Component } from 'react'

export default class Box2 extends Component {
     
    constructor(props){
        super(props);
        this.state = {

        };
    }
  render() {

    return (
      <div>
        <div className='box2'> 클릭횟수 {this.props.num}</div>
      </div>
      
      
    )
  }
}
