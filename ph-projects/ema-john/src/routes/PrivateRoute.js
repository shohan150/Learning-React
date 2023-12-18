import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

//children deyar karon ei component er under er sob element gulo ke privately accessible kora. mane login hoile sudhu ei component er under er component gulo dekhabe, login na thakle ei under er/children compoenent gulo dekhte e parbe na.
const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   const location = useLocation();

   if (loading) {
      console.log('yes loading found');
      return <div>Loading...</div>
   }

   //user value thakle (including null; as null is a value as well) and oi value te uid thakle children der pathiye dao ba show koro. r na thakle mane login kora nai, sekhatre, login page e pathaiye dao.
   if (user && user.uid) {
      return children;
   }
   return <Navigate to='/login' state={{ from: location }} replace ></Navigate>

};

export default PrivateRoute;