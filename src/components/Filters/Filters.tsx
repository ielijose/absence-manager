import { fetchAbsences, setFilters } from '@store/absences/absences.actions';
import { RootState } from '@store/reducers';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, FiltersContainer, Input, InputBox, Select } from './styles';

const Filters = (): JSX.Element => {
  const { filters } = useSelector((state: RootState) => state.absences);

  const { from = '', to = '', type = '' } = filters;
  const dispatch = useDispatch();

  const dispatchFilters = (filtersToApply) => {
    dispatch(setFilters(filtersToApply));
  };

  const onFilter = () => {
    dispatch(fetchAbsences(true));
  };

  const onTypeChange = (e) => {
    dispatchFilters({ type: e.target.value || '' });
  };

  const onFromChange = (e) => {
    dispatchFilters({ from: e.target.value || '' });
  };

  const onToChange = (e) => {
    dispatchFilters({ to: e.target.value || '' });
  };

  return (
    <FiltersContainer>
      <InputBox>
        <Input type="date" name="from" value={from} onChange={onFromChange} />
      </InputBox>

      <InputBox>
        <Input type="date" name="to" value={to} onChange={onToChange} />
      </InputBox>

      <InputBox>
        <Select name="type" value={type} onChange={onTypeChange}>
          <option value="">-- Choose a type --</option>
          <option value="sickness">Sickness </option>
          <option value="vacation">Vacation</option>
        </Select>
      </InputBox>

      <InputBox>
        <Button onClick={onFilter} type="button">
          Filter
        </Button>
      </InputBox>
    </FiltersContainer>
  );
};

export default Filters;
