import { test } from 'qunit';
import moduleForAcceptance from 'mariacalderon/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list projects');

test('should redirect to projects route', function (assert) {
	visit('/');
  	andThen(function() {
    	assert.equal(currentURL(), '/projects', 'should redirect automatically');
  	});
});

test('should list available projects.', function (assert) {
	visit('/');
  	andThen(function() {
    	assert.equal(find('.listing').length, 3, 'should see 3 listings');
  	});
});

test('should link to information about the company.', function (assert) {
	visit('/');
  	click('a:contains("About")');
  	andThen(function() {
    	assert.equal(currentURL(), '/about', 'should navigate to about');
  	});
});

test('should link to contact information', function (assert) {
  	visit('/');
  	click('a:contains("Contact")');
  	andThen(function() {
    	assert.equal(currentURL(), '/contact', 'should navigate to contact');
  	});
});

test('should filter the list of projects by name.', function (assert) {
	visit('/');
  	fillIn('.list-filter input', 'frida');
  	keyEvent('.list-filter input', 'keyup', 69);
  	andThen(function() {
    	assert.equal(find('.listing').length, 1, 'should show 1 listing');
    	assert.equal(find('.listing .ember-view:contains("Frida")').length, 1, 'should contain 1 listing with name Frida');
  	});
});

test('should show details for a specific project', function (assert) {
	visit('/projects');
  	click('a:contains("Frida")');
  	andThen(function() {
    	assert.equal(currentURL(), '/projects/frida', 'should navigate to show route');
    	assert.equal(find('.show-listing h2').text(), "Frida", 'should list project title');
    	assert.equal(find('.description').length, 1, 'should list a description of the property');
  	});
});

test('visiting /', function(assert) {
	visit('/');

	andThen(function() {
    	assert.equal(currentURL(), '/projects');
  	});
});
