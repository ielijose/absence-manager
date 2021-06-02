import { renderWithState } from '@utils/test-utils';

import HomePage from '../../pages/index';

describe('<HomePage/>', () => {
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

    component = renderWithState(<HomePage />, initialState);
  });

  test('should render title', () => {
    component.getByText('Absences');
  });
});
