import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions/app';

const TodoList = ({ todo, toggleTodo, deleteTodo }) => {

    let newTodo = todo.map((item, index) => {
        return (
            <div key={index}>
                <div style={{ textDecoration: item.completed ? 'line-through': 'none'}} onClick={() => toggleTodo(item.id)}>{item.text}</div>
                <div onClick={() => deleteTodo(item.id)}>X</div>
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