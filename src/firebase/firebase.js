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
const database = firebase.database()

export {firebase, database}









firebase.database().ref('books').push({
  id: 20,
  title: 'War and Peace',
  releaseDate: '1865',
  author: 'Leo Tolstoy',
  description: 'The novel chronicles the French invasion of Russia and the impact of the Napoleonic era on Tsarist society through the stories of five Russian aristocratic families. Portions of an earlier version, titled The Year 1805, were serialized in The Russian Messenger from 1865 to 1867, then published in its entirety in 1869.',
  url: 'https://firebasestorage.googleapis.com/v0/b/bookyourtime-bd403.appspot.com/o/WarAndPeace.jpg?alt=media&token=096e8b9c-9936-4a9c-94c2-de3e3c94b873'
})


