import type { Task } from '../types/TaskTrackerTypes';
import type { FilterValue } from '../types/TaskTrackerTypes';

export const filterTasks = (tasks: Task[], filter: FilterValue, searchQuery: string): Task[]  => {
  let result = tasks;

  if (filter !== 'All') {
    result = result.filter((task: Task) => task.priority === filter);
  }

  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    result = result.filter((task: Task) =>
      task.title.toLowerCase().includes(query)
    );
  }

  return result;
}
