// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkSw9gHJR6Hc05wlFUfvtA2dzRP0cRBN8",
  authDomain: "netflix-react-fa57b.firebaseapp.com",
  projectId: "netflix-react-fa57b",
  storageBucket: "netflix-react-fa57b.firebasestorage.app",
  messagingSenderId: "541574184373",
  appId: "1:541574184373:web:bcba5b4d06ea8cb808edfc",
  measurementId: "G-P5JYZWCFZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();