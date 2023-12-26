// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAeM63tEzNTKkfTXKmpeGk1U4fftVC18yI",
   authDomain: "dragon-news-5a740.firebaseapp.com",
   projectId: "dragon-news-5a740",
   storageBucket: "dragon-news-5a740.appspot.com",
   messagingSenderId: "78227261606",
   appId: "1:78227261606:web:33c1160d5855c5ec4e4c67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;