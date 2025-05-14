import React from 'react';
import WalletCard from './WalletCard'; 
import TransactionItem from './TransactionItem';

function MainContentArea() {

  return (
    <>
      <div className='flex flex-col gap-6 p-4 mb-8 pr-9'>
        {/* Placeholder for send money button*/}
        <div className="hidden flex justify-center mb-8">
          <button className="px-6 py-2 rounded-full bg-brand-lightPurple 
            text-brand-white text-sm font-semibold
          ">
            Send Money
          </button>
        </div>

        {/* Wallets section */}
        <div>
          <h2 className='text-xl font-semibold text-brand-black/70 
          mb-4 font-poppins
          '>
            Wallets
          </h2>

          {/* Placeholder for Wallet Cards */}
          <div className="flex gap-6 overflow-x-auto pb-2">
            <WalletCard walletName='Primary Wallet'/>
            <WalletCard type='new' />
          </div>
        </div>

        {/* Last Transactions Section */}
        <div className='mt-8'>
            <h2 className="text-xl font-semibold text-brand-black/70 
              mb-4 font-poppins
              ">Last Transactions
            </h2>
            {/* Placeholder for Transaction List */}
            <div className='flex flex-col gap-0.5'>
              <TransactionItem 
                avatarSrc='/images/img-ph.jpg'
                personName='Sarah'
                date="June 10"
                time="1:43 PM"
                amount="-$100.00"
                isNegative={true}
              />
              <TransactionItem 
                avatarSrc='/images/img-ph1.jpg'
                personName='John'
                date="June 9"
                time="2:30 PM"
                amount="+$50.00"
                isNegative={false}
              />
            </div>
        </div>
      </div>
    </>
  );
}

export default MainContentArea;