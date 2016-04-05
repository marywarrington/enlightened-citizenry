import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var url = 'http://congress.api.sunlightfoundation.com/upcoming_bills?chamber=' + params.entity + '&apikey=c1ea92cc48034bd9bb5d333898f200f3';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
