import './App.css';
// import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from './firebase/firebase.init';


const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log('Error: ', error);
      })
  }

  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}><h3>Google sign in</h3></button>
    </div>
  );
}

export default App;
