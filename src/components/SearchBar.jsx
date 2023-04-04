import React, { useState } from 'react';
import { UilSearch } from '@iconscout/react-unicons'

const SearchBar = ({ handleSearch}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(searchValue);
    }
  }

  return (
    <>
    
      <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
          <input
            type="text"
            className='text-xl font-light p-2 w-full shadow-xl  focus:outline-none capitalize placeholder:lowercase '
            placeholder="Search for a city"
            value={searchValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        
          <UilSearch 
          size={25} 
          className='text-white cursor-pointer transition ease-out hover:scale-125'
          onClick={() => handleSearch(searchValue)}/>
          </div>
      </div>
    </>

  );
}

export default SearchBar;