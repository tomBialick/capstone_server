import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
        super(props);
        this.state = {
          x:0,
          y:0,
          z:0
        };
    }

  componentDidMount() {
    fetch('http://5halfcap.ngrok.io/phone', {method: 'GET'}).then(function(response) {
      return response.json();
    }).then(function(jsonData) {
      return JSON.stringify(jsonData);
    }).then(function(jsonStr) {
      this.setState({x: jsonStr.body.x, y: jsonStr.body.y, z: jsonStr.body.z});
      console.log(jsonStr);
    });
  }
  render() {
    return (
      <h1>X: {this.state.x}</h1>
      <h1>Y: {this.state.y}</h1>
      <h1>Z: {this.state.z}</h1>
    );
    /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );*/
  }
}

export default App;
