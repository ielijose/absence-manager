import { combineReducers } from 'redux';

import absences from './absences/absences.reducer';

const rootReducer = combineReducers({
  absences,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
