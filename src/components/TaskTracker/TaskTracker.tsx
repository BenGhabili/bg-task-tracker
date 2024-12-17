import React from 'react';
import styled from 'styled-components';
import TaskAdder from './TaskAdder';
import TaskList from './TaskList';

const TrackerWrapper = styled.div`
  display: flex;
`;


const TaskTracker = () => {
  return (
    <TrackerWrapper>
      <TaskAdder />
      <TaskList />
    </TrackerWrapper>
  );
};

export default TaskTracker;
