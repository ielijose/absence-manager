import { renderWithState } from '@utils/test-utils';

import AbsencesTable from './index';

describe('<AbsencesTable/>', () => {
  let component;

  beforeEach(() => {
    const initialState = {
      absences: {
        loading: false,
        error: null,
        absences: [],
        total: 0,
        meta: null,
        filters: {
          page: 1,
          from: '',
          to: '',
          type: '',
        },
      },
    };

    component = renderWithState(<AbsencesTable />, initialState);
  });

  test('should render title', () => {
    component.getByText('Absences');
  });
});
