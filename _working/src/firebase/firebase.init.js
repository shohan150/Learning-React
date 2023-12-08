// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyA-shIXYIxh038uVqOztYozNmnXJnUH4Xs",
   authDomain: "first-firebase-project-c0d3b.firebaseapp.com",
   projectId: "first-firebase-project-c0d3b",
   storageBucket: "first-firebase-project-c0d3b.appspot.com",
   messagingSenderId: "304953438615",
   appId: "1:304953438615:web:869a27d4ed0eaa461214d2",
   measurementId: "G-9VKKQRJ6EJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;