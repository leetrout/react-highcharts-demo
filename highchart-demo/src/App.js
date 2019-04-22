import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import StockChart from "./components/StockChart"

class App extends Component {
  render() {
    return (
      <div>
        <h2>My Cool Chart</h2>
        <StockChart></StockChart>
      </div>
    );
  }
}

export default App;
