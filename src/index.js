import React from 'react';
import ReactDOM from 'react-dom';
import Log from './log';
import Calc from './calc';

import css from './main.css'
import img from './nicole3.jpg';

const calc = new Calc();
const log = new Log();

log.log(calc.add(1, 2, 3));

const el = document.createElement('img');
el.src = img;
document.body.appendChild(el);

const App = () => <p>Hello World!</p>;
ReactDOM.render(<App />, document.getElementById('root'));
