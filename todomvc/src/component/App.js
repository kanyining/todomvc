import React, { Component } from 'react';
import Header from './Header';
import MainSection from './MainSection';
// const tidos=[
//   {
//     id:this.state.todos.reduce((maxId,todo)=>Math.max(todo.id,maxId),-1) +1,
//     completed:false,
//     text:text
//   },
//   ...this.state.todos
// ]
// this.setState({todos})
const initialState=[
  {
    text:'React ES6 TodoMVC',
    completed:false,
    id:0
  }
]


class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      todos:initialState,
      gameID:null,
      player:0
    }
  }
}

export default App;
