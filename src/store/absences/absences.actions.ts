/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { searchAbsences } from '@services/absenceService';

import { SET_ABSENCES, SET_LOADING } from './absences.types';

export const showLoading = () => async (dispatch) => {
  const action = {
    type: SET_LOADING,
  };

  dispatch(action);
};

export const fetchAbsences = () => async (dispatch) => {
  showLoading();

  const { data: absences } = await searchAbsences();

  const action = {
    type: SET_ABSENCES,
    absences,
  };

  dispatch(action);
};
