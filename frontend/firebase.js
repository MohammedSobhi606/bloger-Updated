// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDp4R0RdG0mNCaKkVbMR38-E52FazvZwOo",
    authDomain: "mern-blog-a451d.firebaseapp.com",
    projectId: "mern-blog-a451d",
    storageBucket: "mern-blog-a451d.appspot.com",
    messagingSenderId: "662609291571",
    appId: "1:662609291571:web:35c7bc690b57c0930fb646",
    measurementId: "G-2JNQCJB744"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);