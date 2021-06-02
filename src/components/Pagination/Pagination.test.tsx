import { renderWithState } from '@utils/test-utils';

import Pagination from './index';

describe('<Pagination/>', () => {
  let component;

  beforeEach(() => {
    component = renderWithState(<Pagination />, {
      absences: {
        loading: false,
        error: null,
        meta: {
          count: 42,
          page: 1,
          items: 10,
          pages: 5,
          from: 1,
          to: 10,
        },
      },
    });
  });

  test('should render title', () => {
    // component.debug();
  });

  test('should render pagination legend', () => {
    component.getByText('Showing 1 to 10 of 42 absences');
  });

  test('should render buttons', async () => {
    const buttons = await component.findAllByRole('button');
    expect(buttons).toHaveLength(5);
  });

  test('should render null', () => {
    const { container } = renderWithState(<Pagination />, {
      absences: {
        loading: false,
        error: null,
        meta: {
          count: 0,
          page: 1,
          items: 10,
          pages: 5,
          from: 1,
          to: 10,
        },
      },
    });

    expect(container.firstChild).toBeNull();
  });
});
