import './App.css';
import React, { useEffect, useState } from 'react';
import notes from './images/notes.png';
import Header from './components/header/Header';
import Task from './components/task/Task';
import Footer from './components/footer/Footer';



function App() {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;

    setTodos([...todos, { id: Date.now(), text: newTodo }]);
    setNewTodo('');
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  console.log(todos);
  return (
    <>
      <div
        className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
      >
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">

          <div>
            <div>
              <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
              >
                <img
                  src={notes}
                  className="w-6 h-6"
                  alt="Add todo"
                />
                <input
                  type="text"
                  placeholder="Type your todo"
                  className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500" value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }}
                />
                <button
                  type="submit"
                  className="appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain" onClick={addTodo}
                ></button>
              </form>
            </div>
            <Header></Header>
          </div>
          <hr className="mt-4" />

          <Task></Task>

          <hr className="mt-4" />
          <Footer></Footer>

        </div>
      </div>

      {/* //////////////////////////////// */}

      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>

  );
}

export default App;
