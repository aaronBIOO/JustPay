import React from 'react';
import Link from 'next/link';

function Navigation() {
    const navLinks = [
        {name: 'Home', href: '/'},
        {name: 'History', href: '/history'},
        {name: 'Contacts', href: '/contacts'},
        {name: 'Settings', href: '/settings'}
    ];

    return (
        <div>
            {/* --- Mobile Bottom Navigation Bar --- */}
            <div className="fixed bottom-0 left-0 right-0 h-16 bg-blue-600 flex justify-around items-center md:hidden z-50 ">
                {navLinks.map((link) => (
                    // Use Next.js Link component for client-side navigation
                    <Link href={link.href} key={link.name}>
                        <div className="flex flex-col items-center text-white text-xs shadow-button-normal/15 p-2 rounded
                            hover:shadow-button-hover/25 

                            active:bg-nav-button-bg-active active:text-brand-darkPurple active:shadow-button-activeFocused/25  

                            focus:bg-nav-button-bg-normal focus:text-brand-darkPurple focus:shadow-button-activeFocused/25
                            focus:border-brand-darkPurple focus:border
                            border border-transparent
                             ">
                            {/* Placeholder for icons */}
                            {/* <Icon /> */}
                            <span>{link.name}</span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* --- Tablet & Desktop Sidebar Navigation --- */}
            <div className='hidden md:flex md:flex-col md:w-64 md:h-screen bg-blue-500 text-white p-4'>
                {/* Sidebar content goes here */}
                <div className="mb-8"> {/* Optional: Space for logo or app title */}
                    <h1 className="text-2xl font-bold">JustPay</h1>
                </div>

                {navLinks.map((link) => (
                    <Link href={link.href} key={link.name}>
                        <div className="flex items-center py-2 px-4 rounded hover:bg-blue-700
                            hover:shadow-button-hover/25

                            active:bg-nav-button-bg-active active:text-brand-darkPurple active:shadow-button-activeFocused/25
                            
                            focus:bg-nav-button-bg-normal focus:text-brand-darkPurple focus:shadow-button-activeFocused/25
                            focus:border-brand-darkPurple focus:border
                            border border-transparent
                            ">
                            {/* Placeholder for icons later */}
                            {/* <Icon /> */}
                            <span className="ml-2 text-lg">{link.name}</span> {/* Link text */}
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
}

export default Navigation;