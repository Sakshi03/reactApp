import React, { Component } from 'react';
import './App.css';

class Welcome extends Component{
constructor(props) {
    super(props);
    this.state = {value1: '', value2: '', result: ''};
    this.handleChange = this.handleChange.bind(this);
    this.addValues = this.addValues.bind(this);

  }
 

  handleChange(valueType, event) {
    if(valueType === "firstValue"){
      this.setState({value1: event.target.value});
    } else{
      this.setState({value2: event.target.value});
    }
    console.log(this.state)
  }

  addValues(value1, value2) {
    this.setState({result: parseInt(value1) + parseInt(value2)});
    console.log(this.state.result)
  }
  
  subtractValues(value1, value2) {
    this.setState({result: parseInt(value1) - parseInt(value2)});
    console.log(this.state.result)
  }
  
  multiplyValues(value1, value2) {
    this.setState({result: parseInt(value1) * parseInt(value2)});
    console.log(this.state.result)
  }
  
  divideValues(value1, value2) {
    this.setState({result: parseInt(value1) / parseInt(value2)});
    console.log(this.state.result)
  }
render() {
    return (
      <form>
        <label>
          First Value:
          <input type="number" value={this.state.value1} onChange={(e)=>{this.handleChange("firstValue", e)}} />
        </label><br/><br/>
        <label>
          Second Value:
          <input type="number" value={this.state.value2} onChange={(e)=>{this.handleChange("secondValue", e)}} />
        </label><br/><br/>

        <input type="submit" value="Add" onClick={(e)=>{e.preventDefault();this.addValues(this.state.value1, this.state.value2)}} />
        <input type="submit" value="Subtract" onClick={(e)=>{e.preventDefault();this.subtractValues(this.state.value1, this.state.value2)}} />
        <input type="submit" value="Multiply" onClick={(e)=>{e.preventDefault();this.multiplyValues(this.state.value1, this.state.value2)}} />
        <input type="submit" value="Divide" onClick={(e)=>{e.preventDefault();this.divideValues(this.state.value1, this.state.value2)}} />

        <br/><br/><label>RESULT
          <input type="textbox" value={this.state.result}></input>
        </label>
      </form>
    );
  }
}


export default Welcome;