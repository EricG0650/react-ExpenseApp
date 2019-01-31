import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyD3kCwatT_-52SyAMdbOT6tD4l-_Hp4dx8",
    authDomain: "expensify-5d08c.firebaseapp.com",
    databaseURL: "https://expensify-5d08c.firebaseio.com",
    projectId: "expensify-5d08c",
    storageBucket: "expensify-5d08c.appspot.com",
    messagingSenderId: "385790957071"
  };
  firebase.initializeApp(config);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase,googleAuthProvider, database as default };