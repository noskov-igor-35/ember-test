import Ember from 'ember';

export default Ember.Controller.extend({
  searchQuery: '',
  tagQuery: '',

  filteredBooks: Ember.computed('model.@each', 'searchQuery', 'tagQuery', function() {
    var books = this.get('model');
    var search = this.get('searchQuery').toLowerCase().trim();
    var tag = this.get('tagQuery').toLowerCase().trim();

    return books.filter(function(book) {
      var matchesSearch = !search ||
        book.get('title').toLowerCase().indexOf(search) !== -1 ||
        book.get('author').toLowerCase().indexOf(search) !== -1;

      var matchesTag = !tag ||
        (book.get('tags') || []).some(function(t) {
          return t.toLowerCase().indexOf(tag) !== -1;
        });

      return matchesSearch && matchesTag;
    });
  }),

  actions: {
    deleteBook(book) {
      if (confirm(`Удалить книгу «${book.get('title')}»?`)) {
        book.destroyRecord().then(() => {
          this.transitionToRoute('books');
        }).catch(() => {
          alert('Ошибка при удалении');
        });
      }
    },
    filterByTag(tag) {
      if (this.get('tagQuery') === tag) {
        this.set('tagQuery', '');
      } else {
        this.set('tagQuery', tag);
      }
    },
    resetFilters() {
      this.set('searchQuery', '');
      this.set('tagQuery', '');
    }
  }
});
