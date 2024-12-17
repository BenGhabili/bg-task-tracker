import React, { useState } from 'react';
import type { Task } from '../../types';
import { TaskContext } from '../../context/TaskContext';
import { Card, PrimaryButton, DangerButton, CardHeader, CardFooter } from '../shared/styles/commonStyles';
import { TaskPriority, TaskTitle, ButtonWrapper } from './styles/taskItemStyles';

interface TaskItemProps {
  task: Task;
}


const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const taskContext = React.useContext(TaskContext);

  if (!taskContext) {
    throw new Error('TaskContext not found');
  }

  const { editTask, deleteTask } = taskContext;

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    editTask(task.id, { title, description, priority });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(task.title);
    setDescription(task.description);
    setPriority(task.priority);
    setIsEditing(false);
  };

  return (
    <Card>
      {isEditing ? (
        <form onSubmit={handleSave}>
          <div>
            <label>Title: </label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            <label>Description: </label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            <label>Priority: </label>
            <select value={priority} onChange={e => setPriority(e.target.value as Task['priority'])}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancel} style={{ marginLeft: '1rem' }}>Cancel</button>
          </div>
        </form>
      ) : (
        <>
          <CardHeader>
            <TaskTitle>{task.title}</TaskTitle>
            <TaskPriority priority={priority}>
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
