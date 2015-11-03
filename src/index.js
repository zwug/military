const {render} = require('react-dom');

const routes = require('./routes');
require('jquery');
require('bootstrap/dist/js/bootstrap');

render(
  routes,
  document.getElementById('root')
);
