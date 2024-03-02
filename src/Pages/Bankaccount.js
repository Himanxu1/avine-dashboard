import React from 'react'

const BankAccount = () => {
  return (
    <div className=" w-[900px] p-4 mt-4">
    <div id="bankAccounts">
        <div className='text-center'>
            <h6 className="text-xl font-semibold">Your Bank Accounts</h6>
            <p className="text-gray-600 mx-[100px] mt-2">Seems like you have not added your primary bank account yet. Please add your bank account so that we can process tax refund.</p>
        </div>

        <div id="addBankAccBox" className="border rounded-lg border-gray-300 mt-8 mx-[100px]">
            <ul>
                <li className="border-t border-gray-300">
                    <h5 className="text-lg font-semibold py-4 px-6">Add your bank account</h5>
                    <p className="text-gray-600 px-6 pb-4">Add your bank account so that we can process your Tax refund</p>
                </li>
                <li className="border-t border-gray-300 py-4 px-6 text-blue-500">DOMESTIC BANK ACCOUNT</li>
                <li className="border-t border-gray-300 py-4 px-6 text-blue-500">FOREIGN ACCOUNT</li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default BankAccount