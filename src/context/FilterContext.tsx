import React, { createContext, useState, ReactNode, useContext } from 'react';
import type { FilterValue } from '../components/TaskTracker/types/TaskTrackerTypes';

interface FilterContextValue {
  filter: FilterValue;
  setFilter: (value: FilterValue) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export const FilterContext = createContext<FilterContextValue | undefined>(undefined);

interface FilterProviderProps {
  children: ReactNode;
}

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }
  return context;
};

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [filter, setFilter] = useState<FilterValue>('All');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <FilterContext.Provider value={{ filter, setFilter, searchQuery, setSearchQuery }}>
      {children}
    </FilterContext.Provider>
  );
};
