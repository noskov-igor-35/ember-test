import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('book', params.id);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('title', model.get('title'));
    controller.set('author', model.get('author'));
    controller.set('rating', model.get('rating'));
  }
});
