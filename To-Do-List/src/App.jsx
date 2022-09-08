import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div className='main'>
        <header>
          <h1>What's The Plan for Today</h1>
        </header>
        <Form todos={todos} setTodos={setTodos} input={input} setInput={setInput} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;