import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {  
  handleSubmit = (e) => {
    e.preventDefault();
    var a = this.firstName.value;
    var b = this.number.value;
    var c = +a + +b;
    document.getElementById('result').innerHTML=c;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Assignment</h1>
          </header>
        <form className="a" onSubmit={this.handleSubmit}>
          <CustomInput 
          h1={'Enter numbers'}  
          firstName={input => this.firstName = input} 
          number = {inputed => this.number = inputed} />
           <p className="page">Result:  <span className="res" id="result"></span></p>
          <input className="button" type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

function CustomInput(props) {  
  return (
    <div>
      <h1 className="label">{props.h1}:</h1>
      <br></br>
      <input className="num1" type="number" ref={props.firstName}/>
      <input className="num2" type="number" ref={props.number}/>
    </div>
  );
}
 
export default App;
