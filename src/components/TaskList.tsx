import React, {useContext} from 'react';
import styled from 'styled-components';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

const ListWrapper = styled.div`
  min-width: 70%;
  padding: 0 5px;
`;


const TaskList = () => {
  const taskContext = useContext(TaskContext);
  if (!taskContext) throw new Error('TaskContext not found');

  const { tasks } = taskContext;

  return (
    <ListWrapper>
      {tasks.length > 0 && tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ListWrapper>
  );
};


export default TaskList;
