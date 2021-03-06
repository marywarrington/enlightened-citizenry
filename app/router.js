import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contact-results', {path: '/contact-results/:zip'});
  this.route('committee-results', {path: '/committee-results/:entity'});
  this.route('bills-results');
  this.route('upcoming-bills-results', {path: '/upcoming-bills-results/:entity'});
});

export default Router;
