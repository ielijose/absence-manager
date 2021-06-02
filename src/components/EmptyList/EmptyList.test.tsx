import { initializeStore } from '@store/index';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';

import EmptyList from './index';

describe('<EmptyList/>', () => {
  let component;
  let mockDispatch;

  beforeEach(() => {
    const store = initializeStore({
      absences: { absences: [] },
    });

    const originalDispatch = store.dispatch;
    store.dispatch = jest.fn(originalDispatch);
    mockDispatch = store.dispatch;

    component = render(
      <Provider store={store}>
        <EmptyList />
      </Provider>
    );
  });

  test('should render an empty list message', () => {
    component.getByText("Sorry, we couldn't find any absences for your search.");
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
