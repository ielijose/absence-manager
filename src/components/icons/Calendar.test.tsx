import { render, screen } from '@testing-library/react';

import Calendar from './Calendar';

describe('<Calendar/>', () => {
  test('should render title', () => {
    render(<Calendar />);
    screen.getByTitle('Calendar');
  });
});
