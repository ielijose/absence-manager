import { render } from '@testing-library/react';

import Header from './index';

describe('<Header/>', () => {
  test('should render title', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Absence Manager')).toBeInTheDocument();
  });
});
