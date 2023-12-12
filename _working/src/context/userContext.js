import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

//the userContext element does not directly create/provide that context. It is just an element where the tasks related to context are performed. 
//index.js e UserContext element ta apply kora hocche. Tai UserContext element er under e j j element thankbe(in this case <App />) sobai tar children. R ei children (<App/>) e pass hobe Children parameter er maddhome. Mane <App/> ekhane aslo ebong context provider er maddhome oi children e context ta provide korbe.

//here children is a props sent by react. I am destrucing that prop. For quiet a while, I have been using 'Children' instead of 'children'. And The site was blank, no error on page,no eeor on console. I was shocked. Then after comparing and analysing with the reference code, I found that children is not a property we name (like event or e or evt in case of click event), rather it's a predefined prop and we are destructing it. Obviously dummy, I am such a noob. 
const UserContext = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      //setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   }

   const signIn = (email, password) => {
      //setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }

   const logOut = () => {
      //      setLoading(true);
      return signOut(auth);
   }

   // useEffect(() => {
   //    const unSubscribe = onAuthStateChanged(auth, currentUser => {
   //       console.log('current User inside state change', currentUser);
   //       setUser(currentUser);
   //       setLoading(false);
   //    });

   //    return () => unSubscribe();

   // }, [])

   const authInfo = { user, loading, createUser, signIn, logOut }

   return (

      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>

   );
};

export default UserContext;