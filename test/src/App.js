import React from 'react';
import logo from './logo.svg';
import './App.css';
import Oneshop from '../../index';

class Test extends React.Component {

  componentDidMount(){
    let os = new Oneshop("http://oneshopacademy.oneshop.host");
    os.signature.get();
  }

  render(){
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
  }
}

export default Test;
