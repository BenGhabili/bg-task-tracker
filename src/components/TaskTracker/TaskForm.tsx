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
    if (!title.trim()) return;
    onSubmit({ title, description, priority });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="titleInput">Title:</label>
        <TextInput
          id="titleInput"
          type="text"
          value={title}
          maxLength={50}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <div>
          {title.length} / 50
        </div>
      </div>

      <div>
        <label htmlFor="descriptionInput">Description:</label>
        <TextArea
          id="descriptionInput"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="prioritySelect">Priority:</label>
        <Select
          id="prioritySelect"
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
