import React from 'react';
import Image from 'next/image';

interface ContactItemProps {
  avatarSrc: string; 
  contactName: string;
  onSendMoneyClick?: () => void;  // Optional function to handle send money action
}

function ContactItem({ avatarSrc, contactName, onSendMoneyClick }: ContactItemProps) {
  return (
    <div className="flex items-center p-2 bg-white rounded-lg">
      <div className="w-10 h-10 rounded-full overflow-hidden mr-3 relative">
       {/* Image component */}
       {/* Use the avatarSrc prop for the src */}
       <Image 
        src={avatarSrc} 
         alt={`${contactName}'s avatar`} 
         fill={true} 
         sizes="40px" 
         style={{ objectFit: 'cover' }} 
       />
     </div>

    {/* Container for contact name */}
     <div className="flex-grow">
       {/* Name text - Added font-semibold and text color */}
       {/* Use the prop for the name */}
       <p className="font-semibold text-brand-black/70">{contactName}</p>
     </div>

    {/* Send money button */}
     <button className="text-sm px-3 py-2 bg-button-bg-normal rounded-full 
        text-brand-black/80 
        cursor-pointer shadow-sm 
        hover:shadow-md hover:bg-gray-200 
        transition duration-200 ease-in-out font-poppins
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-darkPurple focus-visible:ring-opacity-50
        active:bg-button-bg-active active:text-brand-darkPurple
        active:outline-none active:ring-0" 
        onClick={onSendMoneyClick}
      >
       Send money
      </button>
    </div>
  );
}

export default ContactItem;