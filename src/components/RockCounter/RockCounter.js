import React, { Component } from 'react';

class RockCounter extends Component {
  constructor(props){
    super(props);
    this.state ={
      rocksPicked: 0,
    }   
  }
  Increase = (event) =>{
    console.log('increase')
    if(this.state.rocksPicked < 50){
      this.setState({ rocksPicked: this.state.rocksPicked + 1})
    }else if(this.state.rocksPicked === 50){
      this.setState({ rocksPicked: this.state.rocksPicked + '   Done'})
    }
  }
  Decrease = (event) =>{
    console.log('decrease');
    if(this.state.rocksPicked > 0){
      this.setState({ rocksPicked: this.state.rocksPicked - 1})
    }
  }
  Reset = () =>{
    console.log('reset');
    this.setState({ rocksPicked: 0})
  }
  render() {
    return (
      <div>
          <div>
              Rocks Picked: {this.state.rocksPicked}
          </div>
          <div>
            <button onClick = {this.Increase}>Increase</button>
            <button onClick = {this.Decrease}>Decrease</button>
            <button onClick = {this.Reset}>Reset</button>
          </div>
      </div>
    );
  }
}

export default RockCounter;
