import styled from 'styled-components';

export const SideBarMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 0 10px;

  @media (max-width: 768px) {
    height: inherit;
    width: 90%;
  }
`;

export const TaskAdderHeader = styled.div`
  min-height: 50px;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FormWrapper = styled.div`
`;

export const TrackerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  min-width: 1000px;
  background-color: #EDEDED;
  height: 100vh;

  @media (max-width: 768px) {
    padding: 8px;
    flex-direction: column;
    height: inherit;
    min-width: inherit;
  }
`;

export const TaskFilterWrapper = styled.div`
  @media (max-width: 768px) {
    min-height: 100px;
  }
`;
