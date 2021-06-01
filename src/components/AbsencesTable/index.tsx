import AbsenceStatus from '@components/AbsenceStatus';
import Filters from '@components/Filters/Filters';
import Pagination from '@components/Pagination';
import { Absence } from '@interfaces/absence';
import { fetchAbsences } from '@store/absences/absences.actions';
import { RootState } from '@store/reducers';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card, CardHead, Flex, MemberImage, Table, Td, Th, THead, Title, Tr } from './styles';
import TableLoader from './TableLoader';

const AbsencesTable = (): JSX.Element => {
  const { loading, absences } = useSelector((state: RootState) => state.absences);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAbsences());
  }, [dispatch]);

  const renderContent = () => {
    if (loading) {
      return <TableLoader />;
    }

    return absences.map((absence: Absence) => {
      return (
        <Tr key={absence.id}>
          <Td>
            <Flex>
              <MemberImage src={absence.member.image} alt={absence.member.name} />
              {absence.member.name}
            </Flex>
          </Td>
          <Td>{absence.absence_type}</Td>
          <Td>{absence.member.name}</Td>
          <Td>{absence.member_note}</Td>
          <Td>
            <AbsenceStatus rejectedAt={absence.rejected_at} confirmedAt={absence.confirmed_at} />
          </Td>
          <Td>{absence.admitter_note}</Td>
        </Tr>
      );
    });
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
