import ListGroup from 'react-bootstrap/ListGroup';
import React from "react";

const Todo = props => (
<ListGroup.Item variant="primary" onClick={() => props.deleteTodo(props.todo)}>{props.todo}</ListGroup.Item>
);
const TodoList = props => {
    return (
        <ListGroup>
            {props.todos.map(todo => (
                <Todo 
                    todo={todo} 
                    key={todo} 
                    deleteTodo={props.deleteTodo}
                />
            ))}
        </ListGroup>
    );
};

export default TodoList;