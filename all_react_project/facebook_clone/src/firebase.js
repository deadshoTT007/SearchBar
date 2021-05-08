import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyAtqXyXw4_5gloU2lHma-J2CXmuFwxHkTI",
    authDomain: "facebook-clone-2f96b.firebaseapp.com",
    projectId: "facebook-clone-2f96b",
    storageBucket: "facebook-clone-2f96b.appspot.com",
    messagingSenderId: "808477840717",
    appId: "1:808477840717:web:c4b3749fd110c956631304"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore()
  const auth=firebase.auth()

const provider= new firebase.auth.GoogleAuthProvider()

export {auth,provider};
export default db;