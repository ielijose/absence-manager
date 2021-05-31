import { FC } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Container: FC = ({ children }) => <StyledContainer>{children}</StyledContainer>;

export default Container;
