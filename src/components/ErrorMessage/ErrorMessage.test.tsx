import { initializeStore } from '@store/index';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';

import ErrorMessage from './index';

describe('<ErrorMessage/>', () => {
  let component;
  let mockDispatch;

  const ERROR_MESSAGE = 'Error loading absences';

  beforeEach(() => {
    const store = initializeStore({
      absences: { error: ERROR_MESSAGE },
    });

    const originalDispatch = store.dispatch;
    store.dispatch = jest.fn(originalDispatch);
    mockDispatch = store.dispatch;

    component = render(
      <Provider store={store}>
        <ErrorMessage />
      </Provider>
    );
  });

  test('should render an error', () => {
    component.getByText(ERROR_MESSAGE);
  });

  test('should render a clear filter button', () => {
    component.getByText('Clear filters');
  });

  test('should clear filters on click', () => {
    const button = component.getByText('Clear filters');
    fireEvent.click(button);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
