import React, { Component } from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todolist from './components/TodoList';
import TodoInput from './components/TodoInput';


//this is a new changee
class App extends Component {
  state = {
    items: [{ id: 1, title: "wake up" }, { id: 2, title: "make breakfast" }],
    id: uuid(),
    item: '',
    editItem: false,

  };

  handleChange = (e) => {
    console.log('handle change')
  };

  handleSubmit = (e) => {
    console.log('handle Submit')
  };

  clearList = () => {
    console.log('clear list')
  };

  handleEdit = (id) => {
    console.log(`handle edit ${id}`)
  };

  handleDelete = (id) => {
    console.log(`handle edit ${id}`)
  }


  render() {


    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-centre">
              to-do-input
          </h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <Todolist />
          </div>
        </div>
      </div>



    )
  }
}

export default App;
