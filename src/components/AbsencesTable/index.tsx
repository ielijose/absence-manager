/* eslint-disable camelcase */
import AbsenceStatus from '@components/AbsenceStatus';
import Filters from '@components/Filters/Filters';
import Pagination from '@components/Pagination';
import { Capitalize } from '@components/shared/Capitalize';
import { Flex } from '@components/shared/Flex';
import { Absence } from '@interfaces/absence';
import { fetchAbsences } from '@store/absences/absences.actions';
import { RootState } from '@store/reducers';
import { differenceInCalendarDays } from 'date-fns';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EmptyList from './EmptyList';
import ErrorMessage from './ErrorMessage';
import { Card, CardHead, MemberImage, Table, Td, Th, THead, Title, Tr } from './styles';
import TableLoader from './TableLoader';

const AbsencesTable = (): JSX.Element => {
  const { loading, error, absences } = useSelector((state: RootState) => state.absences);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAbsences());
  }, [dispatch]);

  const renderPeriod = ({ start_date, end_date }) => {
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);
    const period = differenceInCalendarDays(endDate, startDate) + 1;

    const text = start_date === end_date ? 'day' : 'days';

    return `${period} ${text}`;
  };

  const renderAbsenceType = (type) => {
    let emojiType = null;
    if (type === 'sickness') {
      emojiType = '🤒';
    } else if (type === 'vacation') {
      emojiType = '🏖️';
    }

    return (
      <Capitalize>
        {type} {emojiType}
      </Capitalize>
    );
  };

  const renderContent = () => {
    if (loading) {
      return <TableLoader />;
    }

    if (error) {
      return (
        <Tr>
          <Td colSpan={6} align="center">
            <ErrorMessage />
          </Td>
        </Tr>
      );
    }
    if (absences.length === 0) {
      return (
        <Tr>
          <Td colSpan={6} align="center">
            <EmptyList />
          </Td>
        </Tr>
      );
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
          <Td>{renderAbsenceType(absence.absence_type)}</Td>
          <Td>{renderPeriod(absence)}</Td>
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
