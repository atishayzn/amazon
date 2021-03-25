import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUv3iqc-LTK9bXDbV26vYlRG2t6gMypkw",
    authDomain: "fir-f37b9.firebaseapp.com",
    databaseURL: "https://fir-f37b9.firebaseio.com",
    projectId: "fir-f37b9",
    storageBucket: "fir-f37b9.appspot.com",
    messagingSenderId: "822509482416",
    appId: "1:822509482416:web:f106d55a80dac7b935e675",
    measurementId: "G-4KFGMMNJGL"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {
    db,auth};