import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    billsLookupHouse() {
      var params = "house";
      this.sendAction('upcomingBillsLookup', params);
    },
    billsLookupSenate() {
      var params = "senate";
      this.sendAction('upcomingBillsLookup', params);
    }
  }
});
