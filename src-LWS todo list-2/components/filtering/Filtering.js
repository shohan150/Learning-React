import React from 'react';

const Filtering = ({ length, completion, setCompletion, redType, setRedType, greenType, setGreenType, yellowType, setYellowType, additionalFilter, setAdditionalFilter }) => {

   return (
      <div className="mt-4 flex justify-between text-xs text-gray-500">
         <p>{length} tasks left</p>
         <ul className="flex space-x-1 items-center text-xs">
            <li className={`cursor-pointer ${!additionalFilter && 'font-bold'}`} onClick={() => { setAdditionalFilter(false); console.log(additionalFilter) }}>All</li>
            <li>|</li>
            <li className={`cursor-pointer ${additionalFilter && !completion && 'font-bold'}`} onClick={() => { setCompletion(false); setAdditionalFilter(true); console.log(additionalFilter) }}>Incomplete</li>
            <li>|</li>
            <li className={`cursor-pointer ${additionalFilter && completion && 'font-bold'}`} onClick={() => { setCompletion(true); setAdditionalFilter(true); console.log(additionalFilter) }}>Complete</li>
            <li></li>
            <li></li>
            <li
               className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${greenType && 'bg-green-500'}`} onClick={() => { setGreenType(!greenType); }}
            ></li>
            <li
               className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${redType && 'bg-red-500'}`} onClick={() => { setRedType(!redType); }}
            ></li>
            <li
               className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${yellowType && 'bg-yellow-500'}`} onClick={() => { setYellowType(!yellowType); }}
            ></li>
         </ul>
      </div>
   );
};

export default Filtering;