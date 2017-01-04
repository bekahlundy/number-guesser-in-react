import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application.jsx';

require('./reset.css');
require('./styles.scss');

ReactDOM.render(<Application />, document.querySelector('.application'))
