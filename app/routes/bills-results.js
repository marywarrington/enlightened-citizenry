
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var url = 'http://congress.api.sunlightfoundation.com/bills?apikey=c1ea92cc48034bd9bb5d333898f200f3';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});


// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   model(params) {
//     var url = 'http://congress.api.sunlightfoundation.com/'
//     return Ember.RSVP.hash({
//       bills: Ember.$.getJSON(url + 'bills?apikey=c1ea92cc48034bd9bb5d333898f200f3'),
//       sponsor: Ember.$.getJSON(url + 'legislators?bioguide_id=' + params.id + '&apikey=c1ea92cc48034bd9bb5d333898f200f3')
//     });
//     return responseJSON.results;
//   },
//   actions: {
//     sponsorIdLookup(params) {
//       this.transitionTo('bills-results', params.id);
//     }
//   }
// });
