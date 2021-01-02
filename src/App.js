import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (newTodo === '') return;

    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), text: newTodo, completed: true }];
    });
    setNewTodo('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
      </form>
      <div>
        <ul>
          {todos.map(todos => {
            return <li key={todos.id}>{todos.text}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;

// import React, { useState, useRef, useEffect } from 'react';
// import TodoList from './TodoList';
// import { v4 as uuidv4 } from 'uuid';

// const LOCAL_STORAGE_KEY = 'todoApp.todos';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const todoNameRef = useRef();
//   // useRef - allows to reference elements inside the html

//   useEffect(() => {
//     const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//     if (storedTodos) setTodos(storedTodos);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
//   }, [todos]);

//   const toggleTodo = id => {
//     const newTodos = [...todos];
//     const todo = newTodos.find(todo => todo.id === id);
//     todo.complete = !todo.complete;
//     setTodos(newTodos);
//   };

//   const handleAddTodo = e => {
//     const name = todoNameRef.current.value;
//     // current = any element currently referencing
//     if (name === '') return; // prevents adding an empty todo
//     setTodos(prevTodos => {
//       return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
//     });
//     todoNameRef.current.value = null;
//   };

//   const handleClearTodos = () => {
//     const newTodos = todos.filter(todo => !todo.complete);
//     setTodos(newTodos);
//   };

//   return (
//     <>
//       <TodoList todos={todos} toggleTodo={toggleTodo} />
//       <input type='text' ref={todoNameRef} />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <button onClick={handleClearTodos}>Clear Complete</button>
//       <div>{todos.filter(todo => !todo.complete).length} left to do</div>
//     </>
//   );
// }

// export default App;
