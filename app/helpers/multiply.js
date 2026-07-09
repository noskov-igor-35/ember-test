import Ember from 'ember';

export function multiply(params) {
  return params * 100;
}

export default Ember.Helper.helper(multiply);
