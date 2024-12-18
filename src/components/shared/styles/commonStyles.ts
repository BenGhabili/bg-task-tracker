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
  width: 100px;

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
  background-color: #f44336;
  &:hover {
    background-color: #c0392b; /* Darker Red */
  }
`;

export const Card = styled.div`
  margin-bottom: 0.5rem;

  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  padding: 16px;
  max-width: 100%;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Separator = styled.div`
  height: 1px;
  background-color: #e0e0e0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  margin: 16px 0;
  width: 100%;
`;

export const CardContent = styled.div`
  overflow-wrap: break-word;
  word-wrap: break-word;
  margin: 10px 0;
  width: 700px;

  @media (max-width: 768px) {
    padding: 10px;
    width: 250px;
  }
`;
