import React, {useEffect, useState} from 'react';
import type { Priority, TaskFormProps } from './types/TaskTrackerTypes';
import { TextInput, TextArea, Select } from '../shared/styles/elementStyles';
import { PrimaryButton, SecondaryButton } from '../shared/styles/commonStyles';



const TaskForm: React.FC<TaskFormProps> = ({
  initialTitle = '',
  initialDescription = '',
  initialPriority = 'Low',
  onSubmit,
  onCancel,
  reset = false
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [priority, setPriority] = useState<Priority>(initialPriority);

  useEffect(() => {
    if (reset) {
      setTitle('');
      setDescription('');
      setPriority('Low');
    }
  }, [reset]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return; // basic validation
    onSubmit({ title, description, priority });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title: </label>
        <TextInput
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>

      <div style={{ marginTop: '0.5rem' }}>
        <label>Description: </label>
        <TextArea
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>

      <div style={{ marginTop: '0.5rem' }}>
        <label>Priority: </label>
        <Select
          value={priority}
          onChange={e => setPriority(e.target.value as Priority)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </Select>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <PrimaryButton type="submit">Save</PrimaryButton>
        {onCancel && (
          <SecondaryButton type="button" onClick={onCancel} style={{ marginLeft: '1rem' }}>
            Cancel
          </SecondaryButton>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
