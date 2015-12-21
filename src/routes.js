const React = require('react');
const {Router, Route, IndexRoute} = require('react-router');
const createHashHistory = require('history/lib/createHashHistory');
const App = require('components/App');
const DRL = require('components/schemas/DRL');
const Home = require('components/Home');
const Videos = require('components/Videos');
const Outer = require('components/Outer');
const Ebook = require('components/Ebook');

const history = createHashHistory({
  queryKey: false
});

module.exports = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="schemas/DRL" component={DRL}/>
      <Route path="videos" component={Videos}/>
      <Route path="outer" component={Outer}/>
      <Route path="ebook" component={Ebook}/>
    </Route>
  </Router>
);
