import { render, screen } from '@testing-library/react';
import App from '../components';


test('renders text', () => {
  render(<App />);
  const text = screen.getByText(/Lakta/i)
  expect(text).toBeInTheDocument()
})
