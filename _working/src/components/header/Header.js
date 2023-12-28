import React from 'react';
import doubleTick from '../../images/double-tick.png';

const Header = ({ todos, setTodos }) => {

   const completeAll = () => {
      let updatedTodos = todos.map((todo) => ({
         ...todo,
         completion: true,
      }));
      setTodos(updatedTodos);
      // console.log(todos);
   }

   const clearCompleted = () => {
      let updatedTodos = todos.filter((todo) => !todo.completion);
      setTodos(updatedTodos);
      // console.log(todos);
   }

   return (
      <div>
         <ul className="flex justify-between my-4 text-xs text-gray-500">
            <li className="flex space-x-1 cursor-pointer">
               <img
                  className="w-4 h-4"
                  src={doubleTick}
                  alt="Complete"
               />
               <span onClick={completeAll}>Complete All Tasks</span>
            </li>
            <li className="cursor-pointer" onClick={clearCompleted}>Clear completed</li>
         </ul>
      </div >
   );
};

export default Header;