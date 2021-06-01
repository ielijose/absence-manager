import styled from 'styled-components';

export const PaginationContainer = styled.div`
  padding: 1rem;
  margin: 1rem auto; ;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  margin-left: 0.5rem /* 8px */;
  margin-right: 0.5rem /* 8px */;
  border-radius: 0.25rem /* 4px */;
  padding: 0.5rem 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
  cursor: pointer;
  font-weight: 700;
  transition: color 250ms;
  transition: box-shadow 200ms ease-in-out;
  &:hover {
    color: #ff9419;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 2px;
  }
`;
