import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  serializeIntoHash(hash, typeClass, snapshot, options) {
    Ember.merge(hash, this.serialize(snapshot, options));
  },

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (requestType === 'findAll' || requestType === 'query') {
      payload = { [primaryModelClass.modelName]: payload };
    } else if (requestType === 'findRecord' || requestType === 'createRecord' || requestType === 'updateRecord') {
      var singlePayload = {};
      singlePayload[primaryModelClass.modelName] = payload;
      payload = singlePayload;
    }
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
