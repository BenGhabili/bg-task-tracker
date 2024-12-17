import React, { useState } from 'react';
import type { TaskItemProps, SubmitData } from './types/TaskTrackerTypes';
import { TaskContext } from '../../context/TaskContext';
import TaskForm from './TaskForm';
import { Card, PrimaryButton, DangerButton, CardHeader, CardFooter } from '../shared/styles/commonStyles';
import { TaskPriority, TaskTitle, ButtonWrapper } from './styles/taskItemStyles';


const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const taskContext = React.useContext(TaskContext);

  if (!taskContext) {
    throw new Error('TaskContext not found');
  }

  const { editTask, deleteTask } = taskContext;

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (data: SubmitData) => {
    editTask(task.id, data);
    setIsEditing(false);
  };

  return (
    <Card>
      {isEditing ? (
        <TaskForm
          initialTitle={task.title}
          initialDescription={task.description}
          initialPriority={task.priority}
          onSubmit={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <CardHeader>
            <TaskTitle>{task.title}</TaskTitle>
            <TaskPriority $priority={task.priority}>
              <small>{task.priority}</small>
            </TaskPriority>
          </CardHeader>
          <div>
            <p>{task.description}</p>
          </div>
          <CardFooter>
            <ButtonWrapper>
              <PrimaryButton onClick={() => setIsEditing(true)}>Edit</PrimaryButton>
              <DangerButton onClick={() => deleteTask(task.id)}>Delete</DangerButton>
            </ButtonWrapper>
          </CardFooter>
        </>
      )}
    </Card>
  );
};

export default TaskItem;
