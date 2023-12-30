import React, { useState, useEffect } from 'react';
import cancel from '../../images/cancel.png';

const Task = ({ todo, removeTodo, completion, type, completeAll, clearCompleted, setClearCompleted }) => {
   const [taskCompletion, setTaskCompletion] = useState('incomp');
   const [taskType, setTaskType] = useState('green');

   useEffect(() => {
      if (completeAll) {
         setClearCompleted(false);
         setTaskCompletion('comp');
      }
   }, [completeAll, setClearCompleted]);

   useEffect(() => {
      if (clearCompleted && taskCompletion === 'comp') {
         removeTodo(todo.id);
      }
   }, [clearCompleted, removeTodo, taskCompletion, todo.id]);


   if (!(completion === 'all' && type === 'all')) {
      if (completion === 'comp') {
         if (!(taskCompletion === 'comp')) return;
      }
      if (completion === 'incomp') {
         if (!(taskCompletion === 'incomp')) return;
      }
      if (type === 'green') {
         if (!(taskType === 'green')) return;
      }
      if (type === 'red') {
         if (!(taskType === 'red')) return;
      }
      if (type === 'yellow') {
         if (!(taskType === 'yellow')) return;
      }
   }

   return (
      <>
         <div
            className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
         >

            <div
               className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
            >
               <div
                  className="rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500"
               >
                  <input
                     type="checkbox"
                     className="opacity-0 absolute rounded-full" onClick={() => { setTaskCompletion('comp'); setClearCompleted(false); }}
                  />
                  <svg
                     className={`fill-current w-3 h-3 text-green-500 pointer-events-none ${taskCompletion === 'incomp' && 'hidden'}`}
                     viewBox="0 0 20 20"
                  >
                     <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
               </div>

               <div className={`select-none flex-1 ${taskCompletion === 'comp' && 'line-through'}`}>
                  {todo.text}
               </div>

               <div
                  className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${taskType === 'green' && 'bg-green-500'}`} onClick={() => { setTaskType('green'); }}
               ></div>

               <div
                  className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${taskType === 'yellow' && 'bg-yellow-500'}`} onClick={() => { setTaskType('yellow'); }}
               ></div>

               <div
                  className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${taskType === 'red' && 'bg-red-500'}`} onClick={() => { setTaskType('red'); }}
               ></div>

               <img
                  src={cancel}
                  className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                  alt="Cancel" onClick={() => removeTodo(todo.id)}
               />
            </div>
         </div>
      </>
   );
};

export default Task;