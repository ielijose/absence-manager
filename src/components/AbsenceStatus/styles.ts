import { ABSENCE_STATUSES, AbsenceStatusType } from '@constants/absence-statuses';
import styled, { css } from 'styled-components';

const { rejected, requested, confirmed } = ABSENCE_STATUSES;

type BadgeProps = {
  status: AbsenceStatusType;
};

export const Badge = styled.div<BadgeProps>`
  width: 5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  font-size: 0.75rem;
  line-height: 0.75rem;

  text-transform: capitalize;

  ${(props) =>
    props.status === confirmed &&
    css`
      background-color: #ecfdf5;
      color: #10b981;
    `}

  ${(props) =>
    props.status === rejected &&
    css`
      background-color: #fef2f2;
      color: #ef4444;
    `}

    ${(props) =>
    props.status === requested &&
    css`
      background-color: #e3f2fd;
      color: #2196f3;
    `}
`;
