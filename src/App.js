import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Calc from './components/Calc';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Calc />
        <Footer />
      </div>
    );
  }
}

