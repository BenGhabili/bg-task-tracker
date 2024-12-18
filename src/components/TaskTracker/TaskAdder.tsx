import React, { useState } from 'react';
import { useTaskContext } from '../../context/TaskContext';
import TaskForm from './TaskForm';
import type { SubmitData } from './types/TaskTrackerTypes';
import { FormWrapper, TaskAdderHeader } from './styles/trackerStyles';

const TaskAdder: React.FC = () => {
  const [resetTrigger, setResetTrigger] = useState(false);
  const taskContext = useTaskContext();

  if (!taskContext) {
    throw new Error('No task context');
  }

  const { addTask } = taskContext;

  const handleAdd = (data: SubmitData) => {
    addTask(data);

    setResetTrigger(true);
  };

  return (
    <FormWrapper>
      <TaskAdderHeader>
        <h2>Add Task</h2>
      </TaskAdderHeader>
      <TaskForm onSubmit={handleAdd} reset={resetTrigger}/>
    </FormWrapper>
  );
};


export default TaskAdder;
