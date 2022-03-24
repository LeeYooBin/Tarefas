import About from "./components/About";
import React, { Component } from "react";

class App extends Component {
  state = {
    infos: {
      nome: "Roberdan",
      idade: 20,
      estudando: "React"
    }
  };
  render() {
    return <About info={this.state.infos} />;
  }
}

export default App;
