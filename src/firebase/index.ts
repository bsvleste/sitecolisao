import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyAOJpl70cjkrgYiq6QbH5ZeL0GaBwA_CG0',
  authDomain: 'bd-colisao.firebaseapp.com',
  projectId: 'bd-colisao',
  storageBucket: 'bd-colisao.appspot.com',
  messagingSenderId: '499641752060',
  appId: '1:499641752060:web:6472d7e3799d8505d17a79',
  measurementId: 'G-8FMK6GG4C2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export default getFirestore()
