import styled from 'styled-components';

export const FiltersContainer = styled.div`
  display: flex;
`;

export const InputBox = styled.div`
  margin: auto 1rem;
  :last-of-type {
    margin-right: 0;
  }
`;

export const Input = styled.input`
  border: 1px solid #e4e4e7;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.625rem;

  border-radius: 0.25rem;
`;

export const Select = styled.select`
  border: 1px solid #e4e4e7;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.625rem;

  border-radius: 0.25rem;
`;

export const Button = styled.button`
  color: white;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.625rem 1.25rem;
  border-radius: 0.25rem;
  font-weight: bold;
  background-color: #ffa947;
  transition: background-color 200ms ease;
  &:hover {
    background-color: #ff9419;
  }
`;
