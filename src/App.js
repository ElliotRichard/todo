import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import TodoList from './components/todoList';
import TodoForm from './components/todoForm';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      completedTodos: [],
    };
  }
  addTodo = todo => {
    this.setState(prevState => ({
      todos: [...prevState.todos, todo],
    }));
  };
  deleteTodo = selectedTodo => {
    this.setState(prevState => ({
      completedTodos: prevState.todos.filter(todo => todo !== selectedTodo),
    }));
  };
  completeTodo = selectedTodo => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo !== selectedTodo),
      completedTodos: [...prevState.completedTodos, selectedTodo],
    }))
  }
  render() {
    return (
      <div className="App">
              <Navbar bg="dark" variant="dark">
        <Navbar.Brand>To-Do</Navbar.Brand>
      </Navbar>
        <h2>Active</h2>
        <TodoList todos={this.state.todos} variant="primary" clickAction={this.completeTodo} />
        <h2>Completed</h2>
        <TodoList todos={this.state.completedTodos} variant="success" clickAction={this.deleteTodo} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
