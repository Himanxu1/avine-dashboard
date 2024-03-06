import { initializeApp } from 'firebase/app';
import {getAuth}  from 'firebase/auth'
  
const firebaseConfig = { 
    
  apiKey: "AIzaSyA6rIYRuAZY8_ez71pPFPb84294NOumC_U",
  authDomain: "avine-eeffd.firebaseapp.com",
  projectId: "avine-eeffd",
  storageBucket: "avine-eeffd.appspot.com",
  messagingSenderId: "125952676678",
  appId: "1:125952676678:web:6bb2fef234025a61f5cb47",
  measurementId: "G-54HTRESC38"

}; 
  
const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app)
