const React = require('react');
const {Route, Router, DefaultRoute} = require('react-router');
const App = require('components/App');

module.exports = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={App} />
  </Route>
);
