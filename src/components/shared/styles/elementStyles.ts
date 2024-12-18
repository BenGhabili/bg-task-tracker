import styled from 'styled-components';

const baseInputStyles = `
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }

  &:hover {
    border-color: #b3b3b3;
  }
`;

export const TextInput = styled.input`
  ${baseInputStyles};
`;

export const TextArea = styled.textarea`
  ${baseInputStyles};
  resize: none;
  min-height: 100px;
`;

export const Select = styled.select`
  ${baseInputStyles};
  appearance: none;
  background: #fff url("data:image/svg+xml;utf8,<svg fill='%233498db' height='16' viewBox='0 0 24 24' width='16' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>") no-repeat right 12px center;
  padding-right: 36px;
`;
