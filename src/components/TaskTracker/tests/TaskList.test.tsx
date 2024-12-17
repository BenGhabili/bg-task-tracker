/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from '../TaskList';
import { FilterContext } from '../../../context/FilterContext';
import { useTaskContext } from '../../../context/TaskContext';
import type { FilterValue } from '../types/TaskTrackerTypes';

jest.mock('../../../context/TaskContext', () => ({
  ...jest.requireActual('../../../context/TaskContext'),
  useTaskContext: jest.fn(),
}));

const mockUseTaskContext = useTaskContext as jest.Mock;

const tasks = [
  { id: '1', title: 'Low Task', description: 'test low', priority: 'Low' as const },
  { id: '2', title: 'High Task', description: 'test high', priority: 'High' as const }
];


const renderComponent = (filter: FilterValue) =>
  render(
    <FilterContext.Provider value={{ filter, setFilter: jest.fn() }}>
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

  it('displays all tasks when filter is All', () => {
    renderComponent('All');

    expect(screen.getByText('Low Task')).toBeInTheDocument();
    expect(screen.getByText('High Task')).toBeInTheDocument();
  });

  it('displays only high priority tasks when filter is High', () => {
    renderComponent('High');

    expect(screen.queryByText('Low Task')).not.toBeInTheDocument();
    expect(screen.getByText('High Task')).toBeInTheDocument();
  });

  it('displays no tasks if none match the filter', () => {
    renderComponent('Medium');

    expect(screen.queryByText('Low Task')).not.toBeInTheDocument();
    expect(screen.queryByText('High Task')).not.toBeInTheDocument();
  });
});
