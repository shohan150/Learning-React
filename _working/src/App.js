import './App.css';
import React, { useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from './firebase/firebase.init';


const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // console.log(user);
      })
      .catch(error => {
        console.log('Error: ', error);
      })
  }
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        console.log('Sign-out successful');
      })
      .catch(error => {
        setUser({});
        console.log('Error: ', error);
      })
  }

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.log('Error: ', error);
      })
  }

  return (
    <div className="App">
      {
        user.uid ?
          <button onClick={handleGoogleSignOut}><h3>sign out</h3></button>
          :
          <>
            <button onClick={handleGoogleSignIn}><h3>Google sign in</h3></button>
            <button onClick={handleGitHubSignIn}><h3>GitHub sign in</h3></button>
          </>
      }
      {

        user.uid && <div>
          <h3>User name : {user.displayName}</h3>
          <p>Email Address : {user.email}</p>
        </div>
      }
    </div>
  );
}

export default App;
