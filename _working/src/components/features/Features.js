import React from 'react';
import doubleTick from '../../images/double-tick.png';

const Features = ({ setCompleteAll, setClearCompleted }) => {

   return (
      <div>
         <ul className="flex justify-between my-4 text-xs text-gray-500">
            <li className="flex space-x-1 cursor-pointer">
               <img
                  className="w-4 h-4"
                  src={doubleTick}
                  alt="Complete"
               />
               <span onClick={() => setCompleteAll(true)}>Complete All Tasks</span>
            </li>
            <li className="cursor-pointer" onClick={() => setClearCompleted(true)}>Clear completed</li>
         </ul>
      </div >
   );
};

export default Features;