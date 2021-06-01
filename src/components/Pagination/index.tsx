import React from 'react';

import { Item, List, PaginationContainer } from './styles';

const Pagination = (): JSX.Element => {
  return (
    <PaginationContainer>
      <List>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
      </List>
    </PaginationContainer>
  );
};

export default Pagination;
