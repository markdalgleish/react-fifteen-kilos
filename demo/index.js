require('./index.html');

import React from 'react';

import fifteenKilos from '../src';
fifteenKilos(React);

import { render } from 'react-dom';

const App = () => (
  <div>
    <h1>react-fifteen-kilos</h1>

    <h2>Demo</h2>

    <p>By default, any text node in React can equal any size.</p>

    <p>Thanks to fifteen-kilos, we can now ensure that all text nodes are exactly 15KB.</p>
  </div>
);

const outlet = document.getElementById('outlet');
render(<App />, outlet);
