import './App.css';
import React, { useState } from 'react';
import notes from './images/notes.png';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Task from './components/task/Task';



function App() {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [stage, setStage] = useState('all');
  const [type, setType] = useState('green');


  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    setTodos([...todos, { id: Date.now(), text: newTodo, completion: false, type: 'green' }]);
    setNewTodo('');
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };


  return (
    <>
      <div
        className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
      >
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">

          <div>
            <div>
              <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={addTodo}
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
                  className="appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain"
                ></button>
              </form>
            </div>

            <Header todos={todos} setTodos={setTodos}></Header>
          </div>
          <hr className="mt-4" />

          {
            todos.map((todo) => (
              < Task key={todo.id} todos={todos} todo={todo} setTodos={setTodos} removeTodo={removeTodo} stage={stage} ></Task>

            ))}


          <hr className="mt-4" />
          <Footer todos={todos} stage={stage} setStage={setStage} type={type} setType={setType} setTodos={setTodos}></Footer>

        </div>
      </div >
    </>

  );
}

export default App;
