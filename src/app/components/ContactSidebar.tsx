import React from 'react';

function ContactSidebar() {
  return (
    <div className="w-64 bg-white rounded-lg p-4 shadow-md"> {/* Added basic styling: width, background, rounded corners, padding, shadow */}
    {/* "Contacts" Heading */}
     {/* Added text size, weight, color, and bottom margin */}
     <h2 className="text-xl font-semibold text-brand-black mb-4">Contacts</h2>

     {/* Container for the list of individual Contact Items */}
     {/* Use flex column to stack items with a gap */}
     <div className="flex flex-col gap-2">
       {/* Individual ContactItem components will go here later */}
       {/* Example: <ContactItem /> */}
     </div>
   </div>
  );
}

export default ContactSidebar;