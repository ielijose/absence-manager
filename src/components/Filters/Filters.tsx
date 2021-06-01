import { setFilters } from '@store/absences/absences.actions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, FiltersContainer, Input, InputBox, Select } from './styles';

const Filters = (): JSX.Element => {
  const [type, setType] = useState(null);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  const dispatch = useDispatch();

  const onSearch = () => {
    const filters = {
      type,
      from,
      to,
      page: 1,
    };
    dispatch(setFilters(filters));
  };

  const onTypeChange = (e) => {
    setType(e.target.value || null);
  };

  const onFromChange = (e) => {
    setFrom(e.target.value || null);
  };

  const onToChange = (e) => {
    setTo(e.target.value || null);
  };

  return (
    <FiltersContainer>
      <InputBox>
        <Input type="date" name="from" onChange={onFromChange} />
      </InputBox>

      <InputBox>
        <Input type="date" name="to" onChange={onToChange} />
      </InputBox>

      <InputBox>
        <Select name="type" onChange={onTypeChange}>
          <option value="">-- Choose a type --</option>
          <option value="sickness">Sickness </option>
          <option value="vacation">Vacation</option>
        </Select>
      </InputBox>

      <InputBox>
        <Button onClick={onSearch} type="button">
          Search
        </Button>
      </InputBox>
    </FiltersContainer>
  );
};

export default Filters;
