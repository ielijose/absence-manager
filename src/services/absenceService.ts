import httpClient from '@utils/httpClient';
import { AbsenceResponse } from 'src/interfaces/absenceResponse';

export const searchAbsences = (): Promise<AbsenceResponse> => {
  return httpClient.get('/api/v1/absences').then(({ data }) => {
    return data;
  });
};
