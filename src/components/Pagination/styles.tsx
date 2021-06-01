import styled, { css } from 'styled-components';

export const PaginationContainer = styled.div`
  padding: 1rem 2rem;
  margin: 1rem 0;
  display: flex;
  justify-content: flex-end;
  width: 100;
  align-items: center;
`;

export const Legend = styled.div`
  margin-right: 1rem;
  font-size: 0.875rem;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  :last-of-type {
    margin-right: 0;
  }
`;

export const Button = styled.button`
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
  font-weight: 700;
  transition: color 250ms;
  transition: box-shadow 200ms ease-in-out;

  :disabled {
    background-color: #f3f4f6;
    cursor: not-allowed;
    color: #d1d5db;
  }

  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        color: #ff9419;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 2px;
      }
    `}
`;
