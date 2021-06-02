/* eslint-disable camelcase */
import AbsenceStatus from '@components/AbsenceStatus';
import Filters from '@components/Filters/Filters';
import Calendar from '@components/icons/Calendar';
import Pagination from '@components/Pagination';
import { Capitalize } from '@components/shared/Capitalize';
import { Flex } from '@components/shared/Flex';
import { Absence } from '@interfaces/absence';
import { fetchAbsences } from '@store/absences/absences.actions';
import { RootState } from '@store/reducers';
import { calculatePeriod, generateEventFilename, transformAbsenceToEvent } from '@utils/calendar';
import React, { useEffect } from 'react';
import ICalendarLink from 'react-icalendar-link';
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
          <Td colSpan={7} align="center">
            <ErrorMessage />
          </Td>
        </Tr>
      );
    }
    if (absences.length === 0) {
      return (
        <Tr>
          <Td colSpan={7} align="center">
            <EmptyList />
          </Td>
        </Tr>
      );
    }

    return absences.map((absence: Absence) => {
      const event = transformAbsenceToEvent(absence);
      const filename = generateEventFilename(absence);

      return (
        <Tr key={absence.id}>
          <Td>
            <Flex>
              <MemberImage src={absence.member.image} alt={absence.member.name} />
              {absence.member.name}
            </Flex>
          </Td>
          <Td>{renderAbsenceType(absence.absence_type)}</Td>
          <Td>{calculatePeriod(absence.start_date, absence.end_date)}</Td>
          <Td>{absence.member_note}</Td>
          <Td>
            <AbsenceStatus rejectedAt={absence.rejected_at} confirmedAt={absence.confirmed_at} />
          </Td>
          <Td>{absence.admitter_note}</Td>
          <Td>
            <ICalendarLink event={event} filename={filename}>
              <Calendar />
            </ICalendarLink>
          </Td>
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
            <Th>Add to calendar</Th>
          </tr>
        </THead>
        <tbody>{renderContent()}</tbody>
      </Table>
      <Pagination />
    </Card>
  );
};

export default AbsencesTable;
