/**
 * @jest-environment jsdom
 */
import React, { ReactNode } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskFilter from '../TaskFilter';
import { FilterContext } from '../../../context/FilterContext';
import type { FilterValue } from '../types/TaskTrackerTypes';

describe('TaskFilter', () => {
  it('updates filter when a new priority is selected', () => {
    const mockSetFilter = jest.fn();

    interface MockFilterProviderProps {
      children: ReactNode;
    }

    const MockFilterProvider: React.FC<MockFilterProviderProps> = ({ children }) => (
      <FilterContext.Provider value={{ filter: 'All' as FilterValue, setFilter: mockSetFilter }}>
        {children}
      </FilterContext.Provider>
    );

    render(
      <MockFilterProvider>
        <TaskFilter />
      </MockFilterProvider>
    );

    const selectElement = screen.getByLabelText(/filter by priority/i) as HTMLSelectElement;
    expect(selectElement.value).toBe('All');

    fireEvent.change(selectElement, { target: { value: 'High' } });
    expect(mockSetFilter).toHaveBeenCalledTimes(1);
    expect(mockSetFilter).toHaveBeenCalledWith('High');
  });
});
