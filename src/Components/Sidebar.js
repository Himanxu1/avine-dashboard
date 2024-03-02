import React, { useContext } from 'react'
import { FaUser } from "react-icons/fa";
import { GiPowerLightning } from "react-icons/gi";
import { MdAddToHomeScreen } from "react-icons/md";
import { DiCodeigniter } from "react-icons/di";
import userImage from '../assets/gamer.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';


const Sidebar = () => {
  const {user} = useContext(UserContext)
 

   
  
  
  return (
    <div className='w-64 h-[575px] bg-blue-100 '>
        <div className='p-10 pt-20'>
            <img src={user ? user.photoURL : userImage} className='w-28 h-28 m-auto rounded-full' alt='avatar' />
            <p className='font-bold text-center'>Himanshu Singh</p>
            <p className='text-center'>NUAPS6483L</p>
        </div>
        <ul className='mt-10'>
            <Link to='/dashboard/profile'>
            <li className=' justify-between flex items-center text-lg mx-4 my-2 px-10 py-2  cursor-pointer hover:bg-white hover:rounded w-[90%] font-semibold'> Profile<i className='mr-2'><FaUser/></i> </li>
            </Link>
            <Link to='/dashboard/bankaccount'> 
            <li className=' justify-between flex items-center text-lg mx-4 my-2 px-10 py-2  cursor-pointer hover:bg-white hover:rounded w-[90%] font-semibold'>Bank Account<i className='mr-2'><GiPowerLightning /></i> </li>
            </Link>
            <Link to='/dashboard/taxreturn'>
            <li className=' justify-between flex items-center text-lg mx-4 my-2 px-10 py-2  cursor-pointer hover:bg-white hover:rounded w-[90%] font-semibold'>Tax Return<i className='mr-2'> <MdAddToHomeScreen /></i> </li>
            </Link>
            <Link to='/dashboard/documents'>
            <li className=' justify-between flex items-center text-lg  my-2 mx-4 px-10 py-2  cursor-pointer hover:bg-white hover:rounded w-[90%] font-semibold'>Documents<i className='mr-2'> <DiCodeigniter /></i>  </li>
            </Link>
        </ul>
        
    </div>
  )
}

export default Sidebar