const React = require('react');
const {Router, Route} = require('react-router');
const createHashHistory = require('history/lib/createHashHistory');
const App = require('components/App');
const DRL = require('components/schemas/DRL');

const history = createHashHistory({
  queryKey: false
});

module.exports = (
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="schemas/DRL" component={DRL}/>
    </Route>
  </Router>
);
