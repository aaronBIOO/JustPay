import React from 'react';
import Image from 'next/image';

interface ContactItemProps {
  avatarSrc: string; 
  contactName: string;
  onSendMoneyClick?: () => void;  // Optional function to handle send money action
}

function ContactItem({ avatarSrc, contactName, onSendMoneyClick }: ContactItemProps) {
  return (
    <div className="flex items-center p-2 bg-gray-100 rounded-lg">
      <div className="w-8 h-8 rounded-full overflow-hidden mr-3 relative">
       {/* Image component */}
       {/* Use the avatarSrc prop for the src */}
       <Image 
        src={avatarSrc} 
         alt={`${contactName}'s avatar`} 
         fill={true} 
         sizes="32px" 
         style={{ objectFit: 'cover' }} 
       />
     </div>

    {/* Container for contact name */}
     <div className="flex-grow">
       {/* Name text - Added font-semibold and text color */}
       {/* Use the prop for the name */}
       <p className="font-semibold text-brand-black">{contactName}</p>
     </div>

    {/* Send money button */}
     <button className="text-sm px-3 py-1 bg-gray-200 rounded-full text-brand-black font-semibold
        cursor-pointer" onClick={onSendMoneyClick}>
       Send money
     </button>
    </div>
  );
}

export default ContactItem;