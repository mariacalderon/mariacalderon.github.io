import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr(),
	designer: DS.attr(),
	image: DS.attr(),
	number: DS.attr(),
	description: DS.attr(),
	video: DS.attr()
});
