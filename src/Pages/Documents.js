import React, { useState } from 'react'
import upload from '../assets/uplaod.png';

const Documents = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
      setFile(event.target.files[0]);
  };

  const handleUpload = () => {
      setIsUploading(true);
      setTimeout(() => {
          setIsUploading(false);
          console.log("Uploaded file:", file);
      }, 2000);
      
  };  
  return (
    <div className="w-[1000px] p-4 bg-white rounded-lg">
    <div className="text-center">
        <h4 className="text-2xl font-bold mb-2">Your Salary</h4>
        <p className="text-gray-600  mx-[100px] font-medium ">Add salary components such as basic salary, HRA, LTA, and other allowances. Directly upload your Form 16 or enter manually referring to your salary slip.</p>
    </div>
    <div className="mt-12 text-center">
        <div className="border border-gray-300 p-6 rounded-lg mx-[100px] text-start flex items-center">
            <div>
                <img src={upload} className='w-[100px] h-[100px]' alt='upload' />
            </div>
            <div className='ml-6'>    
            <p className="text-xl font-semibold mb-2 ">Upload Form 16</p>
            <p className='font-medium text-gray-600  mr-10'>You can upload your Form 16 . We will read it programmatically and add your salary income.</p>
                </div>
           
        </div>
            <div className="mb-4 mt-10">
                <input
                    type="file"
                    id="form16"
                    accept=".pdf"
                    className="hidden"
                    onChange={handleFileChange}
                />
                <label htmlFor="form16" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded   cursor-pointer focus:outline-none focus:bg-blue-600">

                    
                    Choose File
                </label>
                {file && <span className="ml-2">{file.name}</span>}
            </div>
        <button
                className="bg-blue-500 mt-4 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:bg-blue-600"
                onClick={handleUpload}
                disabled={isUploading || !file}
            >
                {isUploading ? 'Uploading...' : 'Upload'}
            </button>
            {isUploading && (
                <div className="mt-4">
                    
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
                </div>
            )}
            {file && !isUploading && (
                <div className="mt-4">
                    <a
                        href={URL.createObjectURL(file)}
                        download={file.name}
                        className="text-blue-500 font-semibold hover:underline"
                    >
                        Download Uploaded File
                    </a>
                </div>
            )}
    </div>
</div>
  )
}

export default Documents