import React from 'react';
import Inputfield from './components/Inputfield';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Inputfield/>
      <TodoList/>
    </div>
  );
}

export default App;
