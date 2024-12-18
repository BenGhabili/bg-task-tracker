import React from 'react';
import { TaskProvider } from '../../context/TaskContext';
import { FilterProvider } from '../../context/FilterContext';
import TaskSideBar from './TaskSideBar';
import TaskList from './TaskList';
import { TrackerWrapper } from './styles/trackerStyles';


const TaskTracker = () => {
  return (
    <TaskProvider>
      <FilterProvider>
        <TrackerWrapper>
          <TaskSideBar />
          <TaskList />
        </TrackerWrapper>
      </FilterProvider>
    </TaskProvider>
  );
};

export default TaskTracker;
