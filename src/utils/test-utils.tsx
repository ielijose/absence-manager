import { initializeStore } from '@store/index';
import { render as rtlRender } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function renderWithState(ui, initialState) {
  const store = initializeStore(initialState);

  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { renderWithState };
