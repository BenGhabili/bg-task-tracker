import styled from 'styled-components';
import type { Priority } from '../../../types';
import { PrimaryButton } from '../../shared/styles/commonStyles';

export const TaskTitle = styled.h2`
  font-size: 18px;
  padding: 0;
  margin: 0;
  font-weight: normal;
`;

export const TaskPriority = styled.div<{ priority: Priority }>`
  display: flex;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 10px;
  width: 50px;
  padding: 2px;
  background-color: ${({ priority }) => priority === 'Low' ? 'green' : (priority === 'Medium' ? 'orange' : 'red')};

  small {
    color: #fff;
  }
`;

export const ButtonWrapper = styled.div`
  ${PrimaryButton} { margin-right: 5px; }
`;
