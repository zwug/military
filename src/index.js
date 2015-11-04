require('jquery');
require('bootstrap/dist/js/bootstrap');
import React from 'react';
const {render} = require('react-dom');
import {combineReducers, createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import {createHistory} from 'history';
import {devTools} from 'redux-devtools';
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';

import {
  ReduxRouter,
  routerStateReducer,
  reduxReactRouter
} from 'redux-router';

const routes = require('./routes');

const reducer = combineReducers({
  router: routerStateReducer
});

const store = compose(
  reduxReactRouter({
    routes,
    createHistory
  }),
  devTools()
)(createStore)(reducer);

render((
  <div>
    <Provider store={store}>
      <ReduxRouter>
        {routes}
      </ReduxRouter>
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>
  ), document.getElementById('root')
);
