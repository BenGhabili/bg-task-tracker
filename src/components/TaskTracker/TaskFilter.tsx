import React, { useContext } from 'react';
import { FilterContext } from '../../context/FilterContext';
import { Select } from '../shared/styles/elementStyles';

const TaskFilter: React.FC = () => {
  const filterContext = useContext(FilterContext);
  if (!filterContext) {
    throw new Error('FilterContext not found');
  }

  const { filter, setFilter } = filterContext;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as typeof filter);
  };

  return (
    <div>
      <label>Filter by Priority: </label>
      <Select value={filter} onChange={handleChange}>
        <option value="All">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </Select>
    </div>
  );
};

export default TaskFilter;
