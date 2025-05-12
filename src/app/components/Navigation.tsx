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
                        <div className={`flex flex-col items-center text-xs p-2 rounded border border-transparent
                            ${isActive ? 'bg-nav-button-bg-active text-brand-darkPurple shadow-button-activeFocused/25' 
                            : 'bg-nav-button-bg-normal text-brand-black shadow-button-normal/15'}
                            hover:shadow-button-hover/25
                            active:bg-nav-button-bg-active active:text-brand-darkPurple active:shadow-button-activeFocused/25
                            focus:bg-nav-button-bg-normal focus:text-brand-darkPurple focus:shadow-button-activeFocused/25
                            focus:border-brand-darkPurple focus:border
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
            <div className='hidden md:flex md:flex-col md:w-50 md:h-[100vh] bg-brand-white shadow-nav-bar/20 
                text-brand-black p-4 items-center rounded-xl mt-auto
                '>
                    {/* Sidebar content goes here */}
                    <div className="mb-8"> {/* Optional: Space for logo or app title */}
                        <h1 className="text-2xl font-bold text-brand-darkPurple">JustPay</h1>
                    </div>

                    {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link href={link.href} key={link.name}>
                    {/* Ensure this div has ALL the styling classes including state variants and spacing */}
                        <div className={`flex items-center py-2 rounded-full my-1 border border-transparent
                                ${isActive ? 'bg-nav-button-bg-active text-brand-darkPurple shadow-button-activeFocused/25' 
                                : 'bg-nav-button-bg-normal text-brand-black shadow-button-normal/15'}
                                hover:shadow-button-hover/25
                                active:bg-nav-button-bg-active active:text-brand-darkPurple active:shadow-button-activeFocused/25
                                focus:bg-nav-button-bg-normal focus:text-brand-darkPurple focus:shadow-button-activeFocused/25
                                focus:border-brand-darkPurple focus:border
                                gap-2 px-6 max-w-fit max-auto                             
                                `}>
                            {link.icon}
                            <span className="text-lg">{link.name}</span>
                        </div>
                    </Link>
                    );
                })}
           </div>
        </> 
    );
}

export default Navigation;