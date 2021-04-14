import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Color Coding Exercise/i);
  expect(linkElement).toBeInTheDocument();
});
