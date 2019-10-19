import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './Header';
import TodoApp from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
       <TodoApp />
      </div>
    );
  }
}
export default App;

