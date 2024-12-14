import React, {useContext} from 'react';
import { TaskContext } from '../context/TaskContext';


const TaskList = () => {
  const taskContext = useContext(TaskContext);
  if (!taskContext) throw new Error('TaskContext not found');

  const { tasks } = taskContext;

  return (
    <div>
      {tasks.length > 0 && tasks.map(task => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
};


export default TaskList;
