/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../TaskForm';
import { Priority } from '../types/TaskTrackerTypes';

describe('TaskForm', () => {
  test('submits correct data', () => {
    const handleSubmit = jest.fn();
    render(<TaskForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'Test Task' } });
    fireEvent.change(screen.getByLabelText(/description/i), { target: { value: 'A test description' } });
    fireEvent.change(screen.getByLabelText(/priority/i), { target: { value: 'High' } });

    fireEvent.click(screen.getByRole('button', { name: /save/i }));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      title: 'Test Task',
      description: 'A test description',
      priority: 'High' as Priority
    });
  });

  test('resets fields when reset prop changes to true', () => {
    const handleSubmit = jest.fn();
    const { rerender } = render(<TaskForm onSubmit={handleSubmit} reset={false} />);

    fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'Task Before Reset' } });

    rerender(<TaskForm onSubmit={handleSubmit} reset={true} />);

    expect((screen.getByLabelText(/title/i) as HTMLInputElement).value).toBe('');
    expect((screen.getByLabelText(/description/i) as HTMLTextAreaElement).value).toBe('');
    expect((screen.getByLabelText(/priority/i) as HTMLSelectElement).value).toBe('Low');
  });
});
