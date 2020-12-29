import React, { useState } from 'react';

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = id => {
    toggleTodo(todo.id);
  };

  return (
    <div>
      <label>
        <input
          type='checkbox'
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        {todo.name}
      </label>
    </div>
  );
};

export default Todo;
