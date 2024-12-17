import React, { createContext, useState, ReactNode } from 'react';
import type { FilterValue } from '../components/TaskTracker/types/TaskTrackerTypes';

interface FilterContextValue {
  filter: FilterValue;
  setFilter: (value: FilterValue) => void;
}

export const FilterContext = createContext<FilterContextValue | undefined>(undefined);

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [filter, setFilter] = useState<FilterValue>('All');

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
