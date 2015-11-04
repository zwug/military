require('jquery');
require('bootstrap/dist/js/bootstrap');
import React from 'react';
const {render} = require('react-dom');
import {combineReducers, createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import {devTools} from 'redux-devtools';
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';
const reducers = require('./reducers');

const rootReducer = combineReducers({
  reducers
});

const finalCreateStore = compose(devTools())(createStore);

const store = finalCreateStore(rootReducer);
const routes = require('./routes');

render((
  <div>
    <Provider store={store}>
      {routes}
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>
  ), document.getElementById('root')
);
