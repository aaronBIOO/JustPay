"use client";

import React from 'react';
import { FiSearch } from 'react-icons/fi'; 

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (searchTerm: string) => void;
}

function SearchBar({ placeholder = "Search...", onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        className="w-full pl-10 pr-4 py-2 border border-brand-lightPurple rounded-full 
        bg-brand-lightGrey focus:outline-none focus:ring-1 focus:ring-[#574F8E] 
        focus:ring-opacity-50
        placeholder:text-brand-black/60"
      />
      <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-black/60" />
    </div>
  );
}

export default SearchBar;