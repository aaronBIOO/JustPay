import React from 'react';
import Navigation from './components/Navigation';


function Homepage() {

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-brand-red/38">
      <Navigation />

      {/* Main content */}
      <main className='flex-1 p-4'>
        <p>Main content Area</p>
      </main>

      {/* Contact sidebar*/}
      <div className="hidden lg:block lg:w-64 p-4">
        <p>Right Contact sidebar Area</p>
      </div>
    </div>
  );
  }

export default Homepage;
