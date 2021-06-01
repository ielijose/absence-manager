import Container from '@components/Container';
import Link from 'next/link';
import React, { FC } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #ff9419;

  color: white;
  padding: 1rem 2rem;
  box-shadow: rgb(0 0 0 / 20%) 0px -3px 10px 6px;
`;

const StyledTitle = styled.a`
  font-size: 1.5rem;
  margin: 0;
  color: white;
  text-decoration: none;
`;

const Header: FC = () => {
  return (
    <StyledHeader>
      <Container>
        <Link href="/" passHref>
          <StyledTitle>Absence Manager</StyledTitle>
        </Link>
      </Container>
    </StyledHeader>
  );
};

export default Header;
