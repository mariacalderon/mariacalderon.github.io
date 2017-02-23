import Ember from 'ember';

export function projectDescriptionHtmlFormat(param/*, hash*/) {
  return Ember.String.htmlSafe(param);
}

export default Ember.Helper.helper(projectDescriptionHtmlFormat);
