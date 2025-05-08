import React from 'react';

function MainContentArea() {

  return (
    <>
      <div className='flex flex-col gap-6 p-4 mb-8'>
        {/* Placeholder for send money button*/}
        <div className="flex justify-center mb-8">
          <button className="px-6 py-2 rounded-full bg-brand-lightPurple text-brand-white text-sm font-semibold">Send Money</button>
        </div>

        {/* Wallets section */}
        <div>
          <h2 className='text-xl font-semibold text-brand-black mb-4'>Wallets</h2>

          {/* Placeholder for Wallet Cards */}
          <div className="flex gap-4 overflow-x-auto pb-2">
            <div className="flex-none w-64 h-40 bg-gray-300 rounded-lg"></div>
            <div className="flex-none w-64 h-40 bg-gray-300 rounded-lg"></div>
          </div>
        </div>

        {/* Last Transactions Section */}
        <div>
            <h2 className="text-xl font-semibold text-brand-black mb-4">Last Transactions</h2>
            {/* Placeholder for Transaction List */}
          <div className="flex flex-col gap-3">
            <div className="bg-gray-200 p-3 rounded-lg h-16 w-160">Transaction Item Placeholder</div>
            <div className="bg-gray-200 p-3 rounded-lg h-16 w-160">Transaction Item Placeholder</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContentArea;