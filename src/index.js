import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './sass/main.scss';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import movieReducer from './store/reducers/movieReducer';
import thunk from 'redux-thunk';

const store = createStore(movieReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
