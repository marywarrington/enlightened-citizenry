import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var url = 'http://congress.api.sunlightfoundation.com/bills?apikey=c1ea92cc48034bd9bb5d333898f200f3';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
