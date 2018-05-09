import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAN_lyLPLHfm5zrxnZL_XQ48CXpi6jtFnA",
  authDomain: "chat-6057d.firebaseapp.com",
  databaseURL: "https://chat-6057d.firebaseio.com",
  projectId: "chat-6057d",
  storageBucket: "chat-6057d.appspot.com",
  messagingSenderId: "252668219424"
};
  
const firebaseApp = firebase.initializeApp(config);

firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()