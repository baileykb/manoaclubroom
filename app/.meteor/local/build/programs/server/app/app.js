var require = meteorInstall({"imports":{"api":{"club":{"club.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/api/club/club.js                                                                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.export({
  Clubs: () => Clubs,
  ClubSchema: () => ClubSchema
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let SimpleSchema;
module.link("simpl-schema", {
  default(v) {
    SimpleSchema = v;
  }

}, 1);
let Tracker;
module.link("meteor/tracker", {
  Tracker(v) {
    Tracker = v;
  }

}, 2);

/** Create a Meteor collection. */
const Clubs = new Mongo.Collection('Clubs');
/** Create a schema to constrain the structure of documents associated with this collection. */

const ClubSchema = new SimpleSchema({
  name: String,
  location: String,
  time: String,
  interest: String,
  image: String,
  description: String,
  owner: String
}, {
  tracker: Tracker
});
/** Attach this schema to the collection. */

Clubs.attachSchema(ClubSchema);
/** Make the collection and schema available to other code. */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/api/club/index.js                                                                                      //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.link("./club.js");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"interest":{"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/api/interest/index.js                                                                                  //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.link("./interest.js");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"interest.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/api/interest/interest.js                                                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.export({
  Interests: () => Interests,
  InterestSchema: () => InterestSchema
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let SimpleSchema;
module.link("simpl-schema", {
  default(v) {
    SimpleSchema = v;
  }

}, 1);
let Tracker;
module.link("meteor/tracker", {
  Tracker(v) {
    Tracker = v;
  }

}, 2);

/** Create a Meteor collection. */
const Interests = new Mongo.Collection('Interests');
/** Create a schema to constrain the structure of documents associated with this collection. */

const InterestSchema = new SimpleSchema({
  interest: String
}, {
  tracker: Tracker
});
/** Attach this schema to the collection. */

Interests.attachSchema(InterestSchema);
/** Make the collection and schema available to other code. */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"profile":{"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/api/profile/index.js                                                                                   //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.link("./profile.js");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"profile.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/api/profile/profile.js                                                                                 //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.export({
  Profiles: () => Profiles,
  ProfileSchema: () => ProfileSchema
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let SimpleSchema;
module.link("simpl-schema", {
  default(v) {
    SimpleSchema = v;
  }

}, 1);
let Tracker;
module.link("meteor/tracker", {
  Tracker(v) {
    Tracker = v;
  }

}, 2);

/** Create a Meteor collection. */
const Profiles = new Mongo.Collection('Profiles');
/** Create a schema to constrain the structure of documents associated with this collection. */

const ProfileSchema = new SimpleSchema({
  name: String,
  interests: String,
  major: String,
  owner: String
}, {
  tracker: Tracker
});
/** Attach this schema to the collection. */

Profiles.attachSchema(ProfileSchema);
/** Make the collection and schema available to other code. */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"stuff":{"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/api/stuff/index.js                                                                                     //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.link("./stuff.js");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"stuff.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/api/stuff/stuff.js                                                                                     //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.export({
  Stuffs: () => Stuffs,
  StuffSchema: () => StuffSchema
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let SimpleSchema;
module.link("simpl-schema", {
  default(v) {
    SimpleSchema = v;
  }

}, 1);
let Tracker;
module.link("meteor/tracker", {
  Tracker(v) {
    Tracker = v;
  }

}, 2);

/** Create a Meteor collection. */
const Stuffs = new Mongo.Collection('Stuffs');
/** Create a schema to constrain the structure of documents associated with this collection. */

const StuffSchema = new SimpleSchema({
  name: String,
  quantity: Number,
  owner: String,
  condition: {
    type: String,
    allowedValues: ['excellent', 'good', 'fair', 'poor'],
    defaultValue: 'good'
  }
}, {
  tracker: Tracker
});
/** Attach this schema to the collection. */

Stuffs.attachSchema(StuffSchema);
/** Make the collection and schema available to other code. */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"startup":{"both":{"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/startup/both/index.js                                                                                  //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.link("/imports/api/stuff");
module.link("/imports/api/club");
module.link("/imports/api/profile");
module.link("/imports/api/interest");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"accounts.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/startup/server/accounts.js                                                                             //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Accounts;
module.link("meteor/accounts-base", {
  Accounts(v) {
    Accounts = v;
  }

}, 1);
let Roles;
module.link("meteor/alanning:roles", {
  Roles(v) {
    Roles = v;
  }

}, 2);

/* eslint-disable no-console */
function createUser(email, password, role) {
  console.log(`  Creating user ${email}.`);
  const userID = Accounts.createUser({
    username: email,
    email: email,
    password: password
  });

  if (role === 'admin') {
    Roles.addUsersToRoles(userID, 'admin');
  }

  if (role === 'clubAdmin') {
    Roles.addUsersToRoles(userID, 'clubAdmin');
  }
}
/** When running app for first time, pass a settings file to set up a default user account. */


if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.map(({
      email,
      password,
      role
    }) => createUser(email, password, role));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"club.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/startup/server/club.js                                                                                 //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Roles;
module.link("meteor/alanning:roles", {
  Roles(v) {
    Roles = v;
  }

}, 1);
let Clubs;
module.link("../../api/club/club.js", {
  Clubs(v) {
    Clubs = v;
  }

}, 2);

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Clubs.insert(data);
}
/** Initialize the collection if empty. */


if (Clubs.find().count() === 0) {
  if (Meteor.settings.defaultClubs) {
    console.log('Creating default clubs.');
    Meteor.settings.defaultClubs.map(data => addData(data));
  }
}
/** This subscription publishes only the documents associated with the logged in user */


Meteor.publish('Clubs', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Clubs.find({
      owner: username
    });
  }

  return this.ready();
});
/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */

Meteor.publish('ClubsSuperAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Clubs.find();
  }

  return this.ready();
});
Meteor.publish('ClubsClubAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'clubAdmin')) {
    return Clubs.find();
  }

  return this.ready();
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/startup/server/index.js                                                                                //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.link("./accounts.js");
module.link("./stuff.js");
module.link("./club.js");
module.link("./profile.js");
module.link("./interest.js");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"interest.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/startup/server/interest.js                                                                             //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Roles;
module.link("meteor/alanning:roles", {
  Roles(v) {
    Roles = v;
  }

}, 1);
let Interests;
module.link("../../api/interest/interest.js", {
  Interests(v) {
    Interests = v;
  }

}, 2);

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.interest}`);
  Interests.insert(data);
}
/** Initialize the collection if empty. */


if (Interests.find().count() === 0) {
  if (Meteor.settings.defaultInterests) {
    console.log('Creating default interests.');
    Meteor.settings.defaultInterests.map(data => addData(data));
  }
}
/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */


Meteor.publish('Interests', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Interests.find();
  }

  return this.ready();
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"profile.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/startup/server/profile.js                                                                              //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Roles;
module.link("meteor/alanning:roles", {
  Roles(v) {
    Roles = v;
  }

}, 1);
let Profiles;
module.link("../../api/profile/profile.js", {
  Profiles(v) {
    Profiles = v;
  }

}, 2);

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Profiles.insert(data);
}
/** Initialize the collection if empty. */


if (Profiles.find().count() === 0) {
  if (Meteor.settings.defaultProfiles) {
    console.log('Creating default profiles.');
    Meteor.settings.defaultProfiles.map(data => addData(data));
  }
}
/** This subscription publishes only the documents associated with the logged in user */


Meteor.publish('Profiles', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Profiles.find({
      owner: username
    });
  }

  return this.ready();
});
/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */

Meteor.publish('ProfileAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Profiles.find();
  }

  return this.ready();
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"stuff.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/startup/server/stuff.js                                                                                //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Roles;
module.link("meteor/alanning:roles", {
  Roles(v) {
    Roles = v;
  }

}, 1);
let Stuffs;
module.link("../../api/stuff/stuff.js", {
  Stuffs(v) {
    Stuffs = v;
  }

}, 2);

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
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
    const username = Meteor.users.findOne(this.userId).username;
    return Stuffs.find({
      owner: username
    });
  }

  return this.ready();
});
/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */

Meteor.publish('StuffAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Stuffs.find();
  }

  return this.ready();
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"server":{"main.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/main.js                                                                                                 //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.link("/imports/startup/both");
module.link("/imports/startup/server");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".jsx"
  ]
});

require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY2x1Yi9jbHViLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9jbHViL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9pbnRlcmVzdC9pbmRleC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvaW50ZXJlc3QvaW50ZXJlc3QuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3Byb2ZpbGUvaW5kZXguanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3Byb2ZpbGUvcHJvZmlsZS5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvc3R1ZmYvaW5kZXguanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N0dWZmL3N0dWZmLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvYm90aC9pbmRleC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9hY2NvdW50cy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9jbHViLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2ludGVyZXN0LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL3Byb2ZpbGUuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvc3RhcnR1cC9zZXJ2ZXIvc3R1ZmYuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tYWluLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydCIsIkNsdWJzIiwiQ2x1YlNjaGVtYSIsIk1vbmdvIiwibGluayIsInYiLCJTaW1wbGVTY2hlbWEiLCJkZWZhdWx0IiwiVHJhY2tlciIsIkNvbGxlY3Rpb24iLCJuYW1lIiwiU3RyaW5nIiwibG9jYXRpb24iLCJ0aW1lIiwiaW50ZXJlc3QiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwib3duZXIiLCJ0cmFja2VyIiwiYXR0YWNoU2NoZW1hIiwiSW50ZXJlc3RzIiwiSW50ZXJlc3RTY2hlbWEiLCJQcm9maWxlcyIsIlByb2ZpbGVTY2hlbWEiLCJpbnRlcmVzdHMiLCJtYWpvciIsIlN0dWZmcyIsIlN0dWZmU2NoZW1hIiwicXVhbnRpdHkiLCJOdW1iZXIiLCJjb25kaXRpb24iLCJ0eXBlIiwiYWxsb3dlZFZhbHVlcyIsImRlZmF1bHRWYWx1ZSIsIk1ldGVvciIsIkFjY291bnRzIiwiUm9sZXMiLCJjcmVhdGVVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsInJvbGUiLCJjb25zb2xlIiwibG9nIiwidXNlcklEIiwidXNlcm5hbWUiLCJhZGRVc2Vyc1RvUm9sZXMiLCJ1c2VycyIsImZpbmQiLCJjb3VudCIsInNldHRpbmdzIiwiZGVmYXVsdEFjY291bnRzIiwibWFwIiwiYWRkRGF0YSIsImRhdGEiLCJpbnNlcnQiLCJkZWZhdWx0Q2x1YnMiLCJwdWJsaXNoIiwidXNlcklkIiwiZmluZE9uZSIsInJlYWR5IiwidXNlcklzSW5Sb2xlIiwiZGVmYXVsdEludGVyZXN0cyIsImRlZmF1bHRQcm9maWxlcyIsImRlZmF1bHREYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUFDQyxPQUFLLEVBQUMsTUFBSUEsS0FBWDtBQUFpQkMsWUFBVSxFQUFDLE1BQUlBO0FBQWhDLENBQWQ7QUFBMkQsSUFBSUMsS0FBSjtBQUFVSixNQUFNLENBQUNLLElBQVAsQ0FBWSxjQUFaLEVBQTJCO0FBQUNELE9BQUssQ0FBQ0UsQ0FBRCxFQUFHO0FBQUNGLFNBQUssR0FBQ0UsQ0FBTjtBQUFROztBQUFsQixDQUEzQixFQUErQyxDQUEvQztBQUFrRCxJQUFJQyxZQUFKO0FBQWlCUCxNQUFNLENBQUNLLElBQVAsQ0FBWSxjQUFa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OztBQUNBekIsTUFBTSxDQUFDc0IsT0FBUCxDQUFlLFlBQWYsRUFBNkIsU0FBU0EsT0FBVCxHQUFtQjtBQUM5QyxNQUFJLEtBQUtDLE1BQUwsSUFBZXJCLEtBQUssQ0FBQ3dCLFlBQU4sQ0FBbUIsS0FBS0gsTUFBeEIsRUFBZ0MsT0FBaEMsQ0FBbkIsRUFBNkQ7QUFDM0QsV0FBTy9CLE1BQU0sQ0FBQ3FCLElBQVAsRUFBUDtBQUNEOztBQUNELFNBQU8sS0FBS1ksS0FBTCxFQUFQO0FBQ0QsQ0FMRCxFOzs7Ozs7Ozs7OztBQzVCQTVELE1BQU0sQ0FBQ0ssSUFBUCxDQUFZLHVCQUFaO0FBQXFDTCxNQUFNLENBQUNLLElBQVAsQ0FBWSx5QkFBWixFIiwiZmlsZSI6Ii9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5pbXBvcnQgU2ltcGxlU2NoZW1hIGZyb20gJ3NpbXBsLXNjaGVtYSc7XG5pbXBvcnQgeyBUcmFja2VyIH0gZnJvbSAnbWV0ZW9yL3RyYWNrZXInO1xuXG4vKiogQ3JlYXRlIGEgTWV0ZW9yIGNvbGxlY3Rpb24uICovXG5jb25zdCBDbHVicyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdDbHVicycpO1xuXG4vKiogQ3JlYXRlIGEgc2NoZW1hIHRvIGNvbnN0cmFpbiB0aGUgc3RydWN0dXJlIG9mIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb2xsZWN0aW9uLiAqL1xuY29uc3QgQ2x1YlNjaGVtYSA9IG5ldyBTaW1wbGVTY2hlbWEoe1xuICBuYW1lOiBTdHJpbmcsXG4gIGxvY2F0aW9uOiBTdHJpbmcsXG4gIHRpbWU6IFN0cmluZyxcbiAgaW50ZXJlc3Q6IFN0cmluZyxcbiAgaW1hZ2U6IFN0cmluZyxcbiAgZGVzY3JpcHRpb246IFN0cmluZyxcbiAgb3duZXI6IFN0cmluZyxcbn0sIHsgdHJhY2tlcjogVHJhY2tlciB9KTtcblxuLyoqIEF0dGFjaCB0aGlzIHNjaGVtYSB0byB0aGUgY29sbGVjdGlvbi4gKi9cbkNsdWJzLmF0dGFjaFNjaGVtYShDbHViU2NoZW1hKTtcblxuLyoqIE1ha2UgdGhlIGNvbGxlY3Rpb24gYW5kIHNjaGVtYSBhdmFpbGFibGUgdG8gb3RoZXIgY29kZS4gKi9cbmV4cG9ydCB7IENsdWJzLCBDbHViU2NoZW1hIH07XG4iLCJpbXBvcnQgJy4vY2x1Yi5qcyc7XG4iLCJpbXBvcnQgJy4vaW50ZXJlc3QuanMnO1xuIiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuaW1wb3J0IFNpbXBsZVNjaGVtYSBmcm9tICdzaW1wbC1zY2hlbWEnO1xuaW1wb3J0IHsgVHJhY2tlciB9IGZyb20gJ21ldGVvci90cmFja2VyJztcblxuLyoqIENyZWF0ZSBhIE1ldGVvciBjb2xsZWN0aW9uLiAqL1xuY29uc3QgSW50ZXJlc3RzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ0ludGVyZXN0cycpO1xuXG4vKiogQ3JlYXRlIGEgc2NoZW1hIHRvIGNvbnN0cmFpbiB0aGUgc3RydWN0dXJlIG9mIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb2xsZWN0aW9uLiAqL1xuY29uc3QgSW50ZXJlc3RTY2hlbWEgPSBuZXcgU2ltcGxlU2NoZW1hKHtcbiAgaW50ZXJlc3Q6IFN0cmluZyxcbn0sIHsgdHJhY2tlcjogVHJhY2tlciB9KTtcblxuLyoqIEF0dGFjaCB0aGlzIHNjaGVtYSB0byB0aGUgY29sbGVjdGlvbi4gKi9cbkludGVyZXN0cy5hdHRhY2hTY2hlbWEoSW50ZXJlc3RTY2hlbWEpO1xuXG4vKiogTWFrZSB0aGUgY29sbGVjdGlvbiBhbmQgc2NoZW1hIGF2YWlsYWJsZSB0byBvdGhlciBjb2RlLiAqL1xuZXhwb3J0IHsgSW50ZXJlc3RzLCBJbnRlcmVzdFNjaGVtYSB9O1xuIiwiaW1wb3J0ICcuL3Byb2ZpbGUuanMnO1xuIiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuaW1wb3J0IFNpbXBsZVNjaGVtYSBmcm9tICdzaW1wbC1zY2hlbWEnO1xuaW1wb3J0IHsgVHJhY2tlciB9IGZyb20gJ21ldGVvci90cmFja2VyJztcblxuLyoqIENyZWF0ZSBhIE1ldGVvciBjb2xsZWN0aW9uLiAqL1xuY29uc3QgUHJvZmlsZXMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignUHJvZmlsZXMnKTtcblxuLyoqIENyZWF0ZSBhIHNjaGVtYSB0byBjb25zdHJhaW4gdGhlIHN0cnVjdHVyZSBvZiBkb2N1bWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29sbGVjdGlvbi4gKi9cbmNvbnN0IFByb2ZpbGVTY2hlbWEgPSBuZXcgU2ltcGxlU2NoZW1hKHtcbiAgbmFtZTogU3RyaW5nLFxuICBpbnRlcmVzdHM6IFN0cmluZyxcbiAgbWFqb3I6IFN0cmluZyxcbiAgb3duZXI6IFN0cmluZyxcbn0sIHsgdHJhY2tlcjogVHJhY2tlciB9KTtcblxuLyoqIEF0dGFjaCB0aGlzIHNjaGVtYSB0byB0aGUgY29sbGVjdGlvbi4gKi9cblByb2ZpbGVzLmF0dGFjaFNjaGVtYShQcm9maWxlU2NoZW1hKTtcblxuLyoqIE1ha2UgdGhlIGNvbGxlY3Rpb24gYW5kIHNjaGVtYSBhdmFpbGFibGUgdG8gb3RoZXIgY29kZS4gKi9cbmV4cG9ydCB7IFByb2ZpbGVzLCBQcm9maWxlU2NoZW1hIH07XG4iLCJpbXBvcnQgJy4vc3R1ZmYuanMnO1xuIiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuaW1wb3J0IFNpbXBsZVNjaGVtYSBmcm9tICdzaW1wbC1zY2hlbWEnO1xuaW1wb3J0IHsgVHJhY2tlciB9IGZyb20gJ21ldGVvci90cmFja2VyJztcblxuLyoqIENyZWF0ZSBhIE1ldGVvciBjb2xsZWN0aW9uLiAqL1xuY29uc3QgU3R1ZmZzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ1N0dWZmcycpO1xuXG4vKiogQ3JlYXRlIGEgc2NoZW1hIHRvIGNvbnN0cmFpbiB0aGUgc3RydWN0dXJlIG9mIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb2xsZWN0aW9uLiAqL1xuY29uc3QgU3R1ZmZTY2hlbWEgPSBuZXcgU2ltcGxlU2NoZW1hKHtcbiAgbmFtZTogU3RyaW5nLFxuICBxdWFudGl0eTogTnVtYmVyLFxuICBvd25lcjogU3RyaW5nLFxuICBjb25kaXRpb246IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgYWxsb3dlZFZhbHVlczogWydleGNlbGxlbnQnLCAnZ29vZCcsICdmYWlyJywgJ3Bvb3InXSxcbiAgICBkZWZhdWx0VmFsdWU6ICdnb29kJyxcbiAgfSxcbn0sIHsgdHJhY2tlcjogVHJhY2tlciB9KTtcblxuLyoqIEF0dGFjaCB0aGlzIHNjaGVtYSB0byB0aGUgY29sbGVjdGlvbi4gKi9cblN0dWZmcy5hdHRhY2hTY2hlbWEoU3R1ZmZTY2hlbWEpO1xuXG4vKiogTWFrZSB0aGUgY29sbGVjdGlvbiBhbmQgc2NoZW1hIGF2YWlsYWJsZSB0byBvdGhlciBjb2RlLiAqL1xuZXhwb3J0IHsgU3R1ZmZzLCBTdHVmZlNjaGVtYSB9O1xuIiwiaW1wb3J0ICcvaW1wb3J0cy9hcGkvc3R1ZmYnO1xuaW1wb3J0ICcvaW1wb3J0cy9hcGkvY2x1Yic7XG5pbXBvcnQgJy9pbXBvcnRzL2FwaS9wcm9maWxlJztcbmltcG9ydCAnL2ltcG9ydHMvYXBpL2ludGVyZXN0JztcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgQWNjb3VudHMgfSBmcm9tICdtZXRlb3IvYWNjb3VudHMtYmFzZSc7XG5pbXBvcnQgeyBSb2xlcyB9IGZyb20gJ21ldGVvci9hbGFubmluZzpyb2xlcyc7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblxuZnVuY3Rpb24gY3JlYXRlVXNlcihlbWFpbCwgcGFzc3dvcmQsIHJvbGUpIHtcbiAgY29uc29sZS5sb2coYCAgQ3JlYXRpbmcgdXNlciAke2VtYWlsfS5gKTtcbiAgY29uc3QgdXNlcklEID0gQWNjb3VudHMuY3JlYXRlVXNlcih7XG4gICAgdXNlcm5hbWU6IGVtYWlsLFxuICAgIGVtYWlsOiBlbWFpbCxcbiAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gIH0pO1xuICBpZiAocm9sZSA9PT0gJ2FkbWluJykge1xuICAgIFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySUQsICdhZG1pbicpO1xuICB9XG4gIGlmIChyb2xlID09PSAnY2x1YkFkbWluJykge1xuICAgIFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySUQsICdjbHViQWRtaW4nKTtcbiAgfVxufVxuXG4vKiogV2hlbiBydW5uaW5nIGFwcCBmb3IgZmlyc3QgdGltZSwgcGFzcyBhIHNldHRpbmdzIGZpbGUgdG8gc2V0IHVwIGEgZGVmYXVsdCB1c2VyIGFjY291bnQuICovXG5pZiAoTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG4gIGlmIChNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdEFjY291bnRzKSB7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIHRoZSBkZWZhdWx0IHVzZXIocyknKTtcbiAgICBNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdEFjY291bnRzLm1hcCgoeyBlbWFpbCwgcGFzc3dvcmQsIHJvbGUgfSkgPT4gY3JlYXRlVXNlcihlbWFpbCwgcGFzc3dvcmQsIHJvbGUpKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnQ2Fubm90IGluaXRpYWxpemUgdGhlIGRhdGFiYXNlISAgUGxlYXNlIGludm9rZSBtZXRlb3Igd2l0aCBhIHNldHRpbmdzIGZpbGUuJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgUm9sZXMgfSBmcm9tICdtZXRlb3IvYWxhbm5pbmc6cm9sZXMnO1xuaW1wb3J0IHsgQ2x1YnMgfSBmcm9tICcuLi8uLi9hcGkvY2x1Yi9jbHViLmpzJztcblxuLyoqIEluaXRpYWxpemUgdGhlIGRhdGFiYXNlIHdpdGggYSBkZWZhdWx0IGRhdGEgZG9jdW1lbnQuICovXG5mdW5jdGlvbiBhZGREYXRhKGRhdGEpIHtcbiAgY29uc29sZS5sb2coYCAgQWRkaW5nOiAke2RhdGEubmFtZX0gKCR7ZGF0YS5vd25lcn0pYCk7XG4gIENsdWJzLmluc2VydChkYXRhKTtcbn1cblxuLyoqIEluaXRpYWxpemUgdGhlIGNvbGxlY3Rpb24gaWYgZW1wdHkuICovXG5pZiAoQ2x1YnMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcbiAgaWYgKE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0Q2x1YnMpIHtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgZGVmYXVsdCBjbHVicy4nKTtcbiAgICBNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdENsdWJzLm1hcChkYXRhID0+IGFkZERhdGEoZGF0YSkpO1xuICB9XG59XG5cbi8qKiBUaGlzIHN1YnNjcmlwdGlvbiBwdWJsaXNoZXMgb25seSB0aGUgZG9jdW1lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGUgbG9nZ2VkIGluIHVzZXIgKi9cbk1ldGVvci5wdWJsaXNoKCdDbHVicycsIGZ1bmN0aW9uIHB1Ymxpc2goKSB7XG4gIGlmICh0aGlzLnVzZXJJZCkge1xuICAgIGNvbnN0IHVzZXJuYW1lID0gTWV0ZW9yLnVzZXJzLmZpbmRPbmUodGhpcy51c2VySWQpLnVzZXJuYW1lO1xuICAgIHJldHVybiBDbHVicy5maW5kKHsgb3duZXI6IHVzZXJuYW1lIH0pO1xuICB9XG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XG59KTtcblxuLyoqIFRoaXMgc3Vic2NyaXB0aW9uIHB1Ymxpc2hlcyBhbGwgZG9jdW1lbnRzIHJlZ2FyZGxlc3Mgb2YgdXNlciwgYnV0IG9ubHkgaWYgdGhlIGxvZ2dlZCBpbiB1c2VyIGlzIHRoZSBBZG1pbi4gKi9cbk1ldGVvci5wdWJsaXNoKCdDbHVic1N1cGVyQWRtaW4nLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICBpZiAodGhpcy51c2VySWQgJiYgUm9sZXMudXNlcklzSW5Sb2xlKHRoaXMudXNlcklkLCAnYWRtaW4nKSkge1xuICAgIHJldHVybiBDbHVicy5maW5kKCk7XG4gIH1cbiAgcmV0dXJuIHRoaXMucmVhZHkoKTtcbn0pO1xuXG5NZXRlb3IucHVibGlzaCgnQ2x1YnNDbHViQWRtaW4nLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICBpZiAodGhpcy51c2VySWQgJiYgUm9sZXMudXNlcklzSW5Sb2xlKHRoaXMudXNlcklkLCAnY2x1YkFkbWluJykpIHtcbiAgICByZXR1cm4gQ2x1YnMuZmluZCgpO1xuICB9XG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XG59KTtcbiIsImltcG9ydCAnLi9hY2NvdW50cy5qcyc7XG5pbXBvcnQgJy4vc3R1ZmYuanMnO1xuaW1wb3J0ICcuL2NsdWIuanMnO1xuaW1wb3J0ICcuL3Byb2ZpbGUuanMnO1xuaW1wb3J0ICcuL2ludGVyZXN0LmpzJztcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgUm9sZXMgfSBmcm9tICdtZXRlb3IvYWxhbm5pbmc6cm9sZXMnO1xuaW1wb3J0IHsgSW50ZXJlc3RzIH0gZnJvbSAnLi4vLi4vYXBpL2ludGVyZXN0L2ludGVyZXN0LmpzJztcblxuLyoqIEluaXRpYWxpemUgdGhlIGRhdGFiYXNlIHdpdGggYSBkZWZhdWx0IGRhdGEgZG9jdW1lbnQuICovXG5mdW5jdGlvbiBhZGREYXRhKGRhdGEpIHtcbiAgY29uc29sZS5sb2coYCAgQWRkaW5nOiAke2RhdGEuaW50ZXJlc3R9YCk7XG4gIEludGVyZXN0cy5pbnNlcnQoZGF0YSk7XG59XG5cbi8qKiBJbml0aWFsaXplIHRoZSBjb2xsZWN0aW9uIGlmIGVtcHR5LiAqL1xuaWYgKEludGVyZXN0cy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuICBpZiAoTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRJbnRlcmVzdHMpIHtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgZGVmYXVsdCBpbnRlcmVzdHMuJyk7XG4gICAgTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRJbnRlcmVzdHMubWFwKGRhdGEgPT4gYWRkRGF0YShkYXRhKSk7XG4gIH1cbn1cblxuLyoqIFRoaXMgc3Vic2NyaXB0aW9uIHB1Ymxpc2hlcyBhbGwgZG9jdW1lbnRzIHJlZ2FyZGxlc3Mgb2YgdXNlciwgYnV0IG9ubHkgaWYgdGhlIGxvZ2dlZCBpbiB1c2VyIGlzIHRoZSBBZG1pbi4gKi9cbk1ldGVvci5wdWJsaXNoKCdJbnRlcmVzdHMnLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICBpZiAodGhpcy51c2VySWQgJiYgUm9sZXMudXNlcklzSW5Sb2xlKHRoaXMudXNlcklkLCAnYWRtaW4nKSkge1xuICAgIHJldHVybiBJbnRlcmVzdHMuZmluZCgpO1xuICB9XG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XG59KTtcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgUm9sZXMgfSBmcm9tICdtZXRlb3IvYWxhbm5pbmc6cm9sZXMnO1xuaW1wb3J0IHsgUHJvZmlsZXMgfSBmcm9tICcuLi8uLi9hcGkvcHJvZmlsZS9wcm9maWxlLmpzJztcblxuLyoqIEluaXRpYWxpemUgdGhlIGRhdGFiYXNlIHdpdGggYSBkZWZhdWx0IGRhdGEgZG9jdW1lbnQuICovXG5mdW5jdGlvbiBhZGREYXRhKGRhdGEpIHtcbiAgY29uc29sZS5sb2coYCAgQWRkaW5nOiAke2RhdGEubmFtZX0gKCR7ZGF0YS5vd25lcn0pYCk7XG4gIFByb2ZpbGVzLmluc2VydChkYXRhKTtcbn1cblxuLyoqIEluaXRpYWxpemUgdGhlIGNvbGxlY3Rpb24gaWYgZW1wdHkuICovXG5pZiAoUHJvZmlsZXMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcbiAgaWYgKE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0UHJvZmlsZXMpIHtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgZGVmYXVsdCBwcm9maWxlcy4nKTtcbiAgICBNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdFByb2ZpbGVzLm1hcChkYXRhID0+IGFkZERhdGEoZGF0YSkpO1xuICB9XG59XG5cbi8qKiBUaGlzIHN1YnNjcmlwdGlvbiBwdWJsaXNoZXMgb25seSB0aGUgZG9jdW1lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGUgbG9nZ2VkIGluIHVzZXIgKi9cbk1ldGVvci5wdWJsaXNoKCdQcm9maWxlcycsIGZ1bmN0aW9uIHB1Ymxpc2goKSB7XG4gIGlmICh0aGlzLnVzZXJJZCkge1xuICAgIGNvbnN0IHVzZXJuYW1lID0gTWV0ZW9yLnVzZXJzLmZpbmRPbmUodGhpcy51c2VySWQpLnVzZXJuYW1lO1xuICAgIHJldHVybiBQcm9maWxlcy5maW5kKHsgb3duZXI6IHVzZXJuYW1lIH0pO1xuICB9XG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XG59KTtcblxuLyoqIFRoaXMgc3Vic2NyaXB0aW9uIHB1Ymxpc2hlcyBhbGwgZG9jdW1lbnRzIHJlZ2FyZGxlc3Mgb2YgdXNlciwgYnV0IG9ubHkgaWYgdGhlIGxvZ2dlZCBpbiB1c2VyIGlzIHRoZSBBZG1pbi4gKi9cbk1ldGVvci5wdWJsaXNoKCdQcm9maWxlQWRtaW4nLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICBpZiAodGhpcy51c2VySWQgJiYgUm9sZXMudXNlcklzSW5Sb2xlKHRoaXMudXNlcklkLCAnYWRtaW4nKSkge1xuICAgIHJldHVybiBQcm9maWxlcy5maW5kKCk7XG4gIH1cbiAgcmV0dXJuIHRoaXMucmVhZHkoKTtcbn0pO1xuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBSb2xlcyB9IGZyb20gJ21ldGVvci9hbGFubmluZzpyb2xlcyc7XG5pbXBvcnQgeyBTdHVmZnMgfSBmcm9tICcuLi8uLi9hcGkvc3R1ZmYvc3R1ZmYuanMnO1xuXG4vKiogSW5pdGlhbGl6ZSB0aGUgZGF0YWJhc2Ugd2l0aCBhIGRlZmF1bHQgZGF0YSBkb2N1bWVudC4gKi9cbmZ1bmN0aW9uIGFkZERhdGEoZGF0YSkge1xuICBjb25zb2xlLmxvZyhgICBBZGRpbmc6ICR7ZGF0YS5uYW1lfSAoJHtkYXRhLm93bmVyfSlgKTtcbiAgU3R1ZmZzLmluc2VydChkYXRhKTtcbn1cblxuLyoqIEluaXRpYWxpemUgdGhlIGNvbGxlY3Rpb24gaWYgZW1wdHkuICovXG5pZiAoU3R1ZmZzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG4gIGlmIChNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdERhdGEpIHtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgZGVmYXVsdCBkYXRhLicpO1xuICAgIE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0RGF0YS5tYXAoZGF0YSA9PiBhZGREYXRhKGRhdGEpKTtcbiAgfVxufVxuXG4vKiogVGhpcyBzdWJzY3JpcHRpb24gcHVibGlzaGVzIG9ubHkgdGhlIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIGxvZ2dlZCBpbiB1c2VyICovXG5NZXRlb3IucHVibGlzaCgnU3R1ZmYnLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICBpZiAodGhpcy51c2VySWQpIHtcbiAgICBjb25zdCB1c2VybmFtZSA9IE1ldGVvci51c2Vycy5maW5kT25lKHRoaXMudXNlcklkKS51c2VybmFtZTtcbiAgICByZXR1cm4gU3R1ZmZzLmZpbmQoeyBvd25lcjogdXNlcm5hbWUgfSk7XG4gIH1cbiAgcmV0dXJuIHRoaXMucmVhZHkoKTtcbn0pO1xuXG4vKiogVGhpcyBzdWJzY3JpcHRpb24gcHVibGlzaGVzIGFsbCBkb2N1bWVudHMgcmVnYXJkbGVzcyBvZiB1c2VyLCBidXQgb25seSBpZiB0aGUgbG9nZ2VkIGluIHVzZXIgaXMgdGhlIEFkbWluLiAqL1xuTWV0ZW9yLnB1Ymxpc2goJ1N0dWZmQWRtaW4nLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICBpZiAodGhpcy51c2VySWQgJiYgUm9sZXMudXNlcklzSW5Sb2xlKHRoaXMudXNlcklkLCAnYWRtaW4nKSkge1xuICAgIHJldHVybiBTdHVmZnMuZmluZCgpO1xuICB9XG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XG59KTtcbiIsImltcG9ydCAnL2ltcG9ydHMvc3RhcnR1cC9ib3RoJztcbmltcG9ydCAnL2ltcG9ydHMvc3RhcnR1cC9zZXJ2ZXInO1xuIl19
