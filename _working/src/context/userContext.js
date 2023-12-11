import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

//the userContext element does not directly create/provide that context. It is just an element where the tasks related to context are performed. 
//index.js e UserContext element ta apply kora hocche. Tai UserContext element er under e j j element thankbe(in this case <App />) sobai tar children. R ei children (<App/>) e pass hobe Children parameter er maddhome. Mane <App/> ekhane aslo ebong context provider er maddhome oi children e context ta provide korbe.

const UserContext = ({ Children }) => {
   const [user, setUser] = useState(null);

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   }

   const authInfo = { user, createUser };

   return (

      <AuthContext.Provider value={authInfo}>
         {Children}
      </AuthContext.Provider>

   );
};

export default UserContext;