import { render } from '@testing-library/react';

import LoadingSkeleton from './index';

describe('<LoadingSkeleton/>', () => {
  test('should render 10 loading rows', () => {
    const { queryAllByRole } = render(
      <table>
        <tbody>
          <LoadingSkeleton />
        </tbody>
      </table>
    );

    expect(queryAllByRole('row')).toHaveLength(10);
  });
});
