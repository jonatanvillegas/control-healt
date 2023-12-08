// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyD52bAUQJYdbz_ffRs4BQLi3Rx7dzm0Kqo',
  authDomain: 'controlhealth-3d261.firebaseapp.com',
  projectId: 'controlhealth-3d261',
  storageBucket: 'controlhealth-3d261.appspot.com',
  messagingSenderId: '104560470287',
  appId: '1:104560470287:web:5401d53ca731f6dca2767a',
  measurementId: 'G-K2W53ER2JK',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { auth, db, storage }
