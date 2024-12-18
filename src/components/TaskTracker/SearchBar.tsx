import React, { useState, useEffect } from 'react';
import { useFilterContext } from '../../context/FilterContext';
import { TextInput } from '../shared/styles/elementStyles';

const DEBOUNCE_DELAY = 600;

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useFilterContext();
  const [localValue, setLocalValue] = useState(searchQuery);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery(localValue);
    }, DEBOUNCE_DELAY);

    return () => {
      clearTimeout(handler);
    };
  }, [localValue, setSearchQuery]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
  };

  return (
    <div style={{ marginTop: '10px'}}>
      <label htmlFor="search">Search Tasks: </label>
      <TextInput
        id="search"
        value={localValue}
        onChange={handleChange}
        placeholder="Search by title"
      />
    </div>
  );
};


export default SearchBar;
