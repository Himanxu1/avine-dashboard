import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from '../UserContext'

const Dashboard = () => {
  const {isOpen,setIsOpen} = useContext(UserContext)
  const {setData} = useContext(UserContext)
  const [formData, setFormData] = useState({
    aadhar: '',
    pan: '',
    mobile: '',
    address: '',
    dob: '',
    gender: ''
});
    const navigate = useNavigate()
 

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      setData(formData)
 
      navigate('/dashboard/profile') 
  };


const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};
console.log(isOpen)
  return (
    <div>
     
      <Navbar />
      <div className='flex'>
      <Sidebar/>
      <Outlet />
      </div>
      {isOpen && (
                <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
                    <div className="fixed inset-0 bg-gray-800 opacity-75"></div>
                    <div className="relative z-20 bg-white rounded-lg shadow-lg max-w-md w-full p-6">
                        <button
                            onClick={()=>setIsOpen(false)}
                            className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-600 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <h2 className="text-2xl font-semibold mb-4">Enter Your Details</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-4">
                                
                                <div>
                                    <label htmlFor="aadhar" className="block text-gray-700 font-medium">Aadhar Number</label>
                                    <input
                                        type="text"
                                        id="aadhar"
                                        name="aadhar"
                                        value={formData.aadhar}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        placeholder="Enter your Aadhar number"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="pan" className="block text-gray-700 font-medium">PAN Number</label>
                                    <input
                                        type="text"
                                        id="pan"
                                        name="pan"
                                        value={formData.pan}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        placeholder="Enter your PAN number"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="mobile" className="block text-gray-700 font-medium">Mobile Number</label>
                                    <input
                                        type="text"
                                        id="mobile"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        placeholder="Enter your mobile number"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="address" className="block text-gray-700 font-medium">Address</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        placeholder="Enter your address"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="dob" className="block text-gray-700 font-medium">Date of Birth</label>
                                    <input
                                        type="date"
                                        id="dob"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="gender" className="block text-gray-700 font-medium">Gender</label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        required
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                               
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
     

    </div>
  )
}

export default Dashboard