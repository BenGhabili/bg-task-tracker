import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import type {TaskItemProps, SubmitData, Priority } from './types/TaskTrackerTypes';
import { useTaskContext } from '../../context/TaskContext';
import TaskForm from './TaskForm';
import { Card, PrimaryButton, DangerButton, CardHeader, CardFooter, CardContent } from '../shared/styles/commonStyles';
import { TaskPriority, TaskTitle, ButtonWrapper, TaskDescription } from './styles/taskItemStyles';

const displayPriority = (priority: Priority) => {
  switch (priority) {
    case "Medium":
      return 'M';
    case "High":
      return 'H';
    default:
      return 'L';
  }
};

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const taskContext = useTaskContext();

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
            <TaskPriority $priority={displayPriority(task.priority)}>
              <small>{displayPriority(task.priority)}</small>
            </TaskPriority>
          </CardHeader>
          <CardContent>
            <TaskDescription>{task.description}</TaskDescription>
          </CardContent>
          <CardFooter>
            <ButtonWrapper>
              <PrimaryButton onClick={() => setIsEditing(true)}>
                <FontAwesomeIcon icon={faEdit} />
              </PrimaryButton>
              <DangerButton onClick={() => deleteTask(task.id)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </DangerButton>
            </ButtonWrapper>
          </CardFooter>
        </>
      )}
    </Card>
  );
};

export default TaskItem;
