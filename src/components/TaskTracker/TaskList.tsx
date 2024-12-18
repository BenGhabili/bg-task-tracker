import React, { useContext, useMemo } from 'react';
import { useTaskContext } from '../../context/TaskContext';
import { FilterContext, useFilterContext } from '../../context/FilterContext';
import TaskItem from './TaskItem';
import { filterTasks } from './helpers/FilterHelper';
import { ListWrapper, ListHeader } from './styles/taskListStyles';

const TaskList = () => {
  const taskContext = useTaskContext();
  const filterContext = useFilterContext();

  if (!taskContext || !filterContext) {
    throw new Error('Context not found');
  }

  const { tasks } = taskContext;
  const { filter, searchQuery } = filterContext;

  const filteredTasks = useMemo(() =>
    filterTasks(tasks, filter, searchQuery), [tasks, filter, searchQuery]);

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
