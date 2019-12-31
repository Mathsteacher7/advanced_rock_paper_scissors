import React from 'react';
import { render } from '@testing-library/react'
import Home from './Home';

test('<Home />', () => {
    const { container, getByTestId } = render(<Home />);
    expect(container.firstChild).toMatchSnapshot();
    expect(getByTestId('hometitle').textContent).toBe('Let\'s play a game!')
})