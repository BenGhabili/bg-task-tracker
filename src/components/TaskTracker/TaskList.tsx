import React, { useContext, useMemo } from 'react';
import type { Task } from './types/TaskTrackerTypes';
import { useTaskContext } from '../../context/TaskContext';
import { FilterContext } from '../../context/FilterContext';
import TaskItem from './TaskItem';
import { ListWrapper, ListHeader } from './styles/taskListStyles';

const TaskList = () => {
  const taskContext = useTaskContext();
  const filterContext = useContext(FilterContext);

  if (!taskContext || !filterContext) {
    throw new Error('Context not found');
  }

  const { tasks } = taskContext;
  const { filter } = filterContext;

  const filteredTasks = useMemo(() => {
    if (filter === 'All') {
      return tasks;
    }

    return tasks.filter((task: Task) => task.priority === filter);
  }, [tasks, filter]);

  return (
    <ListWrapper>
      <ListHeader />
      {filteredTasks.length > 0 && filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ListWrapper>
  );
};


export default TaskList;
