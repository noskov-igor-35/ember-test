import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('books', function() {
    this.route('list', { path: '/' });
    this.route('create', { path: '/new'});
    this.route('edit', { path: '/:id/edit'});
  });
});

export default Router;
