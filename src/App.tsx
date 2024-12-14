import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskTracker from './components/TaskTracker';

const App: React.FC = () => {
  return (
    <TaskProvider>
      <div style={{display: 'flex', height: '100vh', boxSizing: 'border-box'}}>
        <TaskTracker/>
      </div>
    </TaskProvider>
  );
};

export default App;
