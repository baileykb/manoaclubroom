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

Meteor.publish('admin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Clubs.find();
  }

  return this.ready();
});
Meteor.publish('clubAdmin', function publish() {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY2x1Yi9jbHViLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9jbHViL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9wcm9maWxlL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9wcm9maWxlL3Byb2ZpbGUuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N0dWZmL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9zdHVmZi9zdHVmZi5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL2JvdGgvaW5kZXguanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvc3RhcnR1cC9zZXJ2ZXIvYWNjb3VudHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvc3RhcnR1cC9zZXJ2ZXIvY2x1Yi5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9pbmRleC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9wcm9maWxlLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL3N0dWZmLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnQiLCJDbHVicyIsIkNsdWJTY2hlbWEiLCJNb25nbyIsImxpbmsiLCJ2IiwiU2ltcGxlU2NoZW1hIiwiZGVmYXVsdCIsIlRyYWNrZXIiLCJDb2xsZWN0aW9uIiwibmFtZSIsIlN0cmluZyIsImxvY2F0aW9uIiwidGltZSIsImludGVyZXN0IiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsIm93bmVyIiwidHJhY2tlciIsImF0dGFjaFNjaGVtYSIsIlByb2ZpbGVzIiwiUHJvZmlsZVNjaGVtYSIsImludGVyZXN0cyIsIm1ham9yIiwiU3R1ZmZzIiwiU3R1ZmZTY2hlbWEiLCJxdWFudGl0eSIsIk51bWJlciIsImNvbmRpdGlvbiIsInR5cGUiLCJhbGxvd2VkVmFsdWVzIiwiZGVmYXVsdFZhbHVlIiwiTWV0ZW9yIiwiQWNjb3VudHMiLCJSb2xlcyIsImNyZWF0ZVVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwicm9sZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VySUQiLCJ1c2VybmFtZSIsImFkZFVzZXJzVG9Sb2xlcyIsInVzZXJzIiwiZmluZCIsImNvdW50Iiwic2V0dGluZ3MiLCJkZWZhdWx0QWNjb3VudHMiLCJtYXAiLCJhZGREYXRhIiwiZGF0YSIsImluc2VydCIsImRlZmF1bHRDbHVicyIsInB1Ymxpc2giLCJ1c2VySWQiLCJmaW5kT25lIiwicmVhZHkiLCJ1c2VySXNJblJvbGUiLCJkZWZhdWx0UHJvZmlsZXMiLCJkZWZhdWx0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBQ0MsT0FBSyxFQUFDLE1BQUlBLEtBQVg7QUFBaUJDLFlBQVUsRUFBQyxNQUFJQTtBQUFoQyxDQUFkO0FBQTJELElBQUlDLEtBQUo7QUFBVUosTUFBTSxDQUFDSyxJQUFQLENBQVksY0FBWixFQUEyQjtBQUFDRCxPQUFLLENBQUNFLENBQUQsRUFBRztBQUFDRixTQUFLLEdBQUNFLENBQU47QUFBUTs7QUFBbEIsQ0FBM0IsRUFBK0MsQ0FBL0M7QUFBa0QsSUFBSUMsWUFBSjtBQUFpQlAsTUFBTSxDQUFDSyxJQUFQLENBQVksY0FBWixFQUEyQjtBQUFDRyxTQUFPLENBQUNGLENBQUQsRUFBRztBQUFDQyxnQkFBWSxHQUFDRCxDQUFiO0FBQWU7O0FBQTNCLENBQTNCLEVBQXdELENBQXhEO0FBQTJELElBQUlHLE9BQUo7QUFBWVQsTUFBTSxDQUFDSyxJQUFQLENBQVksZ0JBQVosRUFBNkI7QUFBQ0ksU0FBTyxDQUFDSCxDQUFELEVBQUc7QUFBQ0csV0FBTyxHQUFDSCxDQUFSO0FBQVU7O0FBQXRC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bGUiOiIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xyXG5pbXBvcnQgU2ltcGxlU2NoZW1hIGZyb20gJ3NpbXBsLXNjaGVtYSc7XHJcbmltcG9ydCB7IFRyYWNrZXIgfSBmcm9tICdtZXRlb3IvdHJhY2tlcic7XHJcblxyXG4vKiogQ3JlYXRlIGEgTWV0ZW9yIGNvbGxlY3Rpb24uICovXHJcbmNvbnN0IENsdWJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ0NsdWJzJyk7XHJcblxyXG4vKiogQ3JlYXRlIGEgc2NoZW1hIHRvIGNvbnN0cmFpbiB0aGUgc3RydWN0dXJlIG9mIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb2xsZWN0aW9uLiAqL1xyXG5jb25zdCBDbHViU2NoZW1hID0gbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgbmFtZTogU3RyaW5nLFxyXG4gIGxvY2F0aW9uOiBTdHJpbmcsXHJcbiAgdGltZTogU3RyaW5nLFxyXG4gIGludGVyZXN0OiBTdHJpbmcsXHJcbiAgaW1hZ2U6IFN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogU3RyaW5nLFxyXG4gIG93bmVyOiBTdHJpbmcsXHJcbn0sIHsgdHJhY2tlcjogVHJhY2tlciB9KTtcclxuXHJcbi8qKiBBdHRhY2ggdGhpcyBzY2hlbWEgdG8gdGhlIGNvbGxlY3Rpb24uICovXHJcbkNsdWJzLmF0dGFjaFNjaGVtYShDbHViU2NoZW1hKTtcclxuXHJcbi8qKiBNYWtlIHRoZSBjb2xsZWN0aW9uIGFuZCBzY2hlbWEgYXZhaWxhYmxlIHRvIG90aGVyIGNvZGUuICovXHJcbmV4cG9ydCB7IENsdWJzLCBDbHViU2NoZW1hIH07XHJcbiIsImltcG9ydCAnLi9jbHViLmpzJztcclxuIiwiaW1wb3J0ICcuL3Byb2ZpbGUuanMnO1xyXG4iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XHJcbmltcG9ydCBTaW1wbGVTY2hlbWEgZnJvbSAnc2ltcGwtc2NoZW1hJztcclxuaW1wb3J0IHsgVHJhY2tlciB9IGZyb20gJ21ldGVvci90cmFja2VyJztcclxuXHJcbi8qKiBDcmVhdGUgYSBNZXRlb3IgY29sbGVjdGlvbi4gKi9cclxuY29uc3QgUHJvZmlsZXMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignUHJvZmlsZXMnKTtcclxuXHJcbi8qKiBDcmVhdGUgYSBzY2hlbWEgdG8gY29uc3RyYWluIHRoZSBzdHJ1Y3R1cmUgb2YgZG9jdW1lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbGxlY3Rpb24uICovXHJcbmNvbnN0IFByb2ZpbGVTY2hlbWEgPSBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICBuYW1lOiBTdHJpbmcsXHJcbiAgaW50ZXJlc3RzOiBTdHJpbmcsXHJcbiAgbWFqb3I6IFN0cmluZyxcclxuICBvd25lcjogU3RyaW5nLFxyXG59LCB7IHRyYWNrZXI6IFRyYWNrZXIgfSk7XHJcblxyXG4vKiogQXR0YWNoIHRoaXMgc2NoZW1hIHRvIHRoZSBjb2xsZWN0aW9uLiAqL1xyXG5Qcm9maWxlcy5hdHRhY2hTY2hlbWEoUHJvZmlsZVNjaGVtYSk7XHJcblxyXG4vKiogTWFrZSB0aGUgY29sbGVjdGlvbiBhbmQgc2NoZW1hIGF2YWlsYWJsZSB0byBvdGhlciBjb2RlLiAqL1xyXG5leHBvcnQgeyBQcm9maWxlcywgUHJvZmlsZVNjaGVtYSB9O1xyXG4iLCJpbXBvcnQgJy4vc3R1ZmYuanMnO1xyXG4iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XHJcbmltcG9ydCBTaW1wbGVTY2hlbWEgZnJvbSAnc2ltcGwtc2NoZW1hJztcclxuaW1wb3J0IHsgVHJhY2tlciB9IGZyb20gJ21ldGVvci90cmFja2VyJztcclxuXHJcbi8qKiBDcmVhdGUgYSBNZXRlb3IgY29sbGVjdGlvbi4gKi9cclxuY29uc3QgU3R1ZmZzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ1N0dWZmcycpO1xyXG5cclxuLyoqIENyZWF0ZSBhIHNjaGVtYSB0byBjb25zdHJhaW4gdGhlIHN0cnVjdHVyZSBvZiBkb2N1bWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29sbGVjdGlvbi4gKi9cclxuY29uc3QgU3R1ZmZTY2hlbWEgPSBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICBuYW1lOiBTdHJpbmcsXHJcbiAgcXVhbnRpdHk6IE51bWJlcixcclxuICBvd25lcjogU3RyaW5nLFxyXG4gIGNvbmRpdGlvbjoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgYWxsb3dlZFZhbHVlczogWydleGNlbGxlbnQnLCAnZ29vZCcsICdmYWlyJywgJ3Bvb3InXSxcclxuICAgIGRlZmF1bHRWYWx1ZTogJ2dvb2QnLFxyXG4gIH0sXHJcbn0sIHsgdHJhY2tlcjogVHJhY2tlciB9KTtcclxuXHJcbi8qKiBBdHRhY2ggdGhpcyBzY2hlbWEgdG8gdGhlIGNvbGxlY3Rpb24uICovXHJcblN0dWZmcy5hdHRhY2hTY2hlbWEoU3R1ZmZTY2hlbWEpO1xyXG5cclxuLyoqIE1ha2UgdGhlIGNvbGxlY3Rpb24gYW5kIHNjaGVtYSBhdmFpbGFibGUgdG8gb3RoZXIgY29kZS4gKi9cclxuZXhwb3J0IHsgU3R1ZmZzLCBTdHVmZlNjaGVtYSB9O1xyXG4iLCJpbXBvcnQgJy9pbXBvcnRzL2FwaS9zdHVmZic7XHJcbmltcG9ydCAnL2ltcG9ydHMvYXBpL2NsdWInO1xyXG5pbXBvcnQgJy9pbXBvcnRzL2FwaS9wcm9maWxlJztcclxuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XHJcbmltcG9ydCB7IEFjY291bnRzIH0gZnJvbSAnbWV0ZW9yL2FjY291bnRzLWJhc2UnO1xyXG5pbXBvcnQgeyBSb2xlcyB9IGZyb20gJ21ldGVvci9hbGFubmluZzpyb2xlcyc7XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVVc2VyKGVtYWlsLCBwYXNzd29yZCwgcm9sZSkge1xyXG4gIGNvbnNvbGUubG9nKGAgIENyZWF0aW5nIHVzZXIgJHtlbWFpbH0uYCk7XHJcbiAgY29uc3QgdXNlcklEID0gQWNjb3VudHMuY3JlYXRlVXNlcih7XHJcbiAgICB1c2VybmFtZTogZW1haWwsXHJcbiAgICBlbWFpbDogZW1haWwsXHJcbiAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgfSk7XHJcbiAgaWYgKHJvbGUgPT09ICdhZG1pbicpIHtcclxuICAgIFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySUQsICdhZG1pbicpO1xyXG4gIH1cclxuICBpZiAocm9sZSA9PT0gJ2NsdWJBZG1pbicpIHtcclxuICAgIFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySUQsICdjbHViQWRtaW4nKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKiBXaGVuIHJ1bm5pbmcgYXBwIGZvciBmaXJzdCB0aW1lLCBwYXNzIGEgc2V0dGluZ3MgZmlsZSB0byBzZXQgdXAgYSBkZWZhdWx0IHVzZXIgYWNjb3VudC4gKi9cclxuaWYgKE1ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xyXG4gIGlmIChNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdEFjY291bnRzKSB7XHJcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgdGhlIGRlZmF1bHQgdXNlcihzKScpO1xyXG4gICAgTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRBY2NvdW50cy5tYXAoKHsgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0pID0+IGNyZWF0ZVVzZXIoZW1haWwsIHBhc3N3b3JkLCByb2xlKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKCdDYW5ub3QgaW5pdGlhbGl6ZSB0aGUgZGF0YWJhc2UhICBQbGVhc2UgaW52b2tlIG1ldGVvciB3aXRoIGEgc2V0dGluZ3MgZmlsZS4nKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XHJcbmltcG9ydCB7IFJvbGVzIH0gZnJvbSAnbWV0ZW9yL2FsYW5uaW5nOnJvbGVzJztcclxuaW1wb3J0IHsgQ2x1YnMgfSBmcm9tICcuLi8uLi9hcGkvY2x1Yi9jbHViLmpzJztcclxuXHJcbi8qKiBJbml0aWFsaXplIHRoZSBkYXRhYmFzZSB3aXRoIGEgZGVmYXVsdCBkYXRhIGRvY3VtZW50LiAqL1xyXG5mdW5jdGlvbiBhZGREYXRhKGRhdGEpIHtcclxuICBjb25zb2xlLmxvZyhgICBBZGRpbmc6ICR7ZGF0YS5uYW1lfSAoJHtkYXRhLm93bmVyfSlgKTtcclxuICBDbHVicy5pbnNlcnQoZGF0YSk7XHJcbn1cclxuXHJcbi8qKiBJbml0aWFsaXplIHRoZSBjb2xsZWN0aW9uIGlmIGVtcHR5LiAqL1xyXG5pZiAoQ2x1YnMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcclxuICBpZiAoTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRDbHVicykge1xyXG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIGRlZmF1bHQgY2x1YnMuJyk7XHJcbiAgICBNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdENsdWJzLm1hcChkYXRhID0+IGFkZERhdGEoZGF0YSkpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqIFRoaXMgc3Vic2NyaXB0aW9uIHB1Ymxpc2hlcyBvbmx5IHRoZSBkb2N1bWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBsb2dnZWQgaW4gdXNlciAqL1xyXG5NZXRlb3IucHVibGlzaCgnQ2x1YnMnLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xyXG4gIGlmICh0aGlzLnVzZXJJZCkge1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBNZXRlb3IudXNlcnMuZmluZE9uZSh0aGlzLnVzZXJJZCkudXNlcm5hbWU7XHJcbiAgICByZXR1cm4gQ2x1YnMuZmluZCh7IG93bmVyOiB1c2VybmFtZSB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXMucmVhZHkoKTtcclxufSk7XHJcblxyXG4vKiogVGhpcyBzdWJzY3JpcHRpb24gcHVibGlzaGVzIGFsbCBkb2N1bWVudHMgcmVnYXJkbGVzcyBvZiB1c2VyLCBidXQgb25seSBpZiB0aGUgbG9nZ2VkIGluIHVzZXIgaXMgdGhlIEFkbWluLiAqL1xyXG5NZXRlb3IucHVibGlzaCgnYWRtaW4nLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xyXG4gIGlmICh0aGlzLnVzZXJJZCAmJiBSb2xlcy51c2VySXNJblJvbGUodGhpcy51c2VySWQsICdhZG1pbicpKSB7XHJcbiAgICByZXR1cm4gQ2x1YnMuZmluZCgpO1xyXG4gIH1cclxuICByZXR1cm4gdGhpcy5yZWFkeSgpO1xyXG59KTtcclxuXHJcbk1ldGVvci5wdWJsaXNoKCdjbHViQWRtaW4nLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xyXG4gIGlmICh0aGlzLnVzZXJJZCAmJiBSb2xlcy51c2VySXNJblJvbGUodGhpcy51c2VySWQsICdjbHViQWRtaW4nKSkge1xyXG4gICAgcmV0dXJuIENsdWJzLmZpbmQoKTtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXMucmVhZHkoKTtcclxufSk7IiwiaW1wb3J0ICcuL2FjY291bnRzLmpzJztcclxuaW1wb3J0ICcuL3N0dWZmLmpzJztcclxuaW1wb3J0ICcuL2NsdWIuanMnO1xyXG5pbXBvcnQgJy4vcHJvZmlsZS5qcyc7XHJcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xyXG5pbXBvcnQgeyBSb2xlcyB9IGZyb20gJ21ldGVvci9hbGFubmluZzpyb2xlcyc7XHJcbmltcG9ydCB7IFByb2ZpbGVzIH0gZnJvbSAnLi4vLi4vYXBpL3Byb2ZpbGUvcHJvZmlsZS5qcyc7XHJcblxyXG4vKiogSW5pdGlhbGl6ZSB0aGUgZGF0YWJhc2Ugd2l0aCBhIGRlZmF1bHQgZGF0YSBkb2N1bWVudC4gKi9cclxuZnVuY3Rpb24gYWRkRGF0YShkYXRhKSB7XHJcbiAgY29uc29sZS5sb2coYCAgQWRkaW5nOiAke2RhdGEubmFtZX0gKCR7ZGF0YS5vd25lcn0pYCk7XHJcbiAgUHJvZmlsZXMuaW5zZXJ0KGRhdGEpO1xyXG59XHJcblxyXG4vKiogSW5pdGlhbGl6ZSB0aGUgY29sbGVjdGlvbiBpZiBlbXB0eS4gKi9cclxuaWYgKFByb2ZpbGVzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XHJcbiAgaWYgKE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0UHJvZmlsZXMpIHtcclxuICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBkZWZhdWx0IHByb2ZpbGVzLicpO1xyXG4gICAgTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRQcm9maWxlcy5tYXAoZGF0YSA9PiBhZGREYXRhKGRhdGEpKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKiBUaGlzIHN1YnNjcmlwdGlvbiBwdWJsaXNoZXMgb25seSB0aGUgZG9jdW1lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGUgbG9nZ2VkIGluIHVzZXIgKi9cclxuTWV0ZW9yLnB1Ymxpc2goJ1Byb2ZpbGVzJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcclxuICBpZiAodGhpcy51c2VySWQpIHtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gTWV0ZW9yLnVzZXJzLmZpbmRPbmUodGhpcy51c2VySWQpLnVzZXJuYW1lO1xyXG4gICAgcmV0dXJuIFByb2ZpbGVzLmZpbmQoeyBvd25lcjogdXNlcm5hbWUgfSk7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XHJcbn0pO1xyXG5cclxuLyoqIFRoaXMgc3Vic2NyaXB0aW9uIHB1Ymxpc2hlcyBhbGwgZG9jdW1lbnRzIHJlZ2FyZGxlc3Mgb2YgdXNlciwgYnV0IG9ubHkgaWYgdGhlIGxvZ2dlZCBpbiB1c2VyIGlzIHRoZSBBZG1pbi4gKi9cclxuTWV0ZW9yLnB1Ymxpc2goJ1Byb2ZpbGVBZG1pbicsIGZ1bmN0aW9uIHB1Ymxpc2goKSB7XHJcbiAgaWYgKHRoaXMudXNlcklkICYmIFJvbGVzLnVzZXJJc0luUm9sZSh0aGlzLnVzZXJJZCwgJ2FkbWluJykpIHtcclxuICAgIHJldHVybiBQcm9maWxlcy5maW5kKCk7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcclxuaW1wb3J0IHsgUm9sZXMgfSBmcm9tICdtZXRlb3IvYWxhbm5pbmc6cm9sZXMnO1xyXG5pbXBvcnQgeyBTdHVmZnMgfSBmcm9tICcuLi8uLi9hcGkvc3R1ZmYvc3R1ZmYuanMnO1xyXG5cclxuLyoqIEluaXRpYWxpemUgdGhlIGRhdGFiYXNlIHdpdGggYSBkZWZhdWx0IGRhdGEgZG9jdW1lbnQuICovXHJcbmZ1bmN0aW9uIGFkZERhdGEoZGF0YSkge1xyXG4gIGNvbnNvbGUubG9nKGAgIEFkZGluZzogJHtkYXRhLm5hbWV9ICgke2RhdGEub3duZXJ9KWApO1xyXG4gIFN0dWZmcy5pbnNlcnQoZGF0YSk7XHJcbn1cclxuXHJcbi8qKiBJbml0aWFsaXplIHRoZSBjb2xsZWN0aW9uIGlmIGVtcHR5LiAqL1xyXG5pZiAoU3R1ZmZzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XHJcbiAgaWYgKE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0RGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIGRlZmF1bHQgZGF0YS4nKTtcclxuICAgIE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0RGF0YS5tYXAoZGF0YSA9PiBhZGREYXRhKGRhdGEpKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKiBUaGlzIHN1YnNjcmlwdGlvbiBwdWJsaXNoZXMgb25seSB0aGUgZG9jdW1lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGUgbG9nZ2VkIGluIHVzZXIgKi9cclxuTWV0ZW9yLnB1Ymxpc2goJ1N0dWZmJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcclxuICBpZiAodGhpcy51c2VySWQpIHtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gTWV0ZW9yLnVzZXJzLmZpbmRPbmUodGhpcy51c2VySWQpLnVzZXJuYW1lO1xyXG4gICAgcmV0dXJuIFN0dWZmcy5maW5kKHsgb3duZXI6IHVzZXJuYW1lIH0pO1xyXG4gIH1cclxuICByZXR1cm4gdGhpcy5yZWFkeSgpO1xyXG59KTtcclxuXHJcbi8qKiBUaGlzIHN1YnNjcmlwdGlvbiBwdWJsaXNoZXMgYWxsIGRvY3VtZW50cyByZWdhcmRsZXNzIG9mIHVzZXIsIGJ1dCBvbmx5IGlmIHRoZSBsb2dnZWQgaW4gdXNlciBpcyB0aGUgQWRtaW4uICovXHJcbk1ldGVvci5wdWJsaXNoKCdTdHVmZkFkbWluJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcclxuICBpZiAodGhpcy51c2VySWQgJiYgUm9sZXMudXNlcklzSW5Sb2xlKHRoaXMudXNlcklkLCAnYWRtaW4nKSkge1xyXG4gICAgcmV0dXJuIFN0dWZmcy5maW5kKCk7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgJy9pbXBvcnRzL3N0YXJ0dXAvYm90aCc7XHJcbmltcG9ydCAnL2ltcG9ydHMvc3RhcnR1cC9zZXJ2ZXInO1xyXG4iXX0=
