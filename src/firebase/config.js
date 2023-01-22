// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCXK_qC1s4QRaLiaaI68CQ9xE8HgAmOeM4',
  authDomain: 'walkie-2.firebaseapp.com',
  projectId: 'walkie-2',
  storageBucket: 'walkie-2.appspot.com',
  messagingSenderId: '224761158428',
  appId: '1:224761158428:web:e023404c1f08e7c6ba78d9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { firebase };
