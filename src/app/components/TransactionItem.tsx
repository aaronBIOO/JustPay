import React from 'react';
import Image from 'next/image'; 

interface TransactionItemProps {
  avatarSrc: string; 
  personName: string; 
  date: string; 
  time: string; 
  amount: string; 
  isNegative: boolean; 
}

function TransactionItem({avatarSrc, personName, date, time, amount, isNegative}: TransactionItemProps) {

  const amountBgClass = isNegative ? 'bg-transaction-negative-bg' : 'bg-transaction-positive-bg'

  return (
    <div className="flex items-center w-164 p-4 rounded-lg shadow-sm bg-white mb-2 h-20"> 
      {/* Placeholder for the person's image/avatar */}
      <div className="w-10 h-10 rounded-full overflow-hidden mr-4 relative"> 
        <Image
          src={avatarSrc}
          alt={`${personName}'s avatar`}
          fill={true} // Make image fill the parent container
          sizes="40px" // Specify sizes for responsive images
          style={{ objectFit: 'cover'}} 
        />
      </div>

      {/* Container for Name and Date/Time - Use flex column */}
      <div className="flex flex-col flex-grow"> 
        {/* Placeholder for Name */}
        <p className="font-semibold text-brand-black">{personName}</p> 
        {/* Placeholder for Date and Time */}
        <p className="text-sm text-gray-500">{date}, {time}</p> 
      </div>

      {/* Placeholder for Transaction Amount */}
      <div className={`ml-4 px-3 py-1 shadow-md rounded-full flex-shrink-0 ${amountBgClass}`}> 
        <p className="font-semibold text-right text-brand-black/80">{amount}</p> 
      </div>
    </div>
  );
}

export default TransactionItem;