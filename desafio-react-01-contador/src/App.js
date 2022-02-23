import React from "react";
import './App.css';

export default class App extends React.Component{
  state = { counter: 0 };

  increment = () => {
    if(this.state.counter < 10) this.setState(this.setState({counter: this.state.counter + 1}));
    else this.setState({counter: 0});
  }

  decrement = () => {
    if(this.state.counter > 0) this.setState(this.setState({counter: this.state.counter - 1}));
    else this.setState({counter: 10});
  }
  
  render(){
    return (
      <div id="main">
        <h1>Contador</h1>
        <button onClick={this.increment}> + </button>
        <h2 on>{this.state.counter}</h2>
        <button onClick={this.decrement}> - </button>
      </div>
    );
  }
}

// import "./styles.css";