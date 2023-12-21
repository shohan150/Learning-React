import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

   const [categories, setCategories] = useState([]);
   useEffect(() => {
      fetch('http://localhost:5000/categories')
         .then(res => res.json())
         .then(data => setCategories(data))
         .catch(err => console.log(err))
   }, []);

   return (
      <div>
         <h4>All Categories</h4>
         <div className='ps-4'>
            {
               categories.map(cat => <p key={cat.id}>
                  <Link to={`/category/${cat.id}`} className='text-decoration-none text-black'>{cat.name}</Link>
               </p>)
            }
         </div>
      </div>
   );
};

export default LeftNav;