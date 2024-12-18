import React, { useState } from 'react';
import { TextInput } from '../shared/styles/elementStyles';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // if (error) {
  //   return <div>Error occurred</div>;
  // }
  //
  // if (loading) {
  //   return <div>Loading</div>;
  // }

  return (
    <div>
      <label htmlFor="search">Search Tasks: </label>
      <TextInput
        id="search"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search by title"
      />
    </div>
  );
};


export default SearchBar;
