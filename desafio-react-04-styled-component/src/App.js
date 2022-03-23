import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
`
const PageBody = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Main = styled.div`
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Input = styled.input`
  padding: 2%;
`

const Title = styled.h1`
  margin-bottom: 1vh;
`

const Signal = styled.h2`
  align-self: center;
  margin-top: 1vh;
  font-size: 1.5rem;
  margin-bottom: 1.5vh;
`

const Result = styled.h3`
  align-self: center;
  margin: 2vh 0 1vh 0;
  font-size: 1rem;
`

const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Button = styled.button`
  margin-top: 2vh;
  padding: 3%;
`

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
      <PageBody>
      <GlobalStyle />
      <Main>
        <Title>Calc App</Title>
        <Input value= {this.state.n1} type='number' onChange={this.handleChange1} />
        <Signal>{this.state.sinal}</Signal>
        <Input value= {this.state.n2} type='number' onChange={this.handleChange2} />
        <Result>{this.state.res}</Result>
        <Buttons>
          <Button onClick={this.soma}>+</Button>
          <Button onClick={this.sub}>-</Button>
          <Button onClick={this.mult}>*</Button>
          <Button onClick={this.div}>/</Button>          
          <Button onClick={this.clean}>C</Button>
        </Buttons>
      </Main>
      </PageBody>
    );
  }
}