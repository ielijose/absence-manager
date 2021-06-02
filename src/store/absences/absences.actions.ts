/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { searchAbsences } from '@services/absenceService';

import { SET_ABSENCES, SET_ERROR, SET_FILTERS, SET_LOADING } from './absences.types';

export const showLoading = () => async (dispatch) => {
  const action = {
    type: SET_LOADING,
  };

  dispatch(action);
};

export const fetchAbsences = (fromScratch = false) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { filters } = getState().absences;
    try {
      const filtersToApply = filters;
      if (fromScratch) {
        filtersToApply.page = 1;
      }
      const { data: absences, meta, total } = await searchAbsences(filters);

      const action = {
        type: SET_ABSENCES,
        payload: {
          absences,
          meta,
          total,
        },
      };

      dispatch(action);
    } catch (e) {
      const action = {
        type: SET_ERROR,
        payload: e.message,
      };
      dispatch(action);
    }
  };
};

export const setFilters = (filters) => async (dispatch) => {
  const action = {
    type: SET_FILTERS,
    payload: {
      filters,
    },
  };

  await dispatch(action);
};

export const clearFilters = (filters) => async (dispatch) => {
  await dispatch(setFilters(filters));
  dispatch(fetchAbsences());
};

export const changePage = (page) => async (dispatch) => {
  await dispatch(setFilters({ page }));
  dispatch(fetchAbsences());
};
