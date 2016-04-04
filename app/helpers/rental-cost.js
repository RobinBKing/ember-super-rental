import Ember from 'ember';

export function rentalCost(params) {
  var rentalPrice = params[0].get('cost');

  if (rentalPrice ) {
    if (rentalPrice > 149){
      return '$$$$';
    } else if (rentalPrice > 99){
      return '$$$';
    } else if (rentalPrice > 49){
      return '$$';
    } else if (rentalPrice < 50){
      return '$';
    }
  }
}

export default Ember.Helper.helper(rentalCost);
