import { Button } from '@components/Filters/styles';
import { Flex } from '@components/shared/Flex';
import { clearFilters } from '@store/absences/absences.actions';
import React from 'react';
import { useDispatch } from 'react-redux';

import { StyledMessage } from './styles';

const EmptyList = (): JSX.Element => {
  const dispatch = useDispatch();
  const handleClearFilters = () => {
    dispatch(clearFilters({ page: 1, from: '', to: '', type: '' }));
  };
  return (
    <Flex justifyContent="center" direction="column" alignItems="center">
      <StyledMessage>Sorry, we couldn&apos;t find any absences for your search.</StyledMessage>
      <Button onClick={handleClearFilters}>Clear filters</Button>
    </Flex>
  );
};

export default EmptyList;
