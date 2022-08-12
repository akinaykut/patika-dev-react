import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from "./App";



test('Header test', () => { 
    
    render(<App />);
    const header = screen.getByText("Emoji Search");
    expect(header).toBeInTheDocument();

 });


test('Element list test', () => { 

    render(<App />);
    const items = screen.getByTestId("Emoji");
    expect(items.length).toEqual(20);


 })

 test('Filter test', () => { 

     render(<App />)   
    const input = screen.getByTestId("input");

    userEvent.type(input, "confu");

    const result = screen.getByText('Confused');

    expect(result).toBeInTheDocument();
  })

  test('Is it able to copy test', () => { 

    render(<App />);
    const clicks = screen.getAllByTestId("Emoji");
    expect(clicks[0]).toHaveAttribute("data-clipboard-text");
   })
