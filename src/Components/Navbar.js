import React, { useContext } from 'react'
import { FaHome } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { AiFillFilePpt } from "react-icons/ai";
import { AiFillFileText } from "react-icons/ai";
import { UserContext } from '../UserContext';


const Navbar = () => {
   const {user} = useContext(UserContext)

  return (
    <div className='flex w-full justify-between px-10 p-4 border-b border-gray-300 '>

        <h1 className='text-2xl text-blue-300mm'>Avine</h1>

        <ul className='flex justify-between w-[400px] text-xl'>
            <li className='flex items-center cursor-pointer'> <i className='mr-2'><FaHome /> </i> Home</li>
            <li className='flex items-center cursor-pointer'> <i  className='mr-2'><AiFillFilePpt/></i> Planning</li>
            <li className='flex items-center cursor-pointer'><i  className='mr-2'><AiFillFileText/></i> Filing</li>
        </ul>

        <div className='flex items-center'>
            <p className='text-blue-500 mr-2'>{user?.displayName}</p>
            <i className='text-3xl' >
            <RxAvatar />
            </i>
        </div>

    </div>
  )
}

export default Navbar