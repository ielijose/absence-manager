import { render } from '@testing-library/react';

import Header from './index';

test('renders a message', () => {
  const { getByText } = render(<Header />);
  expect(getByText('Absence Manager')).toBeInTheDocument();
});
