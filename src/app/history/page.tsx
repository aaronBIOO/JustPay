"use client";

import React from 'react';
import HistoryContent from '../components/HistoryContent';

function HistoryPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen 
      bg-brand-lightGrey pt-16 pb-4 px-4">
      {/* Main Content Area */}
      <main className='flex-1 p-4 ml-6'>
        <HistoryContent />
      </main>
    </div>
  );
};

export default HistoryPage;
