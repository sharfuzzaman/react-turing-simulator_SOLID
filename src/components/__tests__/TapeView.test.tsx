import { expect, test, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'; 
import TapeView from '../TapeView';

describe('TapeView Component', () => {
  test('renders tape content correctly from a string', () => {
    // PASSING A STRING TO MATCH THE "tape: string" PROP DEFINITION
    render(<TapeView tape="101" headPosition={1} />);

    // Verify individual symbols are rendered
    expect(screen.getByText('0')).toBeInTheDocument();
    
    // Use getAllByText for repeating symbols like '1'
    const ones = screen.getAllByText('1');
    expect(ones).toHaveLength(2);
  });

  test('applies active class to the correct head position', () => {
    render(<TapeView tape="101" headPosition={1} />);
    
    const cells = screen.getAllByText(/[01]/);
    // Index 1 (the '0') should have the 'active' class
    expect(cells[1]).toHaveClass('active');
    // Index 0 should NOT have the 'active' class
    expect(cells[0]).not.toHaveClass('active');
  });
});
