import { format, parseISO } from 'date-fns';

export function formatDate(date: string, formatTo = 'dd.MM.yyyy'): string {
  return format(new Date(parseISO(date)), formatTo);
}
