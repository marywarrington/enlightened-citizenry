import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('contact-results', params.zip);
    },
    committeeLookup(params) {
      this.transitionTo('committee-results', params);
    },
    billsLookup() {
      this.transitionTo('bills-results');
    }
  }
});
