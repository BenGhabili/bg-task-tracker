/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '../TaskItem';
import { useTaskContext } from '../../../context/TaskContext';
import type { Task } from '../types/TaskTrackerTypes';

const mockEditTask = jest.fn();
const mockDeleteTask = jest.fn();

jest.mock('../../../context/TaskContext', () => ({
  ...jest.requireActual('../../../context/TaskContext'),
  useTaskContext: jest.fn(),
}));

jest.mock('../TaskForm', () => ({
  __esModule: true,
  default: () => <div data-testid="mocked-task-form">Mock Task Form</div>,
}));

const mockTask: Task = {
  id: '1',
  title: 'Sample Task',
  description: 'Sample Desc',
  priority: 'Low'
};

const renderComponent = () =>
  render(<TaskItem task={mockTask} />);


describe('TaskItem', () => {
  beforeEach(() => {
    (useTaskContext as jest.Mock).mockReturnValue({
      editTask: mockEditTask,
      deleteTask: mockDeleteTask
    });

    renderComponent();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the task correctly and also the delete button works as expected', () => {
    expect(screen.getByText('Sample Task')).toBeInTheDocument();
    const deleteButton = screen.getByText('Delete');
    expect(deleteButton).toBeInTheDocument();
    fireEvent.click(deleteButton);
    expect(mockDeleteTask).toHaveBeenCalledTimes(1);
  });

  it('does not show TaskForm initially', () => {
    expect(screen.queryByTestId('mocked-task-form')).not.toBeInTheDocument();
  });

  it('shows TaskForm after clicking Edit', () => {
    const editButton = screen.getByText('Edit');

    fireEvent.click(editButton);
    expect(screen.getByTestId('mocked-task-form')).toBeInTheDocument();
  });
});
