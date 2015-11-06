import React from 'react';
const {render} = require('react-dom');
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import {devTools} from 'redux-devtools';
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';
const rootReducer = require('./reducers');

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
