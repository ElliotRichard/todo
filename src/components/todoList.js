import ListGroup from 'react-bootstrap/ListGroup';
import React from "react";

const Todo = props => (
<ListGroup.Item variant={props.variant} onClick={() => props.clickAction(props.todo)}>{props.todo}</ListGroup.Item>
);
const TodoList = props => {
    return (
        <ListGroup>
            {props.todos.map(todo => (
                <Todo 
                    todo={todo} 
                    key={todo}
                    variant={props.variant} 
                    clickAction={props.clickAction}
                />
            ))}
        </ListGroup>
    );
};

export default TodoList;