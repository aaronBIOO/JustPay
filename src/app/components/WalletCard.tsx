import React from 'react';
import { FiPlus } from 'react-icons/fi'; // Importing the plus icon from react-icons

interface WalletCardProps {
  // Define any props you want to pass to the WalletCard component
  type?: 'standard' | 'new'; // Optional prop to determine the type of wallet card
  balance?: string; // Optional prop for the balance amount
  walletName?: string; // Optional prop for the wallet name
}


function WalletCard({ type = 'standard', balance, walletName }: WalletCardProps) {

  // Conditional rendering: if the type is 'new', render the New Wallet card structure
  if (type === 'new') {
    return (
      // Structure and styling for the "New Wallet" card
      <div className="w-80 h-40 bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-center text-brand-black cursor-pointer border border-dashed border-gray-300"> {/* Use a light grey background and dashed border */}
        {/* Plus icon */}
        <FiPlus className="text-3xl mb-2 text-gray-500" /> {/* Style the icon */}
        {/* Text label */}
        <p className="text-lg font-semibold">New Wallet</p>
      </div>
    );
  }


  // If the type is not 'new' (i.e., 'standard'), render the regular wallet card structure
  return (
    // Structure and styling for a standard wallet card
    // Using a placeholder gradient for now - we'll define brand gradients later
    <div className="w-80 h-40 bg-gradient-to-br from-purple-400 to-purple-700 rounded-lg shadow-md p-4 text-white flex flex-col justify-between">
      {/* Top section: Balance */}
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
        <button className="text-xs px-2 py-0.5 border border-white border-opacity-50 rounded-full opacity-90 hover:opacity-100 transition-opacity">Refill wallet +</button> {/* Refined button styling */}
      </div>
    </div>
  );
}

export default WalletCard;