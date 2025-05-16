"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiClock, FiUsers, FiSettings } from 'react-icons/fi';

function Navigation() {
  const navLinks = [
    {name: 'Home', href: '/', icon: <FiHome />},
    {name: 'History', href: '/history', icon: <FiClock />},
    {name: 'Contacts', href: '/contacts', icon: <FiUsers />},
    {name: 'Settings', href: '/settings', icon: <FiSettings />}
  ];

  const pathname = usePathname();

  return (
      <>
      {/* --- Mobile Bottom Navigation Bar --- */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-brand-white shadow-va-bar/20 
          flex justify-around items-center md:hidden z-50 
          ">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
            // Use Next.js Link component for client-side navigation
            <Link href={link.href} key={link.name}>
                <div className={`flex flex-col items-center text-xs p-2 rounded 
                    border border-transparent
                    ${isActive ? 'bg-nav-button-bg-active text-brand-darkPurple shadow-button-activeFocused/25' 
                    : 'bg-button-bg-normal text-brand-black/80 shadow-sm'}
                    hover:shadow-md hover:bg-gray-300
                    active:bg-nav-button-bg-active active:text-brand-darkPurple 
                    active:shadow-button-activeFocused/25
                    gap-1
                    `}>
                    {link.icon}
                    <span>{link.name}</span>
                </div>
            </Link>
            );
          })}
      </div>

      {/* --- Tablet & Desktop Sidebar Navigation --- */}
      <div className='hidden md:flex md:flex-col md:w-50 md:h-[100vh] 
          bg-brand-white shadow-nav-bar/20 
          text-brand-black p-4 items-center rounded-xl mt-auto
          '>
              {/* Sidebar content goes here */}
              <div className="mb-8"> {/* Optional: Space for logo or app title */}
                  <h1 className="text-2xl font-bold text-brand-darkPurple">JustPay</h1>
              </div>

          <div className="flex flex-col items-center">
            {navLinks.map((link) => {
            const isActive = pathname === link.href;
              return (
                <Link href={link.href} key={link.name} className={`inline-block focus:outline-none group`}>
                  {/* Ensure this div has ALL the styling classes including state variants and spacing */}
                  <div className={`flex items-center rounded-full border border-transparent 
                      w-30 mx-auto justify-center mb-4
                      ${isActive ? 'bg-button-bg-active text-brand-darkPurple shadow-button-activeFocused/25' 
                      : 'bg-button-bg-normal text-brand-black/80 shadow-sm'}
                      hover:shadow-md hover:bg-gray-200
                      active:bg-button-bg-active active:text-brand-darkPurple 
                      active:shadow-button-activeFocused/25
                      transition duration-200 ease-in-out
                      gap-2 px-3 py-2
                      focus-ring-only no-ring-on-active                                                           
                  `}>
                      {link.icon}
                      <span className="text-md font-poppins">{link.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>
      </div>
      </> 
  );
}

export default Navigation;
