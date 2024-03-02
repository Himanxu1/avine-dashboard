import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../UserContext'

const Profile = () => {
  const {setIsOpen} = useContext(UserContext)
 
  useEffect(()=>{
    setIsOpen(false)
  })
  const {user,data} = useContext(UserContext)
   console.log(data)
  return (
    <div>
        <div className="flex justify-center p-4 ml-20">
            <div className="w-[800px] p-4  justify-center   bg-white shadow-lg rounded-lg">
                <div className="p-4">
                    <div className="mb-2">
                        <h2 className="text-2xl font-bold mb-2">Your Personal Details</h2>
                        <p className="text-gray-600">Basic info, that you can use on XYZ</p>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="flex flex-col">
                                <span className="text-gray-700 font-semibold">Name</span>
                                <span className="text-gray-600">{user?.displayName}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-700 font-semibold">PAN</span>
                                <span className="text-gray-600">{data.pan}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-700 font-semibold">Aadhar</span>
                                <span className="text-gray-600">{data.aadhar}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-700 font-semibold">Status</span>
                                <span className="text-gray-600">Resident</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-700 font-semibold">Date of Birth</span>
                                <span className="text-gray-600">{data.dob}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-700 font-semibold">Gender</span>
                                <span className="text-gray-600">{data.gender}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Address & Contact</h2>
                        <p className="text-gray-600">Let's gather up to date contact details here</p>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="flex flex-col">
                                <span className="text-gray-700 font-semibold">Address</span>
                                <span className="text-gray-600 italic">{data.address}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-700 font-semibold">Mobile</span>
                                <span className="text-gray-600 italic">{data.mobile}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-700 font-semibold">Email</span>
                                <span className="text-gray-600 italic">{user?.email}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
     </div>
  )
}

export default Profile