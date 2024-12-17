import React, { useState } from 'react';
import styled from 'styled-components';
import { Task } from '../types';
import { TaskContext } from '../context/TaskContext';

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
    <TaskItemWrapper>
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
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <small>Priority: {task.priority}</small>
          <div style={{marginTop: '0.5rem'}}>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </>
      )}
    </TaskItemWrapper>
  );
};

export default TaskItem;
