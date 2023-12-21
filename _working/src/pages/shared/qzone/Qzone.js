import React from 'react';
import qzone1 from '../../../assets/1.png';
import qzone2 from '../../../assets/2.png';
import qzone3 from '../../../assets/3.png';

const Qzone = () => {
   return (
      <div className='bg-secondary text-center my-4 py-3'>
         <h4>Q-zone</h4>
         <div>
            <img className='w-100 p-3' src={qzone1} alt="" />
            <img className='w-100 p-3' src={qzone2} alt="" />
            <img className='w-100 p-3' src={qzone3} alt="" />
         </div>
      </div>
   );
};

export default Qzone;