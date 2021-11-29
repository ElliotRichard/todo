import React from 'react';

class TodoForm extends React.Component {
    todo = '';
    constructor (props) {
        super(props);
        this.state = { todoInput: ""};
    }
    handleChange = event => {
        this.todo = event.target.value;
        this.setState({todoInput: this.todo});
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.todoInput);
        this.todo = '';
    }
    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <input type="text" placeholder="Add goal" value={this.todo} onChange={event => this.handleChange(event)}/>
                <input type="submit" value="Add" />
            </form>
        );
    }
}

export default TodoForm;