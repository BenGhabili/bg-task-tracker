import React from 'react';
import styled from 'styled-components';
import { TaskProvider } from './context/TaskContext';
import TaskTracker from './components/TaskTracker/TaskTracker';

const MainAppWrapper = styled.div`
  width: 1000px;
  background-color: lightgrey;
`;

const App: React.FC = () => {
  return (
    <TaskProvider>
      <MainAppWrapper>
        <TaskTracker/>
      </MainAppWrapper>
    </TaskProvider>
  );
};

export default App;
