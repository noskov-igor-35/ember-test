import Ember from 'ember';

export function multiply(params) {
  return params * 10;
}

export default Ember.Helper.helper(multiply);
