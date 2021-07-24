import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDrTur3QthaujCJvQqXbjHWLYgWqizn__Q",
  authDomain: "your-doctor-b832a.firebaseapp.com",
  databaseURL: "https://your-doctor-b832a.firebaseio.com",
  projectId: "your-doctor-b832a",
  storageBucket: "your-doctor-b832a.appspot.com",
  messagingSenderId: "430616476681",
  appId: "1:430616476681:web:b1a01ea149f6d79fd2ccd8",
  measurementId: "G-P42E34W4K7",
});

export const auth = app.auth();
export default app;
