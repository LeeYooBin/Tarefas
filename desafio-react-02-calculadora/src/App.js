import React from 'react'
import './App.css'

export default class App extends React.Component {
  state = {
    res: '',
    n1: '',
    n2: '',
    sinal: ''
  }
  
  soma = () => {if(this.state.n1 && this.state.n2) this.setState({res: this.state.n1 + this.state.n2, sinal: '+'})};
  sub = () => {if(this.state.n1 && this.state.n2) this.setState({res: this.state.n1 - this.state.n2, sinal: '-'})};
  mult = () => {if(this.state.n1 && this.state.n2) this.setState({res: this.state.n1 * this.state.n2, sinal: '*'})};
  div = () => {if(this.state.n1 && this.state.n2) this.setState({res: this.state.n1 / this.state.n2, sinal: '/'})};
  clean = () => {if(this.state.n1 || this.state.n2 || this.state.res) this.setState({n1: '', n2: '', res: '', sinal: ''})};
  handleChange2 = event => this.setState({n2: Number(event.target.value)});
  handleChange1 = event => this.setState({n1: Number(event.target.value)});

  render() {
    return (
      <div id='main'>
        <h1>Calc App</h1>
        <input value= {this.state.n1} type='number' onChange={this.handleChange1} />
        <h3>{this.state.sinal}</h3>
        <input value= {this.state.n2} type='number' onChange={this.handleChange2} />
        <h2>{this.state.res}</h2>
        <div id='buttons'>
          <button onClick={this.soma}>+</button>
          <button onClick={this.sub}>-</button>
          <button onClick={this.mult}>*</button>
          <button onClick={this.div}>/</button>          
          <button onClick={this.clean}>C</button>
        </div>
      </div>
    );
  }
}
