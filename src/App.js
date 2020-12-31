import React, { useState } from 'react';
// import React from 'react';

function App() {
  const [text, setText] = useState(0);

  const handleChange = e => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const handleSubmit = () => {
    console.log('handleSubmit clicked');
  };

  return (
    <>
      <input type='text' onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      <p>{text}</p>
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
