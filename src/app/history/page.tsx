"use client";

import React from 'react';
import SearchBar from '../components/SearchBar'; // Import the new SearchBar component
import TransactionItem from '../components/TransactionItem'; // Assuming this path is correct

function HistoryPage() {
  const handleSearch = (searchTerm: string) => {
    console.log("Searching for:", searchTerm);
    // Here you would typically filter your transaction data based on the search term
  };

  return (
    <div className="flex flex-col p-4 mr-8">
      {/* Page Header and Filter Buttons */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-brand-black/80 mb-4 font-poppins">
          History
        </h1>
        
        {/* Filter Buttons */}
        <div className="flex space-x-2 mb-4">
          <button className="px-4 py-2 rounded-full bg-brand-darkPurple text-white text-sm font-semibold">
            All
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm font-semibold">
            Received
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm font-semibold">
            Sent
          </button>
        </div>

        {/* Search Input - Now using the SearchBar component */}
        <SearchBar placeholder="Search contact" onSearch={handleSearch} />
      </div>

      {/* Transaction List */}
      <div className="flex flex-col gap-0.5">
        {/* Populate with example TransactionItem components based on your design */}
        <TransactionItem 
          avatarSrc='/images/img-ph.jpg' // Assuming you have image paths
          personName='Sarah'
          date="June 10"
          time="1:43 PM"
          amount="-$100.00"
          isNegative={true}
        />
        <TransactionItem 
          avatarSrc='/images/img-ph1.jpg'
          personName='John'
          date="June 9"
          time="2:30 PM"
          amount="+$50.00"
          isNegative={false}
        />
        <TransactionItem 
          avatarSrc='/images/img-ph2.jpg'
          personName='Mark'
          date="June 8"
          time="10:00 AM"
          amount="-$75.00"
          isNegative={true}
        />
        <TransactionItem 
          avatarSrc='/images/img-ph1.jpg'
          personName='Christy'
          date="June 7"
          time="5:00 PM"
          amount="+$200.00"
          isNegative={false}
        />
      </div>
    </div>
  );
}

export default HistoryPage;