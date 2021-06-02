import { AbsenceResponse } from '@interfaces/absenceResponse';
import { Filters } from '@interfaces/filters';
import httpClient from '@utils/httpClient';

function tranformFilters(filters: Filters) {
  return Object.keys(filters)
    .filter((key) => filters[key] !== '')
    .map((key) => `${key}=${filters[key]}`)
    .join('&');
}

export const searchAbsences = (filters: Filters): Promise<AbsenceResponse> => {
  const params = tranformFilters(filters);

  return httpClient.get(`/api/v1/absences?${params}`).then(({ data }) => {
    return data;
  });
};
