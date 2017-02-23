import Ember from 'ember';

export function eachPicture(n/*, hash*/) {
	var indexes = [];
	for(var i = 0; i < n; ++i) {
	    indexes.push(i);
	}
	return indexes;
}

export default Ember.Helper.helper(eachPicture);
