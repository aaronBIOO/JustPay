import React from 'react';
import Navigation from './components/Navigation';


function Homepage() {

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-brand-lightGrey pt-16 pb-4 px-4">
      <Navigation />

      {/* Main content area: Wallet and Last Transactions */}
      <main className='flex-1 flex flex-col gap-6 p-4 ml-6'>

        {/* Placeholder for send money button*/}
        <div>
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
      </main>

      {/* Contact sidebar*/}
      <div className="hidden lg:block lg:w-64 p-4">
        <p>Right Contact sidebar Area</p>
      </div>
    </div>
  );
}

export default Homepage;
