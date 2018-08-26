import React from 'react';
import ReactDOM from 'react-dom';
import {DogYears} from './components/DogYears';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DogYears/>, document.getElementById('root'));
registerServiceWorker();
