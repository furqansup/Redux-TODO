// src/components/TodoList.js

import React from 'react';
import { useSelector } from 'react-redux';

const TodoList = () => {
  // Assume there's a 'todos' state in your Redux store
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <h2>Your Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
