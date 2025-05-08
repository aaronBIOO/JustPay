import React from 'react';
import Navigation from './components/Navigation';
import MainContentArea from './components/MainContentArea';


function Homepage() {

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-brand-lightGrey pt-16 pb-4 px-4">
      <Navigation />

      {/* Main content area: Wallet and Last Transactions */}
      <main className='flex-1 p-4 ml-6'>
      <MainContentArea />
      </main>

      {/* Contact sidebar */}
      <div className="hidden lg:block lg:w-64 p-4">
        <p>Third</p>
      </div>
    </div>
  );
}

export default Homepage;
