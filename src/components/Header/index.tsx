import Container from '@components/Container';
import Link from 'next/link';
import React, { FC } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #f97316;

  color: white;
  padding: 1rem 0.5rem;
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
