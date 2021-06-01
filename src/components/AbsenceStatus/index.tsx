import { ABSENCE_STATUSES, AbsenceStatusType } from '@constants/absence-statuses';
import React, { FC } from 'react';

import { Badge } from './styles';

const { rejected, requested, confirmed } = ABSENCE_STATUSES;

type AbsenceStatusProps = {
  rejectedAt: Date;
  confirmedAt: Date;
};

const AbsenceStatus: FC<AbsenceStatusProps> = ({ confirmedAt, rejectedAt }) => {
  let status: AbsenceStatusType = requested;
  if (rejectedAt !== null) {
    status = rejected;
  }
  if (confirmedAt !== null) {
    status = confirmed;
  }

  return <Badge status={status}>{status}</Badge>;
};

export default AbsenceStatus;
