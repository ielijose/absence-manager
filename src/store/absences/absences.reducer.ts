import { Absence } from '@interfaces/absence';
import { Meta } from '@interfaces/absenceResponse';
import { Filters } from '@interfaces/filters';

import { SET_ABSENCES, SET_FILTERS, SET_LOADING } from './absences.types';

interface AbsenceState {
  loading: boolean;
  error?: string;
  absences: Absence[];
  total: number;
  meta: Meta;
  filters: Filters;
}

const initialState: AbsenceState = {
  loading: true,
  error: null,
  absences: [],
  total: null,
  meta: null,
  filters: {
    page: 1,
    from: null,
    to: null,
    type: null,
  },
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const reducer = (state = initialState, action): AbsenceState => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SET_ABSENCES:
      return {
        ...state,
        loading: false,
        absences: action.payload.absences,
        meta: action.payload.meta,
      };

    case SET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload.filters,
        },
      };

    default:
      return state;
  }
};

export default reducer;
