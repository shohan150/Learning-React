import React from 'react';
import notes from '../../images/notes.png';

const DataEntry = (newTodo, setNewTodoFunc, addTodo) => {

   return (
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
               className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500" value={newTodo} onChange={(e) => { setNewTodoFunc(e.target.value) }}
            />
            <button
               type="submit"
               className="appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain" onClick={addTodo}
            ></button>
         </form>
      </div>


   );
};

export default DataEntry;