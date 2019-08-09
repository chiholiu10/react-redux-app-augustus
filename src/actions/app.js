export const types = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    DELETE_TODO: 'DELETE_TODO'
}

let nextTodoId = 0;

export const addTodo = text => ({
    type: types.ADD_TODO,
    id: nextTodoId++,   
    text
});

export const toggleTodo = id => ({
    type: types.TOGGLE_TODO,
    id
});

export const deleteTodo = id => ({
    type: types.DELETE_TODO,
    id
});