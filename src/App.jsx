import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form method="POST">
        <h1 className="title">Put the Price</h1>
        <input className="Input" placeholder="in how mutch you want to eat" name="price"/>
        <button className="button">EAT</button>
        </form>
      </header>
    </div>
  );
}

export default App;
