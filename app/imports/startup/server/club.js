import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Club } from '../../api/club/club.js';

/** Initialize the database with a default data document. */
function addData(data) {
console.log(`  Adding: ${data.name}`);
  Club.insert(data);
}

/** Initialize the collection if empty. */
if (Club.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Club', function publish() {
  if (this.userId) {
    return Club.find();
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('ClubAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Club.find();
  }
  return this.ready();
});
