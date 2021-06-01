/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { searchAbsences } from '@services/absenceService';

import { SET_ABSENCES, SET_FILTERS, SET_LOADING } from './absences.types';

export const showLoading = () => async (dispatch) => {
  const action = {
    type: SET_LOADING,
  };

  dispatch(action);
};

export const fetchAbsences = () => async (dispatch, getState) => {
  dispatch(showLoading());
  const { filters } = getState().absences;
  const { data: absences, meta } = await searchAbsences(filters);

  const action = {
    type: SET_ABSENCES,
    payload: {
      absences,
      meta,
    },
  };

  dispatch(action);
};

export const setFilters = (filters) => async (dispatch) => {
  showLoading();
  const action = {
    type: SET_FILTERS,
    payload: {
      filters,
    },
  };

  await dispatch(action);
  dispatch(fetchAbsences());
};
