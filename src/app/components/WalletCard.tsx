import React from 'react';
import { FiPlus } from 'react-icons/fi'; 

interface WalletCardProps {
  type?: 'standard' | 'new'; 
  balance?: string; 
  walletName?: string; 
}

function WalletCard({ type = 'standard', balance, walletName }: WalletCardProps) {
  // Conditional rendering: if the type is 'new', render the New Wallet card structure
  if (type === 'new') {
    return (
      // Structure and styling for the "New Wallet" card
      <div className="w-80 h-40 rounded-lg shadow-md p-4 text-white flex flex-col justify-between cursor-pointer [background-image:var(--gradient-new-wallet)]"> 
       <div className="flex flex-col items-center justify-center flex-grow">
        <FiPlus className="text-3xl mb-2 text-white" />
        <p className="text-lg font-semibold">Add new wallet</p>
       </div>
      </div>
    );
  }

  return (
    <div className="w-80 h-40 rounded-lg shadow-md p-4 text-white flex flex-col justify-between [background-image:linear-gradient(-41deg,var(--color-brand-lightPurple)_20%,var(--color-brand-darkPurple)_73%)]">
      <div>
        <p className="text-sm opacity-80">Total balance</p> {/* Added slight opacity */}
        {/* Display the balance prop, with a default if not provided */}
        <p className="text-2xl font-bold">{balance || '$0.00'}</p>
      </div>
      
      {/* Bottom section: Wallet Name and Refill button */}
      <div className="flex justify-between items-center">
        {/* Display the walletName prop, with a default if not provided */}
        <p className="text-xs opacity-80">{walletName || 'My Wallet'}</p> {/* Added slight opacity */}
        {/* Refill button */}
        <button className="text-xs px-3 py-1 bg-white text-brand-black rounded-full font-semibold cursor-pointer">Refill wallet +</button>
      </div>
    </div>
  );
}

export default WalletCard;