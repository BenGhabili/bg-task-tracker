import React from 'react';
import styled from 'styled-components';
import { TaskProvider } from '../../context/TaskContext';
import { FilterProvider } from '../../context/FilterContext';
import TaskSideBar from './TaskSideBar';
import TaskList from './TaskList';

const TrackerWrapper = styled.div`
  display: flex;
`;


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
