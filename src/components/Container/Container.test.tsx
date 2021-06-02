import { render } from '@testing-library/react';

import Container from './index';

describe('<Container/>', () => {
  test('should render chidlren text', () => {
    const text = 'Lorem ipsum';
    const { getByText } = render(<Container>{text}</Container>);
    expect(getByText(text)).toBeInTheDocument();
  });
});
