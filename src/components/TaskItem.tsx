import React from 'react';
import styled from 'styled-components';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
}

const TaskItemWrapper = styled.div`
  border: 1px solid #000;
  padding: 1rem;
  margin: 0.5rem;
  width: 150px;
`;

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <TaskItemWrapper>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <small>Priority: {task.priority}</small>
    </TaskItemWrapper>
  );
};

export default TaskItem;
