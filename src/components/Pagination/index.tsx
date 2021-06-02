import { changePage } from '@store/absences/absences.actions';
import { RootState } from '@store/reducers';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Item, Legend, List, PaginationContainer } from './styles';

const Pagination = (): JSX.Element => {
  const { loading, error, meta } = useSelector((state: RootState) => state.absences);
  const dispatch = useDispatch();

  if (loading || !meta || error !== null) {
    return null;
  }

  const { count, page, pages, from, to } = meta;

  if (count === 0) {
    return null;
  }

  const setPage = (toPage) => {
    dispatch(changePage(toPage));
  };

  const renderItems = () => {
    return [...Array(pages)].map((p, index) => {
      const currentPage = index + 1;
      const isActive = currentPage === page;
      return (
        <Item key={currentPage}>
          <Button
            disabled={isActive}
            onClick={() => {
              setPage(currentPage);
            }}
          >
            {currentPage}
          </Button>
        </Item>
      );
    });
  };

  return (
    <PaginationContainer>
      <Legend>
        Showing {from} to {to} of {count} absences
      </Legend>
      <List>{renderItems()}</List>
    </PaginationContainer>
  );
};

export default React.memo(Pagination);
