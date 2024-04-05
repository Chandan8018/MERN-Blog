// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "thingbig-blog.firebaseapp.com",
  projectId: "thingbig-blog",
  storageBucket: "gs://thingbig-blog.appspot.com",
  messagingSenderId: "521650931712",
  appId: "1:521650931712:web:1e3a24c064ee4a45f4b0e5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
