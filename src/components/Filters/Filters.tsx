import React from 'react';

import { Button, FiltersContainer, Input, InputBox, Select } from './styles';

const Filters = (): JSX.Element => {
  return (
    <FiltersContainer>
      <InputBox>
        <Input type="date" name="" id="" />
      </InputBox>

      <InputBox>
        <Input type="date" name="" id="" />
      </InputBox>

      <InputBox>
        <Select name="" id="">
          <option value="">Sickness</option>
          <option value="">Vacation</option>
        </Select>
      </InputBox>

      <InputBox>
        <Button type="button">Search</Button>
      </InputBox>
    </FiltersContainer>
  );
};

export default Filters;
