import React from 'react';

function Navigation() {

    return (
        <div>
            <div className="fixed bottom-0 left-0 right-0 h-16 bg-blue-600 flex justify-around items-center md:hidden z-50 ">
                {/* placeholder for navigation links/icons */}
                <p className="text-white">Mobile Navigation content here</p>
            </div>

            <div className='hidden md:flex md:flex-col md:w-64 md:h-screen bg-blue-500 yexy-white p-4'>
                {/* placeholder for navigation links/icons */}
                <p>Sidebar Navigation content</p>
            </div>
        </div>
    );
}


export default Navigation;