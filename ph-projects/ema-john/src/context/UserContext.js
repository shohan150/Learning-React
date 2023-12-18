import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

//the userContext element does not directly create/provide that context. It is just an element where the tasks related to context are performed. 
//index.js e UserContext element ta apply kora hocche. Tai UserContext element er under e j j element thankbe(in this case <App />) sobai tar children. R ei children (<App/>) e pass hobe Children parameter er maddhome. Mane <App/> ekhane aslo ebong context provider er maddhome oi children e context ta provide korbe.

//here children is a props sent by react. I am destrucing that prop. For quiet a while, I have been using 'Children' instead of 'children'. And The site was blank, no error on page,no error on console. I was shocked. Then after comparing and analysing with the reference code, I found that children is not a property we name (like event or e or evt in case of click event), rather it's a predefined prop and we are destructing it. Obviously dummy, such a noob. 
const UserContext = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   }

   const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }

   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   }

   // user logged in ache kina seta puro site jananor jonno react er ei function. 
   //eta 'auth' er sathe lege thake abong auth er state kokhono change hle e ei function run korbe. Ekhon site er kono praticular event to ei function k invoke korche na. function ta invoke hbe auth change/update hle. tahole site e function ta run/active rakhar jonno etake side-effect hisebe rakha hoi. We know, side-effect does not always run. if no dependency is given, i runs once. So, that one running assigns this onAuthStateChanged() with the auth. so, whenever auth is changed, this function will run. and using return in useEffect to unmount the function after use.(This is the optional cleanup mechanism for effects. Every effect may return a function that cleans up after it. This lets us keep the logic for adding and removing subscriptions close to each other. They’re part of the same effect! When exactly does React clean up an effect? React performs the cleanup when the component unmounts. However, effects run for every render and not just once. Whenever auth changes the function runs and re-renders the UserContext component. So, the side-effect becomes active again and again that function with auth again. This is why React needs to clean up effects from the previous render before running the effects next time.)

   //ejonnoi loading state ta kaj e ase. karon user login ache naki nai seta check kore action ney ei onAuthStateChanged() function. reload marle e eta bojha jabe, karon relaod marle barbar ei function ta age check korbe login kora ache kina, r seta check kore jananor age e login page dekhai dibe to eta check korte to kichu somoy lage. seta check complete hote hote e baki code o to run hote thake. to dekha jai, shipping page theke first ei login page chole ase jodio ba login already kora ache. tar mane, login j kora ache seta detect korar age e, login nai ei condition hisebe login page dekhai dei user k. tahole simply, confirmation na pawa porjonto oi page dekhano jabe na. sejonno e loading state. ekhon loading complete na howa porjonto state true thakbe tai shipping page theke return kore dibe. checking complete hle onAuthStateChanged() abar render korbe tokhon loading er state hoye jabe false. r shipping page show korbe. 

   //Aro ekta bepar baki ache. loading jehetu false set kora hoye geche, ekhon shipping/inventory page e logout korle savabik vabe e login k dekhabe. ekhon login, signUp, CreateNew korte gele sob somoy shiping page available. tai ei function gulo run korar age barbar loading k true kore felte hobe jate shipping page k na dekhai, kaj gulo ba function gulo invoke complete hle onAuthStateChanged() o invoke hobe. tokhon abar loading false hoye jabe ebong shipping page dekha jabe. (concept not fully clear about this yet. karon ami ja bujhlam, eta emon sob situation er jonno jokhon ami login, sign up ba log out type er kaj korchi, tokhon to firebase e giye kaj ta complete hote kichu somoy lage. r shei confirmation asar e jodi samner code execute kora shuru kore dei, tokhon to wrong data show korbe. erokom ambiguity avoid korar jonno e to loading state ta create kora hoyeche. jate confirmation na asa porjonto code execute na hoi. jetar effect directly shipping page e dekha jai kintu, baki page/functionality gulo te apatoto ei site e dekha jacche na ei r ki.)
   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         console.log('current User inside state change', currentUser);
         setUser(currentUser);
         setLoading(false);
      });

      return () => unSubscribe();

   }, [])

   const authInfo = { user, loading, createUser, signIn, logOut }

   return (

      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>

   );
};

export default UserContext;