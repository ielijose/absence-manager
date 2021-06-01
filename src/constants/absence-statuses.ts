export type AbsenceStatusType = 'rejected' | 'requested' | 'confirmed';

export const ABSENCE_STATUSES: Record<AbsenceStatusType, AbsenceStatusType> = {
  requested: 'requested',
  rejected: 'rejected',
  confirmed: 'confirmed',
};
