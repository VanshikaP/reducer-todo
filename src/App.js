import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <h1> Welcome to your task list </h1>
      <ToDoList />
    </div>
  );
}

export default App;
