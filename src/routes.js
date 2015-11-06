const React = require('react');
const {Router, Route} = require('react-router');
const App = require('components/App');
const DRL = require('components/schemas/DRL');

module.exports = (
  <Router>
    <Route path="/" component={App}>
      <Route path="schemas/DRL" component={DRL}/>
    </Route>
  </Router>
);
