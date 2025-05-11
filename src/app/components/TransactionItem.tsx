import React from 'react';


function TransactionItem() {
  return (
    // Container for a single transaction item - Use flex to arrange content horizontally
    <div className="flex items-center p-4 rounded-lg shadow-sm bg-white mb-2"> {/* Added padding, rounded corners, shadow, white background, margin bottom */}
      {/* Placeholder for the person's image/avatar */}
      <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden mr-4"> {/* Placeholder div for image */}
        {/* You would place a Next.js Image component here later, like: */}
        {/* <Image src="/path-to-avatar.jpg" alt="Avatar" width={40} height={40} objectFit="cover" /> */}
      </div>

      {/* Container for Name and Date/Time - Use flex column */}
      <div className="flex flex-col flex-grow"> {/* flex-grow makes this section take available space */}
        {/* Placeholder for Name */}
        <p className="font-semibold text-brand-black">Person Name</p> {/* Added basic text style */}
        {/* Placeholder for Date and Time */}
        <p className="text-sm text-gray-500">Date, Time</p> {/* Added basic text style */}
      </div>

      {/* Placeholder for Transaction Amount */}
      <div className="ml-4"> {/* Add margin left to space from name/date */}
        <p className="font-semibold text-right text-brand-black">- $0.00</p> {/* Added basic text style and alignment */}
      </div>
    </div>
  );
}

export default TransactionItem;