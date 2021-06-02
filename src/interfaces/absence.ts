/* eslint-disable camelcase */
import { Member } from './member';

export interface Absence {
  id: number;
  admitter_id?: number;
  admitter_note: string;
  confirmed_at?: string;
  crew_id: number;
  end_date: string;
  member_note: string;
  rejected_at?: string;
  start_date: string;
  absence_type: string;
  user_id: number;
  created_at: string;
  updated_at: string;
  member: Member;
}
