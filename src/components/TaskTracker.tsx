import React from 'react';
import TaskAdder from './TaskAdder';
import TaskList from './TaskList';


const TaskTracker = () => {
  return (
    <div>
      <TaskAdder />
      <TaskList />
    </div>
  );
};

export default TaskTracker;
