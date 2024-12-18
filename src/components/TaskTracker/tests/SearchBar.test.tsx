/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import SearchBar from '../SearchBar';
import { useFilterContext } from '../../../context/FilterContext';
import { DEBOUNCE_DELAY } from '../constants';

jest.mock('../../../context/FilterContext', () => ({
  ...jest.requireActual('../../../context/FilterContext'),
  useFilterContext: jest.fn(),
}));

const mockSetSearchQuery = jest.fn();

describe('SearchBar', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    mockSetSearchQuery.mockClear();
    (useFilterContext as jest.Mock).mockReturnValue({
      searchQuery: '',
      setSearchQuery: mockSetSearchQuery,
    });
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders and updates searchQuery after debounce delay', () => {
    render(<SearchBar />);

    const inputElement = screen.getByTestId('searchInput') as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe('');

    fireEvent.change(inputElement, { target: { value: 'Test' } });
    expect(inputElement.value).toBe('Test');

    expect(mockSetSearchQuery).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(DEBOUNCE_DELAY);
    });

    expect(mockSetSearchQuery).toHaveBeenCalledTimes(1);
    expect(mockSetSearchQuery).toHaveBeenCalledWith('Test');
  });

  it('resets the timer if user types again before delay', () => {
    render(<SearchBar />);

    const inputElement = screen.getByTestId('searchInput') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'Te' } });

    act(() => {
      jest.advanceTimersByTime(DEBOUNCE_DELAY - 100);
    });

    fireEvent.change(inputElement, { target: { value: 'Test Query' } });

    act(() => {
      jest.advanceTimersByTime(DEBOUNCE_DELAY);
    });

    expect(mockSetSearchQuery).toHaveBeenCalledTimes(1);
    expect(mockSetSearchQuery).toHaveBeenCalledWith('Test Query');
  });
});
