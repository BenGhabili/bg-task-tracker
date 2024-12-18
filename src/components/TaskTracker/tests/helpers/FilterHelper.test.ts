import { filterTasks } from '../../helpers/FilterHelper';
import type { Task } from '../../types/TaskTrackerTypes';
import type { FilterValue } from '../../types/TaskTrackerTypes';

describe('filterTasks helper', () => {
  const tasks: Task[] = [
    { id: '1', title: 'Low-foo Priority Task', description: 'something low', priority: 'Low' },
    { id: '2', title: 'high-foo Priority Task', description: 'something high', priority: 'High' },
    { id: '3', title: 'Medium Priority Task', description: 'something medium', priority: 'Medium' },
  ];

  it('returns all tasks if filter is All and no search query', () => {
    const result = filterTasks(tasks, 'All', '');
    expect(result).toHaveLength(3);
    expect(result.map(task => task.id)).toContain('1');
    expect(result.map(task => task.id)).toContain('2');
    expect(result.map(task => task.id)).toContain('3');
  });

  it('filters by priority', () => {
    const result = filterTasks(tasks, 'High', '');
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('high-foo Priority Task');
  });

  it('filters by search query only', () => {
    const result = filterTasks(tasks, 'All', 'low-foo');
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('Low-foo Priority Task');
  });

  it('filters by priority and search query together', () => {
    const result = filterTasks(tasks, 'High', 'high-foo');
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('high-foo Priority Task');
  });

  it('returns empty array if no tasks match the criteria', () => {
    const result = filterTasks(tasks, 'Low', 'unknown');
    expect(result).toHaveLength(0);
  });
});
