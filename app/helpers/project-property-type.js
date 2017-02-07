import Ember from 'ember';

const communityPropertyTypes = [
	'Condo',
	'Townhouse',
	'Apartment'
];

export function projectPropertyType([type]/*, hash*/) {
	if (communityPropertyTypes.includes(type)) {
		return 'Community';
	}

	return 'Standalone';
}

export default Ember.Helper.helper(projectPropertyType);