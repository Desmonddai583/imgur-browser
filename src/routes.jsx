var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Topic = require('./components/topic');
var ImageDetail = require('./components/image-detail');

module.exports = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="topics/:id" name="topics" component={Topic} />
      <Route path="images/:id" name="images" component={ImageDetail} />
    </Route>
  </Router>
)