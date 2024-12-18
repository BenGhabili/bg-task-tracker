import styled from 'styled-components';
import { PrimaryButton, DangerButton } from '../../shared/styles/commonStyles';

export const TaskTitle = styled.h2`
  font-size: 18px;
  padding: 0;
  margin: 0;
  font-weight: 600;
  overflow-wrap: break-word;
  word-wrap: break-word;

  @media (max-width: 768px) {
    width: 220px;
  }
`;

export const TaskDescription = styled.p`
  font-size: 1rem;
  color: #666666;
`;

export const TaskPriority = styled.div<{ $priority: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ $priority }) =>
    $priority === 'L' ? '#4caf50' :
      ($priority === 'M' ? '#F39C12' : '#f44336')
  };
  width: 30px;
  height: 30px;
  color: #ffffff;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  font-size: 14px;
  text-align: center;
  background-color: ${({ $priority }) =>
    $priority === 'L' ? '#4caf50' :
      ($priority === 'M' ? '#F39C12' : '#f44336')
  };

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  small {
    color: #fff;
    height: 23px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const ButtonWrapper = styled.div`
  ${PrimaryButton} {
    margin-right: 5px;
    width: inherit;
  }

  ${DangerButton} {
    width: inherit;
  }
`;
