import React from 'react';
import TaskTracker from './components/TaskTracker';

const App: React.FC = () => {
  return (
      <div style={{ display: 'flex', height: '100vh', boxSizing: 'border-box' }}>
        <TaskTracker />
      </div>
  );
};

export default App;
