import React from 'react';

const Footer = ({ todos, stage, setStage, type, setType, setTodos }) => {

   const stageBased = (c) => {
      setStage(c);
      // let filteredArray = todos.filter(todo => todo???? === c);
   }

   const typeBased = (color) => {
      setType(color);
      let filteredArray = todos.filter(todo => todo.type === color);
   }

   return (
      <div className="mt-4 flex justify-between text-xs text-gray-500">
         <p>{todos.length} tasks left</p>
         <ul className="flex space-x-1 items-center text-xs">
            <li className={`cursor-pointer ${stage === 'all' && 'font-bold'}`} onClick={() => stageBased('all')}>All</li>
            <li>|</li>
            <li className={`cursor-pointer ${stage === 'incomp' && 'font-bold'}`} onClick={() => stageBased('incomp')}>Incomplete</li>
            <li>|</li>
            <li className={`cursor-pointer ${stage === 'comp' && 'font-bold'}`} onClick={() => stageBased('comp')}>Complete</li>
            <li></li>
            <li></li>
            <li
               className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${type === "green" && 'bg-green-500'}`} onClick={() => typeBased('green')}
            ></li>
            <li
               className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${type === "red" && 'bg-red-500'}`} onClick={() => typeBased('red')}
            ></li>
            <li
               className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${type === "yellow" && 'bg-yellow-500'}`} onClick={() => typeBased('yellow')}
            ></li>
         </ul>
      </div>
   );
};

export default Footer;