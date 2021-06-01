import { Absence } from './absence';

export interface Meta {
  count: number;
  page: number;
  items: number;
  pages: number;
  from: number;
  to: number;
}

export interface AbsenceResponse {
  total: number;
  data: Absence[];
  meta: Meta;
}
