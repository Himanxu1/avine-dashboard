import { initializeApp } from 'firebase/app';
import {getAuth}  from 'firebase/auth'
  
const firebaseConfig = { 
    
    apiKey: "AIzaSyCV6JLuvHG8NaHjw0lBdmsMe9wCM8WdYsA",
    authDomain: "avine-68492.firebaseapp.com",
    projectId: "avine-68492",
    storageBucket: "avine-68492.appspot.com",
    messagingSenderId: "1031821909856",
    appId: "1:1031821909856:web:2ee576bb7db6a64c128805"

}; 
  
const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app)
