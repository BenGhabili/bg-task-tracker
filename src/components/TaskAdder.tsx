import React, {useContext, useState} from 'react';
import { TaskContext } from '../context/TaskContext';
import styled from "styled-components";

const FormWrapper = styled.div`
  width: 30%;
`;


const TaskAdder: React.FC = () => {
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    throw new Error('No task context');
  }

  const { addTask } = taskContext;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Low');

  const resetFields = () => {
    setTitle('');
    setDescription('');
    setPriority('Low');
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    addTask({ title, description, priority });

    resetFields();
  };

  return (
    <FormWrapper>
      <h2>Add Task</h2>
      <form onSubmit={handleAdd}>
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
          <select
            value={priority}
            onChange={e => setPriority(e.target.value as 'Low' | 'Medium' | 'High')}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Add Task</button>
      </form>
    </FormWrapper>
  );
};


export default TaskAdder;
