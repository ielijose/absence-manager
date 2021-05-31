import Container from '@components/Container';
import Header from '@components/Header';
import { FC } from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  padding: 2rem 0;

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const Layout: FC = ({ children }) => (
  <>
    <Header />
    <Container>
      <StyledMain>{children}</StyledMain>
    </Container>
  </>
);

export default Layout;
