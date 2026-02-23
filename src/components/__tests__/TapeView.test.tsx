import { render, screen } from '@testing-library/react';
import TapeView from '../TapeView';

test('renders tape content correctly', () => {
  render(<TapeView tape={['1', '0', '1']} headPosition={1} />);
  expect(screen.getByText('0')).toBeInTheDocument();
});