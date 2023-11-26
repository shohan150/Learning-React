import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';


function App() {
  const [isCompletedScreen, setIsCompletedScreen] = useState(true);
  const [allTodos, setAllTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [completedTodos, setCompletedTodos] = useState([]);


  return (
    <div className="App">
      <h1>My ToDo</h1>
      <div className="todoWrapper">
        <div className="todo-input">
          <div className='todo-input-item'>
            <label>Title</label>
            <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="What's the task title?" />
          </div>
          <div className='todo-input-item'>
            <label>Description</label>
            <input value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="What's the description?" />

          </div>
          <div className='todo-input-item'>
            <button className='primaryBtn'>Add</button>
          </div>
        </div>

        <div className="btn-area">

          <button className={`secondaryBtn ${isCompletedScreen && 'active'}`}
            onClick={() => setIsCompletedScreen(true)}>To Do</button>

          <button className={`secondaryBtn ${!isCompletedScreen && 'active'}`}
            onClick={() => setIsCompletedScreen(false)}>Completed</button>

        </div>

        <div className="todo-list">
          <div className="todo-list-item">

            <div>
              <h3>Task 1</h3>
              <p>Description</p>
            </div>

            <div>
              <AiOutlineDelete
                title="Delete?"
                className="icon"
              />
              <BsCheckLg
                title="Completed?"
                className=" check-icon"
              />
            </div>
          </div>
        </div>

      </div >
    </div>
  );
}


export default App;
