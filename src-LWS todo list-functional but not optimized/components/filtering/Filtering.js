import React from 'react';

const Filtering = ({ length, completion, setCompletion, type, setType }) => {

   return (
      <div className="mt-4 flex justify-between text-xs text-gray-500">
         <p>{length} tasks left</p>
         <ul className="flex space-x-1 items-center text-xs">
            <li className={`cursor-pointer ${completion === 'all' && 'font-bold'}`} onClick={() => { setCompletion('all'); setType('all') }}>All</li>
            <li>|</li>
            <li className={`cursor-pointer ${completion === 'incomp' && 'font-bold'}`} onClick={() => setCompletion('incomp')}>Incomplete</li>
            <li>|</li>
            <li className={`cursor-pointer ${completion === 'comp' && 'font-bold'}`} onClick={() => setCompletion('comp')}>Complete</li>
            <li></li>
            <li></li>
            <li
               className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${(type === "green" || type === 'all') && 'bg-green-500'} `} onClick={() => setType('green')}
            ></li>
            <li
               className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${type === "red" && 'bg-red-500'}`} onClick={() => setType('red')}
            ></li>
            <li
               className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${type === "yellow" && 'bg-yellow-500'}`} onClick={() => setType('yellow')}
            ></li>
         </ul>
      </div>
   );
};

export default Filtering;