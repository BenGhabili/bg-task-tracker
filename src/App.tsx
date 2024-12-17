import React from 'react';
import styled from 'styled-components';
import TaskTracker from './components/TaskTracker';

const MainAppWrapper = styled.div`
  width: 1000px;
  background-color: lightgrey;
`;

const App: React.FC = () => {
  return (
    <MainAppWrapper>
      <TaskTracker/>
    </MainAppWrapper>
  );
};

export default App;
