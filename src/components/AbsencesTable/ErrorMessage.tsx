import { Button } from '@components/Filters/styles';
import { Flex } from '@components/shared/Flex';
import { clearFilters } from '@store/absences/absences.actions';
import { RootState } from '@store/reducers';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledError = styled.p`
  color: red;
  font-size: 1rem; ;
`;

const ErrorMessage = (): JSX.Element => {
  const { error } = useSelector((state: RootState) => state.absences);

  const dispatch = useDispatch();
  const handleClearFilters = () => {
    dispatch(clearFilters({ page: 1, from: '', to: '', type: '' }));
  };
  return (
    <Flex justifyContent="center" direction="column" alignItems="center">
      <StyledError>{error}</StyledError>
      <Button onClick={handleClearFilters}>Clear filter</Button>
    </Flex>
  );
};

export default ErrorMessage;
