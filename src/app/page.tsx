import React from 'react';
import Navigation from './components/Navigation';


function Homepage() {

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Navigation />

      {/* Main content */}
      <div className='flex-1 bg-gray-100 p-4'>
        <p>Main content Area</p>
      </div>

      {/* Contact sidebar*/}
      <div className="hidden lg:block lg:w-64 bg-gray-300 p-4">
        <p>Right Contact sidebar Area</p>
      </div>
    </div>
  );
}


export default Homepage;
