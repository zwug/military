const React = require('react');
const {Router, Route, IndexRoute} = require('react-router');
const createHashHistory = require('history/lib/createHashHistory');
const App = require('components/App');
const DRL = require('components/schemas/DRL');
const PRL = require('components/schemas/PRL');
const Home = require('components/Home');
const Videos = require('components/Videos');
const Outer = require('components/Outer');
const Ebook = require('components/Ebook');
const Parts = require('components/Parts');

const history = createHashHistory({
  queryKey: false
});

module.exports = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="schemas/DRL" component={DRL}/>
      <Route path="schemas/PRL" component={PRL}/>
      <Route path="videos" component={Videos}/>
      <Route path="outer" component={Outer}/>
      <Route path="book/:book" component={Ebook}/>
      <Route path="parts/:partId" component={Parts}/>
    </Route>
  </Router>
);
