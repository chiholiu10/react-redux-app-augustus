import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions/app';

const TodoList = ({ todo, toggleTodo }) => {

    let newTodo = todo.map((item, index) => {
        return (
            <div key={index}>
                <div style={{ textDecoration: item.completed ? 'line-through': 'none'}} onClick={() => toggleTodo(item.id)}> {item.text}</div>
                <button onClick={() => deleteTodo(item.id)}>X</button>
            </div>
        )
    }); 

    return (
        <div>
            { newTodo}
        </div>
    )
}

const mapDispatchToProps  = dispatch => ({
    toggleTodo: index => dispatch(toggleTodo(index)),
    deleteTodo: index => dispatch(deleteTodo(index))
});

const mapStateToProps = state => ({
    todo: state.app
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);