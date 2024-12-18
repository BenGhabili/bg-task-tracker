/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from '../TaskList';
import { FilterContext, useFilterContext } from '../../../context/FilterContext';
import { useTaskContext } from '../../../context/TaskContext';
import type { FilterValue } from '../types/TaskTrackerTypes';
import { filterTasks } from '../helpers/FilterHelper';

jest.mock('../../../context/TaskContext', () => ({
  ...jest.requireActual('../../../context/TaskContext'),
  useTaskContext: jest.fn(),
}));

jest.mock('../helpers/FilterHelper', () => ({
  ...jest.requireActual('../helpers/FilterHelper'),
  filterTasks: jest.fn(),
}));

jest.mock('../../../context/FilterContext', () => ({
  ...jest.requireActual('../../../context/FilterContext'),
  useFilterContext: jest.fn(),
}));

const mockUseTaskContext = useTaskContext as jest.Mock;
const mockUseFilterContext = useFilterContext as jest.Mock;
const mockFilterTasks = filterTasks as jest.Mock;

const tasks = [
  { id: '1', title: 'Low Task', description: 'test low', priority: 'Low' as const },
  { id: '2', title: 'High Task', description: 'test high', priority: 'High' as const }
];


const renderComponent = () =>
  render(
    <FilterContext.Provider value={{ filter: 'Low', setFilter: jest.fn(), searchQuery: 'foo', setSearchQuery: jest.fn()}}>
      <TaskList />
    </FilterContext.Provider>
  );

describe('TaskList', () => {
  beforeEach(() => {
    mockUseTaskContext.mockReturnValue({ tasks });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('displays all tasks when filter returns all values', () => {
    mockUseFilterContext.mockReturnValue({
      searchQuery: '',
      setSearchQuery: jest.fn(),
    })

    mockFilterTasks.mockReturnValue(tasks);
    render(<TaskList />);

    expect(screen.getByText('Low Task')).toBeInTheDocument();
    expect(screen.getByText('High Task')).toBeInTheDocument();
  });

  it('calls the filter function with correct values', () => {
    const mockFilter = 'Low';
    const mockSearch = 'foo';
    mockUseFilterContext.mockReturnValue({
      searchQuery: mockSearch,
      filter: mockFilter,
    })
    mockFilterTasks.mockReturnValue([]);
    render(<TaskList />);

    expect(mockFilterTasks).toHaveBeenCalledWith(tasks, mockFilter, mockSearch);
  });


});
