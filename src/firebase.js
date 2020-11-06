import firebase from "firebase/app"
require("firebase/auth")
require("firebase/firestore")
require("firebase/storage")
require("firebase/functions")

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDVGlP79MrLr9Umi9l2x-AkIWmtjGEehPs",
  authDomain: "hostel-booking-d534e.firebaseapp.com",
  databaseURL: "https://hostel-booking-d534e.firebaseio.com",
  projectId: "hostel-booking-d534e",
  storageBucket: "hostel-booking-d534e.appspot.com",
  messagingSenderId: "149872969111",
  appId: "1:149872969111:web:6885244196ca05d8ed70d2"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const functions = firebase.functions()

export { firebase, auth, db, storage, functions }
