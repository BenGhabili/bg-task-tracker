import React, { useState } from 'react';


const TaskAdder: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Low');

  return (
    <div style={{ width: '200px', padding: '1rem', borderRight: '1px solid #ccc' }}>
      <h2>Add Task</h2>
      <form>
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
    </div>
  );
};


export default TaskAdder;
