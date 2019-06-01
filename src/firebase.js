import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyAPaVezvAe8hk4k_pdpoE26VS0P_SL6r4Q",
    authDomain: "kickers-121c8.firebaseapp.com",
    databaseURL: "https://kickers-121c8.firebaseio.com",
    projectId: "kickers-121c8",
    storageBucket: "kickers-121c8.appspot.com",
    messagingSenderId: "60811767839",
    appId: "1:60811767839:web:4f0bbf7814d4b6fd"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  const firebaseDatabase = firebase.database();
  const firebaseMatches = firebaseDatabase.ref('matches');
  const firebasePromotions = firebaseDatabase.ref('promotions');
  const firebaseTeams = firebaseDatabase.ref('teams');
  const firebasePlayers = firebaseDatabase.ref('players');

  export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDatabase
  }