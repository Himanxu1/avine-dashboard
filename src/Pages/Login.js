import React, { useContext } from 'react'
import {signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import {auth } from './firebase'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../UserContext'
import login from '../assets/log-in.png'


const Login = () => {
    const navigate = useNavigate()
    const {setUser}  = useContext(UserContext)
 
    const signin = () => { 
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((res)=>{
            console.log(res)
            setUser(res.user)
            navigate('/app')
        }).catch((err)=>{
            console.log(err)
        })
    } 


  return (
    <div className='flex justify-center items-center mt-[100px]'>
        <img src={login} className='w-[500px] h-[500px]' alt='profile' />
        <div className='text-center'>
        <p className='text-4xl font-bold text-blue-400'>Welcome to Avine</p>
        <button className='p-2 border-2 border-blue-400 mt-8 text-lg px-10 font-bold hover:bg-blue-400 hover:text-white ' onClick={signin}>Sign In with Google</button>
        </div>
    </div>
  )
}

export default Login