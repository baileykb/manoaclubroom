import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Requests } from '../../api/club/club.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Requests.insert(data);
}

/** Initialize the collection if empty. */
if (Requests.find().count() === 0) {
  if (Meteor.settings.defaultRequest) {
    console.log('Creating default requests.');
    Meteor.settings.defaultRequest.map(data => addData(data));
  }
}

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('Requests', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Requests.find();
  }
  return this.ready();
});
