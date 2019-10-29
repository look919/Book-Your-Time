import * as firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyAT1bggYtZw7lYp4PUcTVo3IOLm9M0n0hg",
  authDomain: "bookyourtime-bd403.firebaseapp.com",
  databaseURL: "https://bookyourtime-bd403.firebaseio.com",
  projectId: "bookyourtime-bd403",
  storageBucket: "bookyourtime-bd403.appspot.com",
  messagingSenderId: "934837037234",
  appId: "1:934837037234:web:5b7c1047f5c96610a6c1ab",
  measurementId: "G-G0ZBEC4KHL"
};


firebase.initializeApp(firebaseConfig);

// firebase.database().ref('books').push({
//   id: 10,
//   title: 'Les Misérables',
//   releaseDate: '1862',
//   author: 'Victor Hugo',
//   description: 'Examining the nature of law and grace, the novel elaborates upon the history of France, the architecture and urban design of Paris, politics, moral philosophy, antimonarchism, justice, religion, and the types and nature of romantic and familial love. Les Misérables has been popularized through numerous adaptations for film, television and the stage, including a musical.',
//   url: 'https://en.wikipedia.org/wiki/Les_Mis%C3%A9rables#/media/File:Monsieur_Madeleine_par_Gustave_Brion.jpg'
// })


