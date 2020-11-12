import firebase from "firebase/app"
require("firebase/auth")
require("firebase/firestore")
require("firebase/storage")
require("firebase/functions")

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBhXF-CJbT1S6bmmtROo3rMqAeJmCYO_3U",
  authDomain: "message-d4f7b.firebaseapp.com",
  databaseURL: "https://message-d4f7b.firebaseio.com",
  projectId: "message-d4f7b",
  storageBucket: "message-d4f7b.appspot.com",
  messagingSenderId: "258001514907",
  appId: "1:258001514907:web:871d6b916f4b952398313e"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const functions = firebase.functions()

export { firebase, auth, db, storage, functions }
