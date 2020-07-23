import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../NavBar';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer'
afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div)
})

it('renders navbarTitle correctly', () => {
  const { getByTestId } = render(<NavBar />)
  expect(getByTestId('navbarTitle').textContent).toBe('The Spectator')
})

it('matches snapshot', () => {
  const tree = renderer.create(<NavBar />).toJSON();
  expect(tree).toMatchSnapshot();
})
