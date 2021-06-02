import { render } from '@testing-library/react';

import Layout from './index';

describe('<Layout/>', () => {
  test('should render children text', () => {
    const text = 'Lorem ipsum';
    const { getByText } = render(<Layout>{text}</Layout>);
    expect(getByText(text)).toBeInTheDocument();
  });

  test('should render header', () => {
    const { getByText } = render(<Layout />);
    expect(getByText('Absence Manager')).toBeInTheDocument();
  });
});
