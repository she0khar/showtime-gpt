// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQThr6avv81cQ0mJQEG4F-5YeChGd3u34",
  authDomain: "shotime-gpt.firebaseapp.com",
  projectId: "shotime-gpt",
  storageBucket: "shotime-gpt.appspot.com",
  messagingSenderId: "787429752402",
  appId: "1:787429752402:web:c89036121c65597338298b",
  measurementId: "G-RW9JCZDPJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();