// import React, { useState } from 'react';
import React from 'react'
import TodoList from './Components/TodoList'
import Task from './Components/Task';
import './Components/Style.css'


const App = () => {

  return (
    <div className="App">
      
      <h1>Todo App</h1>

      <TodoList />
      <Task />
    </div>
  );
};

export default App;

