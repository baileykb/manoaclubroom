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
    return Clubs.find();
  }

  return this.ready();
});
/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */

Meteor.publish('ClubsAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'clubAdmin')) {
    const username = Meteor.users.findOne(this.userId).username;
    return Clubs.find({
      owner: username
    });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY2x1Yi9jbHViLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9jbHViL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9pbnRlcmVzdC9pbmRleC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvaW50ZXJlc3QvaW50ZXJlc3QuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3Byb2ZpbGUvaW5kZXguanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3Byb2ZpbGUvcHJvZmlsZS5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvc3R1ZmYvaW5kZXguanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N0dWZmL3N0dWZmLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvYm90aC9pbmRleC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9hY2NvdW50cy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9jbHViLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2ludGVyZXN0LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL3Byb2ZpbGUuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvc3RhcnR1cC9zZXJ2ZXIvc3R1ZmYuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tYWluLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydCIsIkNsdWJzIiwiQ2x1YlNjaGVtYSIsIk1vbmdvIiwibGluayIsInYiLCJTaW1wbGVTY2hlbWEiLCJkZWZhdWx0IiwiVHJhY2tlciIsIkNvbGxlY3Rpb24iLCJuYW1lIiwiU3RyaW5nIiwibG9jYXRpb24iLCJ0aW1lIiwiaW50ZXJlc3QiLCJpbnRlcmVzdDIiLCJpbWFnZSIsIndlYnNpdGUiLCJkZXNjcmlwdGlvbiIsIm93bmVyIiwidHJhY2tlciIsImF0dGFjaFNjaGVtYSIsIkludGVyZXN0cyIsIkludGVyZXN0U2NoZW1hIiwiUHJvZmlsZXMiLCJQcm9maWxlU2NoZW1hIiwiaW50ZXJlc3RzIiwibWFqb3IiLCJTdHVmZnMiLCJTdHVmZlNjaGVtYSIsInF1YW50aXR5IiwiTnVtYmVyIiwiY29uZGl0aW9uIiwidHlwZSIsImFsbG93ZWRWYWx1ZXMiLCJkZWZhdWx0VmFsdWUiLCJNZXRlb3IiLCJBY2NvdW50cyIsIlJvbGVzIiwiY3JlYXRlVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJyb2xlIiwiY29uc29sZSIsImxvZyIsInVzZXJJRCIsInVzZXJuYW1lIiwiYWRkVXNlcnNUb1JvbGVzIiwidXNlcnMiLCJmaW5kIiwiY291bnQiLCJzZXR0aW5ncyIsImRlZmF1bHRBY2NvdW50cyIsIm1hcCIsImFkZERhdGEiLCJkYXRhIiwiaW5zZXJ0IiwiZGVmYXVsdENsdWJzIiwicHVibGlzaCIsInVzZXJJZCIsInJlYWR5IiwidXNlcklzSW5Sb2xlIiwiZmluZE9uZSIsImRlZmF1bHRJbnRlcmVzdHMiLCJkZWZhdWx0UHJvZmlsZXMiLCJkZWZhdWx0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBQ0MsT0FBSyxFQUFDLE1BQUlBLEtBQVg7QUFBaUJDLFlBQVUsRUFBQyxNQUFJQTtBQUFoQyxDQUFkO0FBQTJELElBQUlDLEtBQUo7QUFBVUosTUFBTSxDQUFDSyxJQUFQLENBQVksY0FBWixFQUEyQjtBQUFDRCxPQUFLLENBQUNFLENBQUQsRUFBRztBQUFDRixTQUFLLEdBQUNFLENBQU47QUFBUTs7QUFBbEIsQ0FBM0IsRUFBK0MsQ0FBL0M7QUFBa0QsSUFBSUMsWUFBSjtBQUFpQlAsTUFB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eEIsRUFBZ0MsT0FBaEMsQ0FBbkIsRUFBNkQ7QUFDM0QsV0FBTy9CLE1BQU0sQ0FBQ3FCLElBQVAsRUFBUDtBQUNEOztBQUNELFNBQU8sS0FBS1csS0FBTCxFQUFQO0FBQ0QsQ0FMRCxFOzs7Ozs7Ozs7OztBQzVCQTdELE1BQU0sQ0FBQ0ssSUFBUCxDQUFZLHVCQUFaO0FBQXFDTCxNQUFNLENBQUNLLElBQVAsQ0FBWSx5QkFBWixFIiwiZmlsZSI6Ii9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5pbXBvcnQgU2ltcGxlU2NoZW1hIGZyb20gJ3NpbXBsLXNjaGVtYSc7XG5pbXBvcnQgeyBUcmFja2VyIH0gZnJvbSAnbWV0ZW9yL3RyYWNrZXInO1xuXG4vKiogQ3JlYXRlIGEgTWV0ZW9yIGNvbGxlY3Rpb24uICovXG5jb25zdCBDbHVicyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdDbHVicycpO1xuXG4vKiogQ3JlYXRlIGEgc2NoZW1hIHRvIGNvbnN0cmFpbiB0aGUgc3RydWN0dXJlIG9mIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb2xsZWN0aW9uLiAqL1xuY29uc3QgQ2x1YlNjaGVtYSA9IG5ldyBTaW1wbGVTY2hlbWEoe1xuICBuYW1lOiBTdHJpbmcsXG4gIGxvY2F0aW9uOiBTdHJpbmcsXG4gIHRpbWU6IFN0cmluZyxcbiAgaW50ZXJlc3Q6IFN0cmluZyxcbiAgaW50ZXJlc3QyOiBTdHJpbmcsXG4gIGltYWdlOiBTdHJpbmcsXG4gIHdlYnNpdGU6IFN0cmluZyxcbiAgZGVzY3JpcHRpb246IFN0cmluZyxcbiAgb3duZXI6IFN0cmluZyxcbn0sIHsgdHJhY2tlcjogVHJhY2tlciB9KTtcblxuLyoqIEF0dGFjaCB0aGlzIHNjaGVtYSB0byB0aGUgY29sbGVjdGlvbi4gKi9cbkNsdWJzLmF0dGFjaFNjaGVtYShDbHViU2NoZW1hKTtcblxuLyoqIE1ha2UgdGhlIGNvbGxlY3Rpb24gYW5kIHNjaGVtYSBhdmFpbGFibGUgdG8gb3RoZXIgY29kZS4gKi9cbmV4cG9ydCB7IENsdWJzLCBDbHViU2NoZW1hIH07XG4iLCJpbXBvcnQgJy4vY2x1Yi5qcyc7XG4iLCJpbXBvcnQgJy4vaW50ZXJlc3QuanMnO1xuIiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuaW1wb3J0IFNpbXBsZVNjaGVtYSBmcm9tICdzaW1wbC1zY2hlbWEnO1xuaW1wb3J0IHsgVHJhY2tlciB9IGZyb20gJ21ldGVvci90cmFja2VyJztcblxuLyoqIENyZWF0ZSBhIE1ldGVvciBjb2xsZWN0aW9uLiAqL1xuY29uc3QgSW50ZXJlc3RzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ0ludGVyZXN0cycpO1xuXG4vKiogQ3JlYXRlIGEgc2NoZW1hIHRvIGNvbnN0cmFpbiB0aGUgc3RydWN0dXJlIG9mIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb2xsZWN0aW9uLiAqL1xuY29uc3QgSW50ZXJlc3RTY2hlbWEgPSBuZXcgU2ltcGxlU2NoZW1hKHtcbiAgaW50ZXJlc3Q6IFN0cmluZyxcbn0sIHsgdHJhY2tlcjogVHJhY2tlciB9KTtcblxuLyoqIEF0dGFjaCB0aGlzIHNjaGVtYSB0byB0aGUgY29sbGVjdGlvbi4gKi9cbkludGVyZXN0cy5hdHRhY2hTY2hlbWEoSW50ZXJlc3RTY2hlbWEpO1xuXG4vKiogTWFrZSB0aGUgY29sbGVjdGlvbiBhbmQgc2NoZW1hIGF2YWlsYWJsZSB0byBvdGhlciBjb2RlLiAqL1xuZXhwb3J0IHsgSW50ZXJlc3RzLCBJbnRlcmVzdFNjaGVtYSB9O1xuIiwiaW1wb3J0ICcuL3Byb2ZpbGUuanMnO1xuIiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuaW1wb3J0IFNpbXBsZVNjaGVtYSBmcm9tICdzaW1wbC1zY2hlbWEnO1xuaW1wb3J0IHsgVHJhY2tlciB9IGZyb20gJ21ldGVvci90cmFja2VyJztcblxuLyoqIENyZWF0ZSBhIE1ldGVvciBjb2xsZWN0aW9uLiAqL1xuY29uc3QgUHJvZmlsZXMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignUHJvZmlsZXMnKTtcblxuLyoqIENyZWF0ZSBhIHNjaGVtYSB0byBjb25zdHJhaW4gdGhlIHN0cnVjdHVyZSBvZiBkb2N1bWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29sbGVjdGlvbi4gKi9cbmNvbnN0IFByb2ZpbGVTY2hlbWEgPSBuZXcgU2ltcGxlU2NoZW1hKHtcbiAgbmFtZTogU3RyaW5nLFxuICBpbnRlcmVzdHM6IFN0cmluZyxcbiAgbWFqb3I6IFN0cmluZyxcbiAgb3duZXI6IFN0cmluZyxcbiAgaW1hZ2U6IFN0cmluZyxcbn0sIHsgdHJhY2tlcjogVHJhY2tlciB9KTtcblxuLyoqIEF0dGFjaCB0aGlzIHNjaGVtYSB0byB0aGUgY29sbGVjdGlvbi4gKi9cblByb2ZpbGVzLmF0dGFjaFNjaGVtYShQcm9maWxlU2NoZW1hKTtcblxuLyoqIE1ha2UgdGhlIGNvbGxlY3Rpb24gYW5kIHNjaGVtYSBhdmFpbGFibGUgdG8gb3RoZXIgY29kZS4gKi9cbmV4cG9ydCB7IFByb2ZpbGVzLCBQcm9maWxlU2NoZW1hIH07XG4iLCJpbXBvcnQgJy4vc3R1ZmYuanMnO1xuIiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuaW1wb3J0IFNpbXBsZVNjaGVtYSBmcm9tICdzaW1wbC1zY2hlbWEnO1xuaW1wb3J0IHsgVHJhY2tlciB9IGZyb20gJ21ldGVvci90cmFja2VyJztcblxuLyoqIENyZWF0ZSBhIE1ldGVvciBjb2xsZWN0aW9uLiAqL1xuY29uc3QgU3R1ZmZzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ1N0dWZmcycpO1xuXG4vKiogQ3JlYXRlIGEgc2NoZW1hIHRvIGNvbnN0cmFpbiB0aGUgc3RydWN0dXJlIG9mIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb2xsZWN0aW9uLiAqL1xuY29uc3QgU3R1ZmZTY2hlbWEgPSBuZXcgU2ltcGxlU2NoZW1hKHtcbiAgbmFtZTogU3RyaW5nLFxuICBxdWFudGl0eTogTnVtYmVyLFxuICBvd25lcjogU3RyaW5nLFxuICBjb25kaXRpb246IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgYWxsb3dlZFZhbHVlczogWydleGNlbGxlbnQnLCAnZ29vZCcsICdmYWlyJywgJ3Bvb3InXSxcbiAgICBkZWZhdWx0VmFsdWU6ICdnb29kJyxcbiAgfSxcbn0sIHsgdHJhY2tlcjogVHJhY2tlciB9KTtcblxuLyoqIEF0dGFjaCB0aGlzIHNjaGVtYSB0byB0aGUgY29sbGVjdGlvbi4gKi9cblN0dWZmcy5hdHRhY2hTY2hlbWEoU3R1ZmZTY2hlbWEpO1xuXG4vKiogTWFrZSB0aGUgY29sbGVjdGlvbiBhbmQgc2NoZW1hIGF2YWlsYWJsZSB0byBvdGhlciBjb2RlLiAqL1xuZXhwb3J0IHsgU3R1ZmZzLCBTdHVmZlNjaGVtYSB9O1xuIiwiaW1wb3J0ICcvaW1wb3J0cy9hcGkvc3R1ZmYnO1xuaW1wb3J0ICcvaW1wb3J0cy9hcGkvY2x1Yic7XG5pbXBvcnQgJy9pbXBvcnRzL2FwaS9wcm9maWxlJztcbmltcG9ydCAnL2ltcG9ydHMvYXBpL2ludGVyZXN0JztcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgQWNjb3VudHMgfSBmcm9tICdtZXRlb3IvYWNjb3VudHMtYmFzZSc7XG5pbXBvcnQgeyBSb2xlcyB9IGZyb20gJ21ldGVvci9hbGFubmluZzpyb2xlcyc7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblxuZnVuY3Rpb24gY3JlYXRlVXNlcihlbWFpbCwgcGFzc3dvcmQsIHJvbGUpIHtcbiAgY29uc29sZS5sb2coYCAgQ3JlYXRpbmcgdXNlciAke2VtYWlsfS5gKTtcbiAgY29uc3QgdXNlcklEID0gQWNjb3VudHMuY3JlYXRlVXNlcih7XG4gICAgdXNlcm5hbWU6IGVtYWlsLFxuICAgIGVtYWlsOiBlbWFpbCxcbiAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gIH0pO1xuICBpZiAocm9sZSA9PT0gJ2FkbWluJykge1xuICAgIFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySUQsICdhZG1pbicpO1xuICB9XG4gIGlmIChyb2xlID09PSAnY2x1YkFkbWluJykge1xuICAgIFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySUQsICdjbHViQWRtaW4nKTtcbiAgfVxufVxuXG4vKiogV2hlbiBydW5uaW5nIGFwcCBmb3IgZmlyc3QgdGltZSwgcGFzcyBhIHNldHRpbmdzIGZpbGUgdG8gc2V0IHVwIGEgZGVmYXVsdCB1c2VyIGFjY291bnQuICovXG5pZiAoTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG4gIGlmIChNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdEFjY291bnRzKSB7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIHRoZSBkZWZhdWx0IHVzZXIocyknKTtcbiAgICBNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdEFjY291bnRzLm1hcCgoeyBlbWFpbCwgcGFzc3dvcmQsIHJvbGUgfSkgPT4gY3JlYXRlVXNlcihlbWFpbCwgcGFzc3dvcmQsIHJvbGUpKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnQ2Fubm90IGluaXRpYWxpemUgdGhlIGRhdGFiYXNlISAgUGxlYXNlIGludm9rZSBtZXRlb3Igd2l0aCBhIHNldHRpbmdzIGZpbGUuJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgUm9sZXMgfSBmcm9tICdtZXRlb3IvYWxhbm5pbmc6cm9sZXMnO1xuaW1wb3J0IHsgQ2x1YnMgfSBmcm9tICcuLi8uLi9hcGkvY2x1Yi9jbHViLmpzJztcblxuLyoqIEluaXRpYWxpemUgdGhlIGRhdGFiYXNlIHdpdGggYSBkZWZhdWx0IGRhdGEgZG9jdW1lbnQuICovXG5mdW5jdGlvbiBhZGREYXRhKGRhdGEpIHtcbiAgY29uc29sZS5sb2coYCAgQWRkaW5nOiAke2RhdGEubmFtZX0gKCR7ZGF0YS5vd25lcn0pYCk7XG4gIENsdWJzLmluc2VydChkYXRhKTtcbn1cblxuLyoqIEluaXRpYWxpemUgdGhlIGNvbGxlY3Rpb24gaWYgZW1wdHkuICovXG5pZiAoQ2x1YnMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcbiAgaWYgKE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0Q2x1YnMpIHtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgZGVmYXVsdCBjbHVicy4nKTtcbiAgICBNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdENsdWJzLm1hcChkYXRhID0+IGFkZERhdGEoZGF0YSkpO1xuICB9XG59XG5cbi8qKiBUaGlzIHN1YnNjcmlwdGlvbiBwdWJsaXNoZXMgb25seSB0aGUgZG9jdW1lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGUgbG9nZ2VkIGluIHVzZXIgKi9cbk1ldGVvci5wdWJsaXNoKCdDbHVicycsIGZ1bmN0aW9uIHB1Ymxpc2goKSB7XG4gIGlmICh0aGlzLnVzZXJJZCkge1xuICAgIHJldHVybiBDbHVicy5maW5kKCk7XG4gIH1cbiAgcmV0dXJuIHRoaXMucmVhZHkoKTtcbn0pO1xuXG4vKiogVGhpcyBzdWJzY3JpcHRpb24gcHVibGlzaGVzIGFsbCBkb2N1bWVudHMgcmVnYXJkbGVzcyBvZiB1c2VyLCBidXQgb25seSBpZiB0aGUgbG9nZ2VkIGluIHVzZXIgaXMgdGhlIEFkbWluLiAqL1xuTWV0ZW9yLnB1Ymxpc2goJ0NsdWJzQWRtaW4nLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICBpZiAodGhpcy51c2VySWQgJiYgUm9sZXMudXNlcklzSW5Sb2xlKHRoaXMudXNlcklkLCAnY2x1YkFkbWluJykpIHtcbiAgICBjb25zdCB1c2VybmFtZSA9IE1ldGVvci51c2Vycy5maW5kT25lKHRoaXMudXNlcklkKS51c2VybmFtZTtcbiAgICByZXR1cm4gQ2x1YnMuZmluZCh7IG93bmVyOiB1c2VybmFtZSB9KTtcbiAgfVxuICByZXR1cm4gdGhpcy5yZWFkeSgpO1xufSk7XG4iLCJpbXBvcnQgJy4vYWNjb3VudHMuanMnO1xuaW1wb3J0ICcuL3N0dWZmLmpzJztcbmltcG9ydCAnLi9jbHViLmpzJztcbmltcG9ydCAnLi9wcm9maWxlLmpzJztcbmltcG9ydCAnLi9pbnRlcmVzdC5qcyc7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IFJvbGVzIH0gZnJvbSAnbWV0ZW9yL2FsYW5uaW5nOnJvbGVzJztcbmltcG9ydCB7IEludGVyZXN0cyB9IGZyb20gJy4uLy4uL2FwaS9pbnRlcmVzdC9pbnRlcmVzdC5qcyc7XG5cbi8qKiBJbml0aWFsaXplIHRoZSBkYXRhYmFzZSB3aXRoIGEgZGVmYXVsdCBkYXRhIGRvY3VtZW50LiAqL1xuZnVuY3Rpb24gYWRkRGF0YShkYXRhKSB7XG4gIGNvbnNvbGUubG9nKGAgIEFkZGluZzogJHtkYXRhLmludGVyZXN0fWApO1xuICBJbnRlcmVzdHMuaW5zZXJ0KGRhdGEpO1xufVxuXG4vKiogSW5pdGlhbGl6ZSB0aGUgY29sbGVjdGlvbiBpZiBlbXB0eS4gKi9cbmlmIChJbnRlcmVzdHMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcbiAgaWYgKE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0SW50ZXJlc3RzKSB7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIGRlZmF1bHQgaW50ZXJlc3RzLicpO1xuICAgIE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0SW50ZXJlc3RzLm1hcChkYXRhID0+IGFkZERhdGEoZGF0YSkpO1xuICB9XG59XG5cbi8qKiBUaGlzIHN1YnNjcmlwdGlvbiBwdWJsaXNoZXMgYWxsIGRvY3VtZW50cyByZWdhcmRsZXNzIG9mIHVzZXIsIGJ1dCBvbmx5IGlmIHRoZSBsb2dnZWQgaW4gdXNlciBpcyB0aGUgQWRtaW4uICovXG5NZXRlb3IucHVibGlzaCgnSW50ZXJlc3RzJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcbiAgaWYgKHRoaXMudXNlcklkICYmIFJvbGVzLnVzZXJJc0luUm9sZSh0aGlzLnVzZXJJZCwgJ2FkbWluJykpIHtcbiAgICByZXR1cm4gSW50ZXJlc3RzLmZpbmQoKTtcbiAgfVxuICByZXR1cm4gdGhpcy5yZWFkeSgpO1xufSk7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IFJvbGVzIH0gZnJvbSAnbWV0ZW9yL2FsYW5uaW5nOnJvbGVzJztcbmltcG9ydCB7IFByb2ZpbGVzIH0gZnJvbSAnLi4vLi4vYXBpL3Byb2ZpbGUvcHJvZmlsZS5qcyc7XG5cbi8qKiBJbml0aWFsaXplIHRoZSBkYXRhYmFzZSB3aXRoIGEgZGVmYXVsdCBkYXRhIGRvY3VtZW50LiAqL1xuZnVuY3Rpb24gYWRkRGF0YShkYXRhKSB7XG4gIGNvbnNvbGUubG9nKGAgIEFkZGluZzogJHtkYXRhLm5hbWV9ICgke2RhdGEub3duZXJ9KWApO1xuICBQcm9maWxlcy5pbnNlcnQoZGF0YSk7XG59XG5cbi8qKiBJbml0aWFsaXplIHRoZSBjb2xsZWN0aW9uIGlmIGVtcHR5LiAqL1xuaWYgKFByb2ZpbGVzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG4gIGlmIChNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdFByb2ZpbGVzKSB7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIGRlZmF1bHQgcHJvZmlsZXMuJyk7XG4gICAgTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRQcm9maWxlcy5tYXAoZGF0YSA9PiBhZGREYXRhKGRhdGEpKTtcbiAgfVxufVxuXG4vKiogVGhpcyBzdWJzY3JpcHRpb24gcHVibGlzaGVzIG9ubHkgdGhlIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIGxvZ2dlZCBpbiB1c2VyICovXG5NZXRlb3IucHVibGlzaCgnUHJvZmlsZXMnLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICBpZiAodGhpcy51c2VySWQpIHtcbiAgICBjb25zdCB1c2VybmFtZSA9IE1ldGVvci51c2Vycy5maW5kT25lKHRoaXMudXNlcklkKS51c2VybmFtZTtcbiAgICByZXR1cm4gUHJvZmlsZXMuZmluZCh7IG93bmVyOiB1c2VybmFtZSB9KTtcbiAgfVxuICByZXR1cm4gdGhpcy5yZWFkeSgpO1xufSk7XG5cbi8qKiBUaGlzIHN1YnNjcmlwdGlvbiBwdWJsaXNoZXMgYWxsIGRvY3VtZW50cyByZWdhcmRsZXNzIG9mIHVzZXIsIGJ1dCBvbmx5IGlmIHRoZSBsb2dnZWQgaW4gdXNlciBpcyB0aGUgQWRtaW4uICovXG5NZXRlb3IucHVibGlzaCgnUHJvZmlsZUFkbWluJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcbiAgaWYgKHRoaXMudXNlcklkICYmIFJvbGVzLnVzZXJJc0luUm9sZSh0aGlzLnVzZXJJZCwgJ2FkbWluJykpIHtcbiAgICByZXR1cm4gUHJvZmlsZXMuZmluZCgpO1xuICB9XG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XG59KTtcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgUm9sZXMgfSBmcm9tICdtZXRlb3IvYWxhbm5pbmc6cm9sZXMnO1xuaW1wb3J0IHsgU3R1ZmZzIH0gZnJvbSAnLi4vLi4vYXBpL3N0dWZmL3N0dWZmLmpzJztcblxuLyoqIEluaXRpYWxpemUgdGhlIGRhdGFiYXNlIHdpdGggYSBkZWZhdWx0IGRhdGEgZG9jdW1lbnQuICovXG5mdW5jdGlvbiBhZGREYXRhKGRhdGEpIHtcbiAgY29uc29sZS5sb2coYCAgQWRkaW5nOiAke2RhdGEubmFtZX0gKCR7ZGF0YS5vd25lcn0pYCk7XG4gIFN0dWZmcy5pbnNlcnQoZGF0YSk7XG59XG5cbi8qKiBJbml0aWFsaXplIHRoZSBjb2xsZWN0aW9uIGlmIGVtcHR5LiAqL1xuaWYgKFN0dWZmcy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuICBpZiAoTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHREYXRhKSB7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIGRlZmF1bHQgZGF0YS4nKTtcbiAgICBNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdERhdGEubWFwKGRhdGEgPT4gYWRkRGF0YShkYXRhKSk7XG4gIH1cbn1cblxuLyoqIFRoaXMgc3Vic2NyaXB0aW9uIHB1Ymxpc2hlcyBvbmx5IHRoZSBkb2N1bWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBsb2dnZWQgaW4gdXNlciAqL1xuTWV0ZW9yLnB1Ymxpc2goJ1N0dWZmJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcbiAgaWYgKHRoaXMudXNlcklkKSB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSBNZXRlb3IudXNlcnMuZmluZE9uZSh0aGlzLnVzZXJJZCkudXNlcm5hbWU7XG4gICAgcmV0dXJuIFN0dWZmcy5maW5kKHsgb3duZXI6IHVzZXJuYW1lIH0pO1xuICB9XG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XG59KTtcblxuLyoqIFRoaXMgc3Vic2NyaXB0aW9uIHB1Ymxpc2hlcyBhbGwgZG9jdW1lbnRzIHJlZ2FyZGxlc3Mgb2YgdXNlciwgYnV0IG9ubHkgaWYgdGhlIGxvZ2dlZCBpbiB1c2VyIGlzIHRoZSBBZG1pbi4gKi9cbk1ldGVvci5wdWJsaXNoKCdTdHVmZkFkbWluJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcbiAgaWYgKHRoaXMudXNlcklkICYmIFJvbGVzLnVzZXJJc0luUm9sZSh0aGlzLnVzZXJJZCwgJ2FkbWluJykpIHtcbiAgICByZXR1cm4gU3R1ZmZzLmZpbmQoKTtcbiAgfVxuICByZXR1cm4gdGhpcy5yZWFkeSgpO1xufSk7XG4iLCJpbXBvcnQgJy9pbXBvcnRzL3N0YXJ0dXAvYm90aCc7XG5pbXBvcnQgJy9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyJztcbiJdfQ==
