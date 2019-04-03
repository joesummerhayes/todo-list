import React, { Component } from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todolist from './components/TodoList';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

//showing change a';slda;'sldas

class App extends Component {
  render() {
    return (
      <div className="container">
        <TodoInput />
        <Todolist />
      </div>
    )
  }
}

export default App;
