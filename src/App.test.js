import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  window.matchMedia = window.matchMedia || function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
});

test('renders the terminal container', async () => {
  render(<App />);
  
  // Use `findByTestId` to account for asynchronous rendering
  const terminalContainer = await screen.findByTestId('terminal-container');
  expect(terminalContainer).toBeInTheDocument();
});
