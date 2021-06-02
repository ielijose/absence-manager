import { Absence } from '@interfaces/absence';
import { absencesMock } from '@tests/mocks/absencesMock';

import { calculatePeriod, generateEventFilename, transformAbsenceToEvent } from './calendar';

describe('@utils/calendar', () => {
  const absence: Absence = absencesMock[0];

  it('should transform absece to event', () => {
    const expected = {
      description: "Mike's absence due to sickness ",
      endTime: '2021-01-13',
      startTime: '2021-01-13',
      title: "Mike's absence",
    };
    expect(transformAbsenceToEvent(absence)).toStrictEqual(expected);
  });

  it('should generate event filename', () => {
    const expected = "Mike's absence (13.01.2021).ics";
    expect(generateEventFilename(absence)).toBe(expected);
  });

  it('should calculate period between two equals dates', () => {
    const expected = '1 day';
    expect(calculatePeriod(absence.start_date, absence.end_date)).toBe(expected);
  });

  it('should calculate period between two differents dates', () => {
    const expected = '31 days';
    const endDate = '2021-02-12';
    expect(calculatePeriod(absence.start_date, endDate)).toBe(expected);
  });
});
