import { Absence } from 'src/interfaces/absence';

import { SET_ABSENCES, SET_LOADING } from './absences.types';

interface AbsenceState {
  loading: boolean;
  error?: string;
  absences: Absence[];
  filters: {
    page?: number;
    from?: Date;
    to?: Date;
    type?: string;
  };
}

const initialState: AbsenceState = {
  loading: true,
  error: null,
  absences: [],
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
        absences: action.absences,
      };

    default:
      return state;
  }
};

export default reducer;
