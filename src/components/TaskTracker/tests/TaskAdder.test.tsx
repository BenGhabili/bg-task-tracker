/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import TaskAdder from '../TaskAdder';
import { useTaskContext } from '../../../context/TaskContext';

jest.mock('../../../context/TaskContext', () => ({
  ...jest.requireActual('../../../context/TaskContext'),
  useTaskContext: jest.fn(),
}));

jest.mock('../TaskForm', () => {
  return {
    __esModule: true,
    default: (props: { onSubmit: (data: any) => void, reset: boolean }) => (
      <div data-testid="mocked-task-form">
        <p>Reset is: {props.reset ? 'true' : 'false'}</p>
        <button onClick={() => props.onSubmit({
          title: 'Mock Title',
          description: 'Mock Description',
          priority: 'High'
        })}>
          Simulate Submit
        </button>
      </div>
    ),
  }
});


const mockAddTask = jest.fn();

describe('TaskAdder', () => {
  beforeEach(() => {
    (useTaskContext as jest.Mock).mockReturnValue({
      addTask: mockAddTask,
    });

    render(<TaskAdder />);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('renders the mocked TaskForm', () => {
    expect(screen.getByTestId('mocked-task-form')).toBeInTheDocument();
    expect(screen.getByText('Reset is: false')).toBeInTheDocument();
  });

  it('calls addTask on submit and then sets reset to true', () => {
    const submitButton = screen.getByText('Simulate Submit');

    fireEvent.click(submitButton);

    expect(mockAddTask).toHaveBeenCalledTimes(1);
    expect(mockAddTask).toHaveBeenCalledWith({
      title: 'Mock Title',
      description: 'Mock Description',
      priority: 'High'
    });

    act(() => {});

    expect(screen.getByText('Reset is: true')).toBeInTheDocument();
  });
});
