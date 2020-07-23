import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../NavBar';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div)
})

it('renders navbarTitle correctly', () => {
  const { getByTestId } = render(<NavBar />)
  expect(getByTestId('navbarTitle').textContent).toBe('The Spectator')
})