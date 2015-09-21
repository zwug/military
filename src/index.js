const React = require('react');
const {Router, Route} = require('react-router');
const App = require('components/App');

// React.render(<Router />, document.body);
React.render((
  <Router>
    <Route path="/" component={App} />
  </Router>
), document.body);
