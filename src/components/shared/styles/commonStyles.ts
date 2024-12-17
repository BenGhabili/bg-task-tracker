import styled from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 4px;
  padding: 5px 8px;
  font-size: 16px;
  font-weight: normal;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.2s ease;
  color: #fff;
  min-width: 100px;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: #3498db; /* Blue */
  &:hover {
    background-color: #2980b9;
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: #95a5a6; /* Gray */
  &:hover {
    background-color: #7f8c8d;
  }
`;

export const DangerButton = styled(Button)`
  background-color: #e74c3c; /* Red */
  &:hover {
    background-color: #c0392b; /* Darker Red */
  }
`;

export const Card = styled.div`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 1rem;
  margin: 0.5rem;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;
