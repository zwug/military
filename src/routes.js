const React = require('react');
const {Route} = require('react-router');
const App = require('components/App');
const Prl = require('components/schemas/Prl');

module.exports = (
  <Route path="/" component={App}>
    <Route path="schemas/prl" component={Prl}/>
  </Route>
);
