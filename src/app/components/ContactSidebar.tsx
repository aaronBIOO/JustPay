import React from 'react';
import ContactItem from './ContactItem'; // Importing the ContactItem component

function ContactSidebar() {

  const contactsData = [
    { avatarSrc: "/images/img-ph2.jpg", contactName: "Chris" },
    { avatarSrc: "/images/img-ph.jpg", contactName: "Sarah" },
    { avatarSrc: "/images/img-ph1.jpg", contactName: "John" },
    { avatarSrc: "/images/img-ph2.jpg", contactName: "Mark" },
    { avatarSrc: "/images/img-ph.jpg", contactName: "Dorah" },
    { avatarSrc: "/images/img-ph1.jpg", contactName: "Christy" },
  ];

  return (
    <div className="w-64 bg-white rounded-lg p-4 shadow-md hidden lg:block">
     <h2 className="text-xl font-semibold text-brand-black mb-4">Contacts</h2>

     <div className="flex flex-col gap-2">
       {contactsData.map((contact, index) => (
        <ContactItem
          key={index} // Using index as key for now, replace with unique ID if available
          avatarSrc={contact.avatarSrc}
          contactName={contact.contactName}
        />
       ))}
     </div>
   </div>
  );
}

export default ContactSidebar;