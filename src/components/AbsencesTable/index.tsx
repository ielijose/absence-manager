import Filters from '@components/Filters/Filters';
import Pagination from '@components/Pagination';
import React from 'react';

import { Card, CardHead, Table, Th, THead, Title } from './styles';
import TableLoader from './TableLoader';

const AbsencesTable = (): JSX.Element => {
  const renderContent = () => {
    return <TableLoader />;
  };
  return (
    <Card>
      <CardHead>
        <Title>Absences</Title>
        <Filters />
      </CardHead>
      <Table>
        <THead>
          <tr>
            <Th>Member</Th>
            <Th>Type</Th>
            <Th>Period</Th>
            <Th>Member Note</Th>
            <Th>Status</Th>
            <Th>Admitter Note</Th>
          </tr>
        </THead>
        <tbody>{renderContent()}</tbody>
      </Table>
      <Pagination />
    </Card>
  );
};

export default AbsencesTable;
