import { render } from '@testing-library/react';

import AbsenceStatus from './index';

const date = '2020-12-12T17:03:55.000Z';

describe('<AbsenceStatus/>', () => {
  test('should render rejected', () => {
    const { getByText } = render(<AbsenceStatus rejectedAt={date} confirmedAt={null} />);
    expect(getByText('rejected')).toBeInTheDocument();
  });

  test('should render confirmed', () => {
    const { getByText } = render(<AbsenceStatus rejectedAt={null} confirmedAt={date} />);
    expect(getByText('confirmed')).toBeInTheDocument();
  });

  test('should render requested', () => {
    const { getByText } = render(<AbsenceStatus rejectedAt={null} confirmedAt={null} />);
    expect(getByText('requested')).toBeInTheDocument();
  });
});
