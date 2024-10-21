// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1XGWi0ED5hqIGFFDDwdpbnEHAubQooCk",
  authDomain: "my-food-business.firebaseapp.com",
  projectId: "my-food-business",
  storageBucket: "my-food-business.appspot.com",
  messagingSenderId: "178087861674",
  appId: "1:178087861674:web:e22664745492ca57e75fd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;