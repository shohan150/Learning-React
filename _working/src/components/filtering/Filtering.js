import React from 'react';

const Filtering = ({ todos, completion, setCompletion, types, toggleType, additionalFilter, setAdditionalFilter }) => {

   const incomplete = todos.filter(todo => !todo.completion);

   const handleClick = (color) => {
      toggleType(color);
   };

   return (
      <div className="mt-4 flex justify-between text-xs text-gray-500">
         <p>{incomplete.length} tasks left</p>
         <ul className="flex space-x-1 items-center text-xs">
            <li className={`cursor-pointer ${!additionalFilter && 'font-bold'}`} onClick={() => { setAdditionalFilter(false); console.log(additionalFilter) }}>All</li>
            <li>|</li>
            <li className={`cursor-pointer ${additionalFilter && !completion && 'font-bold'}`} onClick={() => { setCompletion(false); setAdditionalFilter(true); console.log(additionalFilter) }}>Incomplete</li>
            <li>|</li>
            <li className={`cursor-pointer ${additionalFilter && completion && 'font-bold'}`} onClick={() => { setCompletion(true); setAdditionalFilter(true); console.log(additionalFilter) }}>Complete</li>
            <li></li>
            <li></li>
            <li
               className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${types.green && 'bg-green-500'}`} onClick={() => handleClick('green')}
            ></li>
            <li
               className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${types.red && 'bg-red-500'}`} onClick={() => handleClick('red')}
            ></li>
            <li
               className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${types.yellow && 'bg-yellow-500'}`} onClick={() => handleClick('yellow')}
            ></li>
         </ul>
      </div>
   );
};

export default Filtering;