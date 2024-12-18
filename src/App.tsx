import React from 'react';
import styled from 'styled-components';
import TaskTracker from './components/TaskTracker';

const MainAppWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const App: React.FC = () => {
  return (
    <MainAppWrapper>
      <TaskTracker/>
    </MainAppWrapper>
  );
};

export default App;
