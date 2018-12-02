import { shallow } from './enzyme.js'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  shallow(<App/>);
});
