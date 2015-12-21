import React from 'react';
const {render} = require('react-dom');
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import {devTools} from 'redux-devtools';
const rootReducer = require('./reducers');
const finalCreateStore = compose(devTools())(createStore);
const store = finalCreateStore(rootReducer);
const routes = require('./routes');

render((
  <div>
    <Provider store={store}>
      {routes}
    </Provider>
  </div>
  ), document.getElementById('root')
);
