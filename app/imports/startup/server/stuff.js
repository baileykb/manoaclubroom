import { Meteor } from 'meteor/meteor';
<<<<<<< HEAD
=======
import { Roles } from 'meteor/alanning:roles';
>>>>>>> issue-3
import { Stuffs } from '../../api/stuff/stuff.js';

/** Initialize the database with a default data document. */
function addData(data) {
<<<<<<< HEAD
  console.log(`  Adding: ${data.name}`);
=======
  console.log(`  Adding: ${data.name} (${data.owner})`);
>>>>>>> issue-3
  Stuffs.insert(data);
}

/** Initialize the collection if empty. */
if (Stuffs.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Stuff', function publish() {
  if (this.userId) {
<<<<<<< HEAD
=======
    const username = Meteor.users.findOne(this.userId).username;
    return Stuffs.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('StuffAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
>>>>>>> issue-3
    return Stuffs.find();
  }
  return this.ready();
});
