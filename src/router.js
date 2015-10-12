const React = require('react');
const {Router, Route} = require('react-router');
const App = require('components/App');
const Prl = require('components/schemas/Prl');

module.exports = (
  <Router>
    <Route path="/" component={App}>
      <Route path="schemas/prl" component={Prl}/>
    </Route>
  </Router>
);
