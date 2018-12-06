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
  interest2: String,
  image: String,
  website: String,
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
  owner: String,
  image: String
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

Meteor.publish('ClubsAdminSuper', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Clubs.find();
  }

  return this.ready();
});
Meteor.publish('ClubsAdminNormal', function publish() {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY2x1Yi9jbHViLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9jbHViL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9pbnRlcmVzdC9pbmRleC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvaW50ZXJlc3QvaW50ZXJlc3QuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3Byb2ZpbGUvaW5kZXguanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3Byb2ZpbGUvcHJvZmlsZS5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvc3R1ZmYvaW5kZXguanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N0dWZmL3N0dWZmLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvYm90aC9pbmRleC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9hY2NvdW50cy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9jbHViLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2ludGVyZXN0LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL3Byb2ZpbGUuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvc3RhcnR1cC9zZXJ2ZXIvc3R1ZmYuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tYWluLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydCIsIkNsdWJzIiwiQ2x1YlNjaGVtYSIsIk1vbmdvIiwibGluayIsInYiLCJTaW1wbGVTY2hlbWEiLCJkZWZhdWx0IiwiVHJhY2tlciIsIkNvbGxlY3Rpb24iLCJuYW1lIiwiU3RyaW5nIiwibG9jYXRpb24iLCJ0aW1lIiwiaW50ZXJlc3QiLCJpbnRlcmVzdDIiLCJpbWFnZSIsIndlYnNpdGUiLCJkZXNjcmlwdGlvbiIsIm93bmVyIiwidHJhY2tlciIsImF0dGFjaFNjaGVtYSIsIkludGVyZXN0cyIsIkludGVyZXN0U2NoZW1hIiwiUHJvZmlsZXMiLCJQcm9maWxlU2NoZW1hIiwiaW50ZXJlc3RzIiwibWFqb3IiLCJTdHVmZnMiLCJTdHVmZlNjaGVtYSIsInF1YW50aXR5IiwiTnVtYmVyIiwiY29uZGl0aW9uIiwidHlwZSIsImFsbG93ZWRWYWx1ZXMiLCJkZWZhdWx0VmFsdWUiLCJNZXRlb3IiLCJBY2NvdW50cyIsIlJvbGVzIiwiY3JlYXRlVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJyb2xlIiwiY29uc29sZSIsImxvZyIsInVzZXJJRCIsInVzZXJuYW1lIiwiYWRkVXNlcnNUb1JvbGVzIiwidXNlcnMiLCJmaW5kIiwiY291bnQiLCJzZXR0aW5ncyIsImRlZmF1bHRBY2NvdW50cyIsIm1hcCIsImFkZERhdGEiLCJkYXRhIiwiaW5zZXJ0IiwiZGVmYXVsdENsdWJzIiwicHVibGlzaCIsInVzZXJJZCIsImZpbmRPbmUiLCJyZWFkeSIsInVzZXJJc0luUm9sZSIsImRlZmF1bHRJbnRlcmVzdHMiLCJkZWZhdWx0UHJvZmlsZXMiLCJkZWZhdWx0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBQ0MsT0FBSyxFQUFDLE1BQUlBLEtBQVg7QUFBaUJDLFlBQVUsRUFBQyxNQUFJQTtBQUFoQyxDQUFkO0FBQTJELElBQUlDLEtBQUo7QUFBVUosTUFBTSxDQUFDSyxJQUFQLENBQVksY0FBWixFQUEyQjtBQUFDRCxPQUFLLENBQUNFLENBQUQsRUFBRztBQUFDRixTQUFLLEdBQUNFLENBQU47QUFBUTs7QUFBbEIsQ0FBM0IsRUFBK0MsQ0FBL0M7QUFBa0QsSUFBSUMsWUFBSjtBQUFpQlAsTUFB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QixNQUFNLENBQUNxQixJQUFQLENBQVk7QUFBRTlCLFdBQUssRUFBRTJCO0FBQVQsS0FBWixDQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFLZSxLQUFMLEVBQVA7QUFDRCxDQU5EO0FBUUE7O0FBQ0F6QixNQUFNLENBQUNzQixPQUFQLENBQWUsWUFBZixFQUE2QixTQUFTQSxPQUFULEdBQW1CO0FBQzlDLE1BQUksS0FBS0MsTUFBTCxJQUFlckIsS0FBSyxDQUFDd0IsWUFBTixDQUFtQixLQUFLSCxNQUF4QixFQUFnQyxPQUFoQyxDQUFuQixFQUE2RDtBQUMzRCxXQUFPL0IsTUFBTSxDQUFDcUIsSUFBUCxFQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFLWSxLQUFMLEVBQVA7QUFDRCxDQUxELEU7Ozs7Ozs7Ozs7O0FDNUJBOUQsTUFBTSxDQUFDSyxJQUFQLENBQVksdUJBQVo7QUFBcUNMLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZLHlCQUFaLEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbmltcG9ydCBTaW1wbGVTY2hlbWEgZnJvbSAnc2ltcGwtc2NoZW1hJztcbmltcG9ydCB7IFRyYWNrZXIgfSBmcm9tICdtZXRlb3IvdHJhY2tlcic7XG5cbi8qKiBDcmVhdGUgYSBNZXRlb3IgY29sbGVjdGlvbi4gKi9cbmNvbnN0IENsdWJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ0NsdWJzJyk7XG5cbi8qKiBDcmVhdGUgYSBzY2hlbWEgdG8gY29uc3RyYWluIHRoZSBzdHJ1Y3R1cmUgb2YgZG9jdW1lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbGxlY3Rpb24uICovXG5jb25zdCBDbHViU2NoZW1hID0gbmV3IFNpbXBsZVNjaGVtYSh7XG4gIG5hbWU6IFN0cmluZyxcbiAgbG9jYXRpb246IFN0cmluZyxcbiAgdGltZTogU3RyaW5nLFxuICBpbnRlcmVzdDogU3RyaW5nLFxuICBpbnRlcmVzdDI6IFN0cmluZyxcbiAgaW1hZ2U6IFN0cmluZyxcbiAgd2Vic2l0ZTogU3RyaW5nLFxuICBkZXNjcmlwdGlvbjogU3RyaW5nLFxuICBvd25lcjogU3RyaW5nLFxufSwgeyB0cmFja2VyOiBUcmFja2VyIH0pO1xuXG4vKiogQXR0YWNoIHRoaXMgc2NoZW1hIHRvIHRoZSBjb2xsZWN0aW9uLiAqL1xuQ2x1YnMuYXR0YWNoU2NoZW1hKENsdWJTY2hlbWEpO1xuXG4vKiogTWFrZSB0aGUgY29sbGVjdGlvbiBhbmQgc2NoZW1hIGF2YWlsYWJsZSB0byBvdGhlciBjb2RlLiAqL1xuZXhwb3J0IHsgQ2x1YnMsIENsdWJTY2hlbWEgfTtcbiIsImltcG9ydCAnLi9jbHViLmpzJztcbiIsImltcG9ydCAnLi9pbnRlcmVzdC5qcyc7XG4iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5pbXBvcnQgU2ltcGxlU2NoZW1hIGZyb20gJ3NpbXBsLXNjaGVtYSc7XG5pbXBvcnQgeyBUcmFja2VyIH0gZnJvbSAnbWV0ZW9yL3RyYWNrZXInO1xuXG4vKiogQ3JlYXRlIGEgTWV0ZW9yIGNvbGxlY3Rpb24uICovXG5jb25zdCBJbnRlcmVzdHMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignSW50ZXJlc3RzJyk7XG5cbi8qKiBDcmVhdGUgYSBzY2hlbWEgdG8gY29uc3RyYWluIHRoZSBzdHJ1Y3R1cmUgb2YgZG9jdW1lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbGxlY3Rpb24uICovXG5jb25zdCBJbnRlcmVzdFNjaGVtYSA9IG5ldyBTaW1wbGVTY2hlbWEoe1xuICBpbnRlcmVzdDogU3RyaW5nLFxufSwgeyB0cmFja2VyOiBUcmFja2VyIH0pO1xuXG4vKiogQXR0YWNoIHRoaXMgc2NoZW1hIHRvIHRoZSBjb2xsZWN0aW9uLiAqL1xuSW50ZXJlc3RzLmF0dGFjaFNjaGVtYShJbnRlcmVzdFNjaGVtYSk7XG5cbi8qKiBNYWtlIHRoZSBjb2xsZWN0aW9uIGFuZCBzY2hlbWEgYXZhaWxhYmxlIHRvIG90aGVyIGNvZGUuICovXG5leHBvcnQgeyBJbnRlcmVzdHMsIEludGVyZXN0U2NoZW1hIH07XG4iLCJpbXBvcnQgJy4vcHJvZmlsZS5qcyc7XG4iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5pbXBvcnQgU2ltcGxlU2NoZW1hIGZyb20gJ3NpbXBsLXNjaGVtYSc7XG5pbXBvcnQgeyBUcmFja2VyIH0gZnJvbSAnbWV0ZW9yL3RyYWNrZXInO1xuXG4vKiogQ3JlYXRlIGEgTWV0ZW9yIGNvbGxlY3Rpb24uICovXG5jb25zdCBQcm9maWxlcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdQcm9maWxlcycpO1xuXG4vKiogQ3JlYXRlIGEgc2NoZW1hIHRvIGNvbnN0cmFpbiB0aGUgc3RydWN0dXJlIG9mIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb2xsZWN0aW9uLiAqL1xuY29uc3QgUHJvZmlsZVNjaGVtYSA9IG5ldyBTaW1wbGVTY2hlbWEoe1xuICBuYW1lOiBTdHJpbmcsXG4gIGludGVyZXN0czogU3RyaW5nLFxuICBtYWpvcjogU3RyaW5nLFxuICBvd25lcjogU3RyaW5nLFxuICBpbWFnZTogU3RyaW5nLFxufSwgeyB0cmFja2VyOiBUcmFja2VyIH0pO1xuXG4vKiogQXR0YWNoIHRoaXMgc2NoZW1hIHRvIHRoZSBjb2xsZWN0aW9uLiAqL1xuUHJvZmlsZXMuYXR0YWNoU2NoZW1hKFByb2ZpbGVTY2hlbWEpO1xuXG4vKiogTWFrZSB0aGUgY29sbGVjdGlvbiBhbmQgc2NoZW1hIGF2YWlsYWJsZSB0byBvdGhlciBjb2RlLiAqL1xuZXhwb3J0IHsgUHJvZmlsZXMsIFByb2ZpbGVTY2hlbWEgfTtcbiIsImltcG9ydCAnLi9zdHVmZi5qcyc7XG4iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5pbXBvcnQgU2ltcGxlU2NoZW1hIGZyb20gJ3NpbXBsLXNjaGVtYSc7XG5pbXBvcnQgeyBUcmFja2VyIH0gZnJvbSAnbWV0ZW9yL3RyYWNrZXInO1xuXG4vKiogQ3JlYXRlIGEgTWV0ZW9yIGNvbGxlY3Rpb24uICovXG5jb25zdCBTdHVmZnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignU3R1ZmZzJyk7XG5cbi8qKiBDcmVhdGUgYSBzY2hlbWEgdG8gY29uc3RyYWluIHRoZSBzdHJ1Y3R1cmUgb2YgZG9jdW1lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbGxlY3Rpb24uICovXG5jb25zdCBTdHVmZlNjaGVtYSA9IG5ldyBTaW1wbGVTY2hlbWEoe1xuICBuYW1lOiBTdHJpbmcsXG4gIHF1YW50aXR5OiBOdW1iZXIsXG4gIG93bmVyOiBTdHJpbmcsXG4gIGNvbmRpdGlvbjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBhbGxvd2VkVmFsdWVzOiBbJ2V4Y2VsbGVudCcsICdnb29kJywgJ2ZhaXInLCAncG9vciddLFxuICAgIGRlZmF1bHRWYWx1ZTogJ2dvb2QnLFxuICB9LFxufSwgeyB0cmFja2VyOiBUcmFja2VyIH0pO1xuXG4vKiogQXR0YWNoIHRoaXMgc2NoZW1hIHRvIHRoZSBjb2xsZWN0aW9uLiAqL1xuU3R1ZmZzLmF0dGFjaFNjaGVtYShTdHVmZlNjaGVtYSk7XG5cbi8qKiBNYWtlIHRoZSBjb2xsZWN0aW9uIGFuZCBzY2hlbWEgYXZhaWxhYmxlIHRvIG90aGVyIGNvZGUuICovXG5leHBvcnQgeyBTdHVmZnMsIFN0dWZmU2NoZW1hIH07XG4iLCJpbXBvcnQgJy9pbXBvcnRzL2FwaS9zdHVmZic7XG5pbXBvcnQgJy9pbXBvcnRzL2FwaS9jbHViJztcbmltcG9ydCAnL2ltcG9ydHMvYXBpL3Byb2ZpbGUnO1xuaW1wb3J0ICcvaW1wb3J0cy9hcGkvaW50ZXJlc3QnO1xuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBBY2NvdW50cyB9IGZyb20gJ21ldGVvci9hY2NvdW50cy1iYXNlJztcbmltcG9ydCB7IFJvbGVzIH0gZnJvbSAnbWV0ZW9yL2FsYW5uaW5nOnJvbGVzJztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXG5mdW5jdGlvbiBjcmVhdGVVc2VyKGVtYWlsLCBwYXNzd29yZCwgcm9sZSkge1xuICBjb25zb2xlLmxvZyhgICBDcmVhdGluZyB1c2VyICR7ZW1haWx9LmApO1xuICBjb25zdCB1c2VySUQgPSBBY2NvdW50cy5jcmVhdGVVc2VyKHtcbiAgICB1c2VybmFtZTogZW1haWwsXG4gICAgZW1haWw6IGVtYWlsLFxuICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgfSk7XG4gIGlmIChyb2xlID09PSAnYWRtaW4nKSB7XG4gICAgUm9sZXMuYWRkVXNlcnNUb1JvbGVzKHVzZXJJRCwgJ2FkbWluJyk7XG4gIH1cbiAgaWYgKHJvbGUgPT09ICdjbHViQWRtaW4nKSB7XG4gICAgUm9sZXMuYWRkVXNlcnNUb1JvbGVzKHVzZXJJRCwgJ2NsdWJBZG1pbicpO1xuICB9XG59XG5cbi8qKiBXaGVuIHJ1bm5pbmcgYXBwIGZvciBmaXJzdCB0aW1lLCBwYXNzIGEgc2V0dGluZ3MgZmlsZSB0byBzZXQgdXAgYSBkZWZhdWx0IHVzZXIgYWNjb3VudC4gKi9cbmlmIChNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcbiAgaWYgKE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0QWNjb3VudHMpIHtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgdGhlIGRlZmF1bHQgdXNlcihzKScpO1xuICAgIE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0QWNjb3VudHMubWFwKCh7IGVtYWlsLCBwYXNzd29yZCwgcm9sZSB9KSA9PiBjcmVhdGVVc2VyKGVtYWlsLCBwYXNzd29yZCwgcm9sZSkpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdDYW5ub3QgaW5pdGlhbGl6ZSB0aGUgZGF0YWJhc2UhICBQbGVhc2UgaW52b2tlIG1ldGVvciB3aXRoIGEgc2V0dGluZ3MgZmlsZS4nKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBSb2xlcyB9IGZyb20gJ21ldGVvci9hbGFubmluZzpyb2xlcyc7XG5pbXBvcnQgeyBDbHVicyB9IGZyb20gJy4uLy4uL2FwaS9jbHViL2NsdWIuanMnO1xuXG4vKiogSW5pdGlhbGl6ZSB0aGUgZGF0YWJhc2Ugd2l0aCBhIGRlZmF1bHQgZGF0YSBkb2N1bWVudC4gKi9cbmZ1bmN0aW9uIGFkZERhdGEoZGF0YSkge1xuICBjb25zb2xlLmxvZyhgICBBZGRpbmc6ICR7ZGF0YS5uYW1lfSAoJHtkYXRhLm93bmVyfSlgKTtcbiAgQ2x1YnMuaW5zZXJ0KGRhdGEpO1xufVxuXG4vKiogSW5pdGlhbGl6ZSB0aGUgY29sbGVjdGlvbiBpZiBlbXB0eS4gKi9cbmlmIChDbHVicy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuICBpZiAoTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRDbHVicykge1xuICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBkZWZhdWx0IGNsdWJzLicpO1xuICAgIE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0Q2x1YnMubWFwKGRhdGEgPT4gYWRkRGF0YShkYXRhKSk7XG4gIH1cbn1cblxuLyoqIFRoaXMgc3Vic2NyaXB0aW9uIHB1Ymxpc2hlcyBvbmx5IHRoZSBkb2N1bWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBsb2dnZWQgaW4gdXNlciAqL1xuTWV0ZW9yLnB1Ymxpc2goJ0NsdWJzJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcbiAgaWYgKHRoaXMudXNlcklkKSB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSBNZXRlb3IudXNlcnMuZmluZE9uZSh0aGlzLnVzZXJJZCkudXNlcm5hbWU7XG4gICAgcmV0dXJuIENsdWJzLmZpbmQoeyBvd25lcjogdXNlcm5hbWUgfSk7XG4gIH1cbiAgcmV0dXJuIHRoaXMucmVhZHkoKTtcbn0pO1xuXG4vKiogVGhpcyBzdWJzY3JpcHRpb24gcHVibGlzaGVzIGFsbCBkb2N1bWVudHMgcmVnYXJkbGVzcyBvZiB1c2VyLCBidXQgb25seSBpZiB0aGUgbG9nZ2VkIGluIHVzZXIgaXMgdGhlIEFkbWluLiAqL1xuTWV0ZW9yLnB1Ymxpc2goJ0NsdWJzQWRtaW5TdXBlcicsIGZ1bmN0aW9uIHB1Ymxpc2goKSB7XG4gIGlmICh0aGlzLnVzZXJJZCAmJiBSb2xlcy51c2VySXNJblJvbGUodGhpcy51c2VySWQsICdhZG1pbicpKSB7XG4gICAgcmV0dXJuIENsdWJzLmZpbmQoKTtcbiAgfVxuICByZXR1cm4gdGhpcy5yZWFkeSgpO1xufSk7XG5cbk1ldGVvci5wdWJsaXNoKCdDbHVic0FkbWluTm9ybWFsJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcbiAgaWYgKHRoaXMudXNlcklkICYmIFJvbGVzLnVzZXJJc0luUm9sZSh0aGlzLnVzZXJJZCwgJ2NsdWJBZG1pbicpKSB7XG4gICAgcmV0dXJuIENsdWJzLmZpbmQoKTtcbiAgfVxuICByZXR1cm4gdGhpcy5yZWFkeSgpO1xufSk7XG4iLCJpbXBvcnQgJy4vYWNjb3VudHMuanMnO1xuaW1wb3J0ICcuL3N0dWZmLmpzJztcbmltcG9ydCAnLi9jbHViLmpzJztcbmltcG9ydCAnLi9wcm9maWxlLmpzJztcbmltcG9ydCAnLi9pbnRlcmVzdC5qcyc7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IFJvbGVzIH0gZnJvbSAnbWV0ZW9yL2FsYW5uaW5nOnJvbGVzJztcbmltcG9ydCB7IEludGVyZXN0cyB9IGZyb20gJy4uLy4uL2FwaS9pbnRlcmVzdC9pbnRlcmVzdC5qcyc7XG5cbi8qKiBJbml0aWFsaXplIHRoZSBkYXRhYmFzZSB3aXRoIGEgZGVmYXVsdCBkYXRhIGRvY3VtZW50LiAqL1xuZnVuY3Rpb24gYWRkRGF0YShkYXRhKSB7XG4gIGNvbnNvbGUubG9nKGAgIEFkZGluZzogJHtkYXRhLmludGVyZXN0fWApO1xuICBJbnRlcmVzdHMuaW5zZXJ0KGRhdGEpO1xufVxuXG4vKiogSW5pdGlhbGl6ZSB0aGUgY29sbGVjdGlvbiBpZiBlbXB0eS4gKi9cbmlmIChJbnRlcmVzdHMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcbiAgaWYgKE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0SW50ZXJlc3RzKSB7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIGRlZmF1bHQgaW50ZXJlc3RzLicpO1xuICAgIE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0SW50ZXJlc3RzLm1hcChkYXRhID0+IGFkZERhdGEoZGF0YSkpO1xuICB9XG59XG5cbi8qKiBUaGlzIHN1YnNjcmlwdGlvbiBwdWJsaXNoZXMgYWxsIGRvY3VtZW50cyByZWdhcmRsZXNzIG9mIHVzZXIsIGJ1dCBvbmx5IGlmIHRoZSBsb2dnZWQgaW4gdXNlciBpcyB0aGUgQWRtaW4uICovXG5NZXRlb3IucHVibGlzaCgnSW50ZXJlc3RzJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcbiAgaWYgKHRoaXMudXNlcklkICYmIFJvbGVzLnVzZXJJc0luUm9sZSh0aGlzLnVzZXJJZCwgJ2FkbWluJykpIHtcbiAgICByZXR1cm4gSW50ZXJlc3RzLmZpbmQoKTtcbiAgfVxuICByZXR1cm4gdGhpcy5yZWFkeSgpO1xufSk7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IFJvbGVzIH0gZnJvbSAnbWV0ZW9yL2FsYW5uaW5nOnJvbGVzJztcbmltcG9ydCB7IFByb2ZpbGVzIH0gZnJvbSAnLi4vLi4vYXBpL3Byb2ZpbGUvcHJvZmlsZS5qcyc7XG5cbi8qKiBJbml0aWFsaXplIHRoZSBkYXRhYmFzZSB3aXRoIGEgZGVmYXVsdCBkYXRhIGRvY3VtZW50LiAqL1xuZnVuY3Rpb24gYWRkRGF0YShkYXRhKSB7XG4gIGNvbnNvbGUubG9nKGAgIEFkZGluZzogJHtkYXRhLm5hbWV9ICgke2RhdGEub3duZXJ9KWApO1xuICBQcm9maWxlcy5pbnNlcnQoZGF0YSk7XG59XG5cbi8qKiBJbml0aWFsaXplIHRoZSBjb2xsZWN0aW9uIGlmIGVtcHR5LiAqL1xuaWYgKFByb2ZpbGVzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG4gIGlmIChNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdFByb2ZpbGVzKSB7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIGRlZmF1bHQgcHJvZmlsZXMuJyk7XG4gICAgTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRQcm9maWxlcy5tYXAoZGF0YSA9PiBhZGREYXRhKGRhdGEpKTtcbiAgfVxufVxuXG4vKiogVGhpcyBzdWJzY3JpcHRpb24gcHVibGlzaGVzIG9ubHkgdGhlIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIGxvZ2dlZCBpbiB1c2VyICovXG5NZXRlb3IucHVibGlzaCgnUHJvZmlsZXMnLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICBpZiAodGhpcy51c2VySWQpIHtcbiAgICBjb25zdCB1c2VybmFtZSA9IE1ldGVvci51c2Vycy5maW5kT25lKHRoaXMudXNlcklkKS51c2VybmFtZTtcbiAgICByZXR1cm4gUHJvZmlsZXMuZmluZCh7IG93bmVyOiB1c2VybmFtZSB9KTtcbiAgfVxuICByZXR1cm4gdGhpcy5yZWFkeSgpO1xufSk7XG5cbi8qKiBUaGlzIHN1YnNjcmlwdGlvbiBwdWJsaXNoZXMgYWxsIGRvY3VtZW50cyByZWdhcmRsZXNzIG9mIHVzZXIsIGJ1dCBvbmx5IGlmIHRoZSBsb2dnZWQgaW4gdXNlciBpcyB0aGUgQWRtaW4uICovXG5NZXRlb3IucHVibGlzaCgnUHJvZmlsZUFkbWluJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcbiAgaWYgKHRoaXMudXNlcklkICYmIFJvbGVzLnVzZXJJc0luUm9sZSh0aGlzLnVzZXJJZCwgJ2FkbWluJykpIHtcbiAgICByZXR1cm4gUHJvZmlsZXMuZmluZCgpO1xuICB9XG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XG59KTtcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgUm9sZXMgfSBmcm9tICdtZXRlb3IvYWxhbm5pbmc6cm9sZXMnO1xuaW1wb3J0IHsgU3R1ZmZzIH0gZnJvbSAnLi4vLi4vYXBpL3N0dWZmL3N0dWZmLmpzJztcblxuLyoqIEluaXRpYWxpemUgdGhlIGRhdGFiYXNlIHdpdGggYSBkZWZhdWx0IGRhdGEgZG9jdW1lbnQuICovXG5mdW5jdGlvbiBhZGREYXRhKGRhdGEpIHtcbiAgY29uc29sZS5sb2coYCAgQWRkaW5nOiAke2RhdGEubmFtZX0gKCR7ZGF0YS5vd25lcn0pYCk7XG4gIFN0dWZmcy5pbnNlcnQoZGF0YSk7XG59XG5cbi8qKiBJbml0aWFsaXplIHRoZSBjb2xsZWN0aW9uIGlmIGVtcHR5LiAqL1xuaWYgKFN0dWZmcy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuICBpZiAoTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHREYXRhKSB7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIGRlZmF1bHQgZGF0YS4nKTtcbiAgICBNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdERhdGEubWFwKGRhdGEgPT4gYWRkRGF0YShkYXRhKSk7XG4gIH1cbn1cblxuLyoqIFRoaXMgc3Vic2NyaXB0aW9uIHB1Ymxpc2hlcyBvbmx5IHRoZSBkb2N1bWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBsb2dnZWQgaW4gdXNlciAqL1xuTWV0ZW9yLnB1Ymxpc2goJ1N0dWZmJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcbiAgaWYgKHRoaXMudXNlcklkKSB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSBNZXRlb3IudXNlcnMuZmluZE9uZSh0aGlzLnVzZXJJZCkudXNlcm5hbWU7XG4gICAgcmV0dXJuIFN0dWZmcy5maW5kKHsgb3duZXI6IHVzZXJuYW1lIH0pO1xuICB9XG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XG59KTtcblxuLyoqIFRoaXMgc3Vic2NyaXB0aW9uIHB1Ymxpc2hlcyBhbGwgZG9jdW1lbnRzIHJlZ2FyZGxlc3Mgb2YgdXNlciwgYnV0IG9ubHkgaWYgdGhlIGxvZ2dlZCBpbiB1c2VyIGlzIHRoZSBBZG1pbi4gKi9cbk1ldGVvci5wdWJsaXNoKCdTdHVmZkFkbWluJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcbiAgaWYgKHRoaXMudXNlcklkICYmIFJvbGVzLnVzZXJJc0luUm9sZSh0aGlzLnVzZXJJZCwgJ2FkbWluJykpIHtcbiAgICByZXR1cm4gU3R1ZmZzLmZpbmQoKTtcbiAgfVxuICByZXR1cm4gdGhpcy5yZWFkeSgpO1xufSk7XG4iLCJpbXBvcnQgJy9pbXBvcnRzL3N0YXJ0dXAvYm90aCc7XG5pbXBvcnQgJy9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyJztcbiJdfQ==
