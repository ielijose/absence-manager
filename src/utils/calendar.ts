import { Absence } from '@interfaces/absence';
import { Event } from '@interfaces/event';
import { differenceInCalendarDays } from 'date-fns';

import { formatDate } from './dates';

export function transformAbsenceToEvent(absence: Absence): Event {
  const note = absence.member_note ? `(${absence.member_note})` : '';
  const title = `${absence.member.name}'s absence`;
  const event = {
    title,
    description: `${title} due to ${absence.absence_type} ${note}`,
    startTime: absence.start_date,
    endTime: absence.end_date,
  };

  return event;
}

export function generateEventFilename(absence: Absence): string {
  const startDate = formatDate(absence.start_date);
  const endDate = formatDate(absence.end_date);
  const dates = absence.start_date === absence.end_date ? `(${startDate})` : `(${startDate}-${endDate})`;
  return `${absence.member.name}'s absence ${dates}.ics`;
}

export function calculatePeriod(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const period = differenceInCalendarDays(end, start) + 1;

  const text = startDate === endDate ? 'day' : 'days';

  return `${period} ${text}`;
}
