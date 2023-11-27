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

  const handleAddTodo = () => {
    let newToDoObj = {
      title: newTitle,
      description: newDescription,
    };
    // console.log(newToDoObj);
    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newToDoObj);
    // console.log(updatedTodoArr);
    setAllTodos(updatedTodoArr);
    localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
    setNewDescription('');
    setNewTitle('');
  }

  useEffect(() => {
    let savedTodos = JSON.parse(localStorage.getItem('todolist'));
    let savedCompletedToDos = JSON.parse(
      localStorage.getItem('completedTodos')
    );
    if (savedTodos) {
      setAllTodos(savedTodos);
    }

    if (savedCompletedToDos) {
      setCompletedTodos(savedCompletedToDos);
    }
  }, []);

  function handleDelete(index) {
    let reducedTodos = [...allTodos];
    reducedTodos.splice(index, 1);
    // console.log(index);

    // console.log(reducedTodos);
    localStorage.setItem('todolist', JSON.stringify(reducedTodos));
    setAllTodos(reducedTodos);
  }

  const handleCompletedTodoDelete = index => {
    let reducedCompletedTodos = [...completedTodos];
    reducedCompletedTodos.splice(index);
    // console.log (reducedCompletedTodos);
    localStorage.setItem(
      'completedTodos',
      JSON.stringify(reducedCompletedTodos)
    );
    setCompletedTodos(reducedCompletedTodos);
  };

  const handleComplete = index => {
    const date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    var hh = date.getHours();
    var minutes = date.getMinutes();
    var ss = date.getSeconds();
    var finalDate =
      dd + '-' + mm + '-' + yyyy + ' at ' + hh + ':' + minutes + ':' + ss;

    let filteredTodo = {
      ...allTodos[index],
      completedOn: finalDate,
    };

    // console.log (filteredTodo);

    let updatedCompletedList = [...completedTodos, filteredTodo];
    // console.log(updatedCompletedList);
    setCompletedTodos(updatedCompletedList);
    localStorage.setItem(
      'completedTodos',
      JSON.stringify(updatedCompletedList)
    );
    // console.log (index);

    handleDelete(index);
  };

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
            <button className='primaryBtn' onClick={handleAddTodo}>Add</button>
          </div>
        </div>

        <div className="btn-area">

          <button className={`secondaryBtn ${isCompletedScreen && 'active'}`}
            onClick={() => setIsCompletedScreen(true)}>To Do</button>

          <button className={`secondaryBtn ${!isCompletedScreen && 'active'}`}
            onClick={() => setIsCompletedScreen(false)}>Completed</button>

        </div>

        <div className="todo-list">
          {isCompletedScreen &&
            allTodos.map((item, index) => (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                </div>
                <div>
                  <AiOutlineDelete
                    title="Delete?"
                    className="icon"
                    onClick={() => handleDelete(index)}
                  />
                  <BsCheckLg
                    title="Completed?"
                    className=" check-icon"
                    onClick={() => handleComplete(index)}
                  />
                </div>
              </div>
            ))}

          {!isCompletedScreen &&
            completedTodos.map((item, index) => (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p> <i>Completed at: {item.completedOn}</i></p>
                </div>
                <div>
                  <AiOutlineDelete
                    className="icon"
                    onClick={() => handleCompletedTodoDelete(index)}
                  />
                </div>
              </div>
            ))}
        </div>

      </div >
    </div>
  );
}


export default App;
