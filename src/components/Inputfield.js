import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/app';

const Inputfield = ({ dispatch }) => {
    let input;

    const clicking = (e) => {
        if(input.value.trim() !== "") {
            dispatch(addTodo(input.value.trim()))
            input.value = "";
        }
    }

    return (
        <div>
            <input type="text" ref={node => (input = node)}/>
            <button type="submit" onClick={clicking}>
                Add Todo
            </button>
        </div>
    )
}

export default connect()(Inputfield);