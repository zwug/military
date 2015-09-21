const React = require('react');
const {Router, Route} = require('react-router');
const App = require('components/App');

module.exports = (
  <Router>
    <Route path="/" component={App}/>
  </Router>
);
