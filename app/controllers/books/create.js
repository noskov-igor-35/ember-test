import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      var book = this.store.createRecord('book', {
        title: this.get('title'),
        author: this.get('author'),
        rating: parseFloat(this.get('rating'))
      });
      book.save().then(() => {
        this.transitionToRoute('books');
      }).catch(() => {
        alert('Ошибка при сохранении');
      });
    },
    cancel() {
      this.transitionToRoute('books');
    }
  }
});
