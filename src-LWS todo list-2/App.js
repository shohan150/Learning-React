import './App.css';
import React, { useState } from 'react';
import notes from './images/notes.png';
import Features from './components/features/Features';
import Filtering from './components/filtering/Filtering';
import Task from './components/task/Task';



function App() {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [completion, setCompletion] = useState(false);
  const [redType, setRedType] = useState(false);
  const [greenType, setGreenType] = useState(false);
  const [yellowType, setYellowType] = useState(false);

  const [additionalFilter, setAdditionalFilter] = useState(false);


  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    setTodos([...todos, { id: Date.now(), text: newTodo, completion: false, red: false, green: false, yellow: false }]);
    setNewTodo('');
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const colorMatches = (colors) => {
    return (redType && colors.red === redType) || (greenType && colors.green === greenType) || (yellowType && colors.yellow === yellowType) || (!redType && !yellowType && !greenType && true);
  }

  return (
    <>
      <div
        className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
      >
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">

          <div>
            <div>
              <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md " onSubmit={addTodo}
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

            <Features todos={todos} setTodos={setTodos}></Features>
          </div>
          <hr className="mt-4" />

          {
            todos.map((todo) => (
              !additionalFilter ?
                colorMatches(todo) &&
                <Task key={todo.id} todo={todo} todos={todos} setTodos={setTodos} removeTodo={removeTodo} />
                :
                todo.completion === completion && colorMatches(todo) &&
                <Task key={todo.id} todo={todo} todos={todos} setTodos={setTodos} removeTodo={removeTodo} />

            ))
          }


          <hr className="mt-4" />
          <Filtering length={todos.length} completion={completion} setCompletion={setCompletion} redType={redType} setRedType={setRedType} greenType={greenType} setGreenType={setGreenType} yellowType={yellowType} setYellowType={setYellowType} additionalFilter={additionalFilter} setAdditionalFilter={setAdditionalFilter}></Filtering>

        </div>
      </div >
    </>

  );
}

export default App;
