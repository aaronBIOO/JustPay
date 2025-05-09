import React from 'react';

function WalletCard() {

  return (
    // This div will be the container for a single wallet card
    <div className="w-80 h-40 bg-gradient-to-br from-purple-400 to-purple-700 rounded-lg shadow-md p-4 text-white flex flex-col justify-between">
      {/* Content of the wallet card will go here (e.g., balance, currency, buttons) */}
      <div>
        {/* Placeholder for Total balance label */}
        <p className="text-sm">Total balance</p>
        {/* Placeholder for Balance amount */}
        <p className="text-2xl font-bold">$2,687.00</p>
      </div>
      <div className="flex justify-between items-center">
        {/* Placeholder for Wallet Name/Number or other info */}
        <p className="text-xs">My Wallet</p>
        {/* Placeholder for Refill button */}
        <button className="text-xs px-2 py-1 border border-white rounded-full">Refill wallet +</button>
      </div>
    </div>
  );
}

export default WalletCard;