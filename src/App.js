import logo from './logo.svg';
import './App.css';
import TodoList from './components/todoList';
import TodoForm from './components/todoForm';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  addTodo = todo => {
    this.setState(prevState => ({
      todos: [...prevState.todos, todo],
    }));
  };
  deleteTodo = selectedTodo => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo !== selectedTodo),
    }))
  }
  render() {
    return (
      <div className="App">
        <h1>To-Do</h1>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
