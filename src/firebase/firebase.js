import * as firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCEhxfQfYd6LNkxmga74bFh9cEbar33NKc",
    authDomain: "chooseyourdestiny.firebaseapp.com",
    databaseURL: "https://chooseyourdestiny.firebaseio.com",
    projectId: "chooseyourdestiny",
    storageBucket: "chooseyourdestiny.appspot.com",
    messagingSenderId: "531558910019",
    appId: "1:531558910019:web:9bce9932e3b946f11dacf6",
    measurementId: "G-31RERYS5H1"
  };
  
firebase.initializeApp(firebaseConfig);
const database = firebase.database()

export {firebase, database as default}


  
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.2.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.2.2/firebase-analytics.js"></script>

// <script>

  
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>

//   firebase.initializeApp(firebaseConfig);
//   const database = firebase.database()



//   export {firebase, database as default}








