import Greeting from './Greeting';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Greeting component', () => {
  test('renders Hello World', () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText(
      'hello world',
      { exact: false }
    );

    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders good to see you if the button was not clicked', () => {
    render(<Greeting />);

    const outputElement = screen.getByText(
      'good to see you',
      {
        exact: false,
      }
    );

    expect(outputElement).toBeInTheDocument();
  });

  test('renders "changed" if the button was clicked', () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.getByAltText(
      'good to see you',
      { exact: false }
    );

    expect(outputElement).toBeInTheDocument();
  });
});
