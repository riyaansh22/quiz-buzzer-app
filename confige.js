import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD_6McZSVEQFoFPl675nFGZ17GrakMkPK0",
    authDomain: "quiz-buzzer-app-2b216.firebaseapp.com",
    databaseURL: "https://quiz-buzzer-app-2b216-default-rtdb.firebaseio.com",
    projectId: "quiz-buzzer-app-2b216",
    storageBucket: "quiz-buzzer-app-2b216.appspot.com",
    messagingSenderId: "332502197633",
    appId: "1:332502197633:web:fea3eed38a86978972b480",
    measurementId: "G-KP1HNEGB61"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database()
