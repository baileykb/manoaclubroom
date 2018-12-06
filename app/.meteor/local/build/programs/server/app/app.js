var require = meteorInstall({"imports":{"api":{"club":{"club.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/api/club/club.js                                                                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.export({
  Requests: () => Requests,
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
const Requests = new Mongo.Collection('Requests');
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
Requests.attachSchema(ClubSchema);
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

}}},"startup":{"both":{"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/startup/both/index.js                                                                                  //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
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
    return Clubs.find({});
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
module.link("./club.js");
module.link("./profile.js");
module.link("./interest.js");
module.link("./request.js");
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
/** This subscription publishes only the documents associated with the logged in user */


Meteor.publish('Interests', function publish() {
  if (this.userId) {
    return Interests.find();
  }

  return this.ready();
});
/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */

Meteor.publish('InterestsAdmin', function publish() {
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

},"request.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/startup/server/request.js                                                                              //
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
let Requests;
module.link("../../api/club/club.js", {
  Requests(v) {
    Requests = v;
  }

}, 2);

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY2x1Yi9jbHViLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9jbHViL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9pbnRlcmVzdC9pbmRleC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvaW50ZXJlc3QvaW50ZXJlc3QuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3Byb2ZpbGUvaW5kZXguanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3Byb2ZpbGUvcHJvZmlsZS5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL2JvdGgvaW5kZXguanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvc3RhcnR1cC9zZXJ2ZXIvYWNjb3VudHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvc3RhcnR1cC9zZXJ2ZXIvY2x1Yi5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9pbmRleC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9pbnRlcmVzdC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9wcm9maWxlLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL3JlcXVlc3QuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tYWluLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydCIsIlJlcXVlc3RzIiwiQ2x1YnMiLCJDbHViU2NoZW1hIiwiTW9uZ28iLCJsaW5rIiwidiIsIlNpbXBsZVNjaGVtYSIsImRlZmF1bHQiLCJUcmFja2VyIiwiQ29sbGVjdGlvbiIsIm5hbWUiLCJTdHJpbmciLCJsb2NhdGlvbiIsInRpbWUiLCJpbnRlcmVzdCIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJvd25lciIsInRyYWNrZXIiLCJhdHRhY2hTY2hlbWEiLCJJbnRlcmVzdHMiLCJJbnRlcmVzdFNjaGVtYSIsIlByb2ZpbGVzIiwiUHJvZmlsZVNjaGVtYSIsImludGVyZXN0cyIsIm1ham9yIiwiTWV0ZW9yIiwiQWNjb3VudHMiLCJSb2xlcyIsImNyZWF0ZVVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwicm9sZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VySUQiLCJ1c2VybmFtZSIsImFkZFVzZXJzVG9Sb2xlcyIsInVzZXJzIiwiZmluZCIsImNvdW50Iiwic2V0dGluZ3MiLCJkZWZhdWx0QWNjb3VudHMiLCJtYXAiLCJhZGREYXRhIiwiZGF0YSIsImluc2VydCIsImRlZmF1bHRDbHVicyIsInB1Ymxpc2giLCJ1c2VySWQiLCJyZWFkeSIsInVzZXJJc0luUm9sZSIsImZpbmRPbmUiLCJkZWZhdWx0SW50ZXJlc3RzIiwiZGVmYXVsdFByb2ZpbGVzIiwiZGVmYXVsdFJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQUNDLFVBQVEsRUFBQyxNQUFJQSxRQUFkO0FBQXVCQyxPQUFLLEVBQUMsTUFBSUEsS0FBakM7QUFBdUNDLFlBQVUsRUFBQyxNQUFJQTtBQUF0RCxDQUFkO0FBQWlGLElBQUlDLEtBQUo7QUFBVUwsTUFBTSxDQUFDTSxJQUFQLENBQVksY0FBWixFQUEyQjtBQUFDRCxPQUFLLENBQUNFLENBQUQsRUFBRztBQUFDRixTQUFLLEdBQUNFLENBQU47QUFBUTs7QUFBbEIsQ0FBM0IsRUFBK0MsQ0FBL0M7QUFBa0QsSUFBSUMsWUFBSjtBQUFpQlIsTUFBTSxDQUFDTSxJQUFQLENBQVksY0FBWixFQUEyQjtBQUFDRyxTQUFPLENBQUNGLENBQUQsRUFBRztBQUFDQyxnQkFBWSxHQUFDRCxDQUFiO0FBQWU7O0FBQTNCLENBQTNCLEVBQXdELENBQXhEO0FBQTJELElBQUlHLE9BQUo7QUFBWVYsTUFBTSxDQUFDTSxJQUFQLENBQVksZ0JBQVosRUFB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Q00sSUFBUCxDQUFZLHVCQUFaO0FBQXFDTixNQUFNLENBQUNNLElBQVAsQ0FBWSx5QkFBWixFIiwiZmlsZSI6Ii9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5pbXBvcnQgU2ltcGxlU2NoZW1hIGZyb20gJ3NpbXBsLXNjaGVtYSc7XG5pbXBvcnQgeyBUcmFja2VyIH0gZnJvbSAnbWV0ZW9yL3RyYWNrZXInO1xuXG4vKiogQ3JlYXRlIGEgTWV0ZW9yIGNvbGxlY3Rpb24uICovXG5jb25zdCBDbHVicyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdDbHVicycpO1xuY29uc3QgUmVxdWVzdHMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignUmVxdWVzdHMnKTtcblxuLyoqIENyZWF0ZSBhIHNjaGVtYSB0byBjb25zdHJhaW4gdGhlIHN0cnVjdHVyZSBvZiBkb2N1bWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29sbGVjdGlvbi4gKi9cbmNvbnN0IENsdWJTY2hlbWEgPSBuZXcgU2ltcGxlU2NoZW1hKHtcbiAgbmFtZTogU3RyaW5nLFxuICBsb2NhdGlvbjogU3RyaW5nLFxuICB0aW1lOiBTdHJpbmcsXG4gIGludGVyZXN0OiBTdHJpbmcsXG4gIGltYWdlOiBTdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBTdHJpbmcsXG4gIG93bmVyOiBTdHJpbmcsXG59LCB7IHRyYWNrZXI6IFRyYWNrZXIgfSk7XG5cbi8qKiBBdHRhY2ggdGhpcyBzY2hlbWEgdG8gdGhlIGNvbGxlY3Rpb24uICovXG5DbHVicy5hdHRhY2hTY2hlbWEoQ2x1YlNjaGVtYSk7XG5SZXF1ZXN0cy5hdHRhY2hTY2hlbWEoQ2x1YlNjaGVtYSk7XG5cbi8qKiBNYWtlIHRoZSBjb2xsZWN0aW9uIGFuZCBzY2hlbWEgYXZhaWxhYmxlIHRvIG90aGVyIGNvZGUuICovXG5leHBvcnQgeyBSZXF1ZXN0cywgQ2x1YnMsIENsdWJTY2hlbWEgfTtcbiIsImltcG9ydCAnLi9jbHViLmpzJztcbiIsImltcG9ydCAnLi9pbnRlcmVzdC5qcyc7XG4iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5pbXBvcnQgU2ltcGxlU2NoZW1hIGZyb20gJ3NpbXBsLXNjaGVtYSc7XG5pbXBvcnQgeyBUcmFja2VyIH0gZnJvbSAnbWV0ZW9yL3RyYWNrZXInO1xuXG4vKiogQ3JlYXRlIGEgTWV0ZW9yIGNvbGxlY3Rpb24uICovXG5jb25zdCBJbnRlcmVzdHMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignSW50ZXJlc3RzJyk7XG5cbi8qKiBDcmVhdGUgYSBzY2hlbWEgdG8gY29uc3RyYWluIHRoZSBzdHJ1Y3R1cmUgb2YgZG9jdW1lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbGxlY3Rpb24uICovXG5jb25zdCBJbnRlcmVzdFNjaGVtYSA9IG5ldyBTaW1wbGVTY2hlbWEoe1xuICBpbnRlcmVzdDogU3RyaW5nLFxufSwgeyB0cmFja2VyOiBUcmFja2VyIH0pO1xuXG4vKiogQXR0YWNoIHRoaXMgc2NoZW1hIHRvIHRoZSBjb2xsZWN0aW9uLiAqL1xuSW50ZXJlc3RzLmF0dGFjaFNjaGVtYShJbnRlcmVzdFNjaGVtYSk7XG5cbi8qKiBNYWtlIHRoZSBjb2xsZWN0aW9uIGFuZCBzY2hlbWEgYXZhaWxhYmxlIHRvIG90aGVyIGNvZGUuICovXG5leHBvcnQgeyBJbnRlcmVzdHMsIEludGVyZXN0U2NoZW1hIH07XG4iLCJpbXBvcnQgJy4vcHJvZmlsZS5qcyc7XG4iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5pbXBvcnQgU2ltcGxlU2NoZW1hIGZyb20gJ3NpbXBsLXNjaGVtYSc7XG5pbXBvcnQgeyBUcmFja2VyIH0gZnJvbSAnbWV0ZW9yL3RyYWNrZXInO1xuXG4vKiogQ3JlYXRlIGEgTWV0ZW9yIGNvbGxlY3Rpb24uICovXG5jb25zdCBQcm9maWxlcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdQcm9maWxlcycpO1xuXG4vKiogQ3JlYXRlIGEgc2NoZW1hIHRvIGNvbnN0cmFpbiB0aGUgc3RydWN0dXJlIG9mIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb2xsZWN0aW9uLiAqL1xuY29uc3QgUHJvZmlsZVNjaGVtYSA9IG5ldyBTaW1wbGVTY2hlbWEoe1xuICBuYW1lOiBTdHJpbmcsXG4gIGludGVyZXN0czogU3RyaW5nLFxuICBtYWpvcjogU3RyaW5nLFxuICBvd25lcjogU3RyaW5nLFxufSwgeyB0cmFja2VyOiBUcmFja2VyIH0pO1xuXG4vKiogQXR0YWNoIHRoaXMgc2NoZW1hIHRvIHRoZSBjb2xsZWN0aW9uLiAqL1xuUHJvZmlsZXMuYXR0YWNoU2NoZW1hKFByb2ZpbGVTY2hlbWEpO1xuXG4vKiogTWFrZSB0aGUgY29sbGVjdGlvbiBhbmQgc2NoZW1hIGF2YWlsYWJsZSB0byBvdGhlciBjb2RlLiAqL1xuZXhwb3J0IHsgUHJvZmlsZXMsIFByb2ZpbGVTY2hlbWEgfTtcbiIsImltcG9ydCAnL2ltcG9ydHMvYXBpL2NsdWInO1xuaW1wb3J0ICcvaW1wb3J0cy9hcGkvcHJvZmlsZSc7XG5pbXBvcnQgJy9pbXBvcnRzL2FwaS9pbnRlcmVzdCc7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IEFjY291bnRzIH0gZnJvbSAnbWV0ZW9yL2FjY291bnRzLWJhc2UnO1xuaW1wb3J0IHsgUm9sZXMgfSBmcm9tICdtZXRlb3IvYWxhbm5pbmc6cm9sZXMnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZXIoZW1haWwsIHBhc3N3b3JkLCByb2xlKSB7XG4gIGNvbnNvbGUubG9nKGAgIENyZWF0aW5nIHVzZXIgJHtlbWFpbH0uYCk7XG4gIGNvbnN0IHVzZXJJRCA9IEFjY291bnRzLmNyZWF0ZVVzZXIoe1xuICAgIHVzZXJuYW1lOiBlbWFpbCxcbiAgICBlbWFpbDogZW1haWwsXG4gICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICB9KTtcbiAgaWYgKHJvbGUgPT09ICdhZG1pbicpIHtcbiAgICBSb2xlcy5hZGRVc2Vyc1RvUm9sZXModXNlcklELCAnYWRtaW4nKTtcbiAgfVxuICBpZiAocm9sZSA9PT0gJ2NsdWJBZG1pbicpIHtcbiAgICBSb2xlcy5hZGRVc2Vyc1RvUm9sZXModXNlcklELCAnY2x1YkFkbWluJyk7XG4gIH1cbn1cblxuLyoqIFdoZW4gcnVubmluZyBhcHAgZm9yIGZpcnN0IHRpbWUsIHBhc3MgYSBzZXR0aW5ncyBmaWxlIHRvIHNldCB1cCBhIGRlZmF1bHQgdXNlciBhY2NvdW50LiAqL1xuaWYgKE1ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuICBpZiAoTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRBY2NvdW50cykge1xuICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyB0aGUgZGVmYXVsdCB1c2VyKHMpJyk7XG4gICAgTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRBY2NvdW50cy5tYXAoKHsgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0pID0+IGNyZWF0ZVVzZXIoZW1haWwsIHBhc3N3b3JkLCByb2xlKSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ0Nhbm5vdCBpbml0aWFsaXplIHRoZSBkYXRhYmFzZSEgIFBsZWFzZSBpbnZva2UgbWV0ZW9yIHdpdGggYSBzZXR0aW5ncyBmaWxlLicpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IFJvbGVzIH0gZnJvbSAnbWV0ZW9yL2FsYW5uaW5nOnJvbGVzJztcbmltcG9ydCB7IENsdWJzIH0gZnJvbSAnLi4vLi4vYXBpL2NsdWIvY2x1Yi5qcyc7XG5cbi8qKiBJbml0aWFsaXplIHRoZSBkYXRhYmFzZSB3aXRoIGEgZGVmYXVsdCBkYXRhIGRvY3VtZW50LiAqL1xuZnVuY3Rpb24gYWRkRGF0YShkYXRhKSB7XG4gIGNvbnNvbGUubG9nKGAgIEFkZGluZzogJHtkYXRhLm5hbWV9ICgke2RhdGEub3duZXJ9KWApO1xuICBDbHVicy5pbnNlcnQoZGF0YSk7XG59XG5cbi8qKiBJbml0aWFsaXplIHRoZSBjb2xsZWN0aW9uIGlmIGVtcHR5LiAqL1xuaWYgKENsdWJzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG4gIGlmIChNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdENsdWJzKSB7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIGRlZmF1bHQgY2x1YnMuJyk7XG4gICAgTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRDbHVicy5tYXAoZGF0YSA9PiBhZGREYXRhKGRhdGEpKTtcbiAgfVxufVxuXG4vKiogVGhpcyBzdWJzY3JpcHRpb24gcHVibGlzaGVzIG9ubHkgdGhlIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIGxvZ2dlZCBpbiB1c2VyICovXG5NZXRlb3IucHVibGlzaCgnQ2x1YnMnLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICBpZiAodGhpcy51c2VySWQpIHtcblxuICAgIHJldHVybiBDbHVicy5maW5kKHt9KTtcbiAgfVxuICByZXR1cm4gdGhpcy5yZWFkeSgpO1xufSk7XG5cbi8qKiBUaGlzIHN1YnNjcmlwdGlvbiBwdWJsaXNoZXMgYWxsIGRvY3VtZW50cyByZWdhcmRsZXNzIG9mIHVzZXIsIGJ1dCBvbmx5IGlmIHRoZSBsb2dnZWQgaW4gdXNlciBpcyB0aGUgQWRtaW4uICovXG5NZXRlb3IucHVibGlzaCgnQ2x1YnNBZG1pblN1cGVyJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcbiAgaWYgKHRoaXMudXNlcklkICYmIFJvbGVzLnVzZXJJc0luUm9sZSh0aGlzLnVzZXJJZCwgJ2FkbWluJykpIHtcbiAgICByZXR1cm4gQ2x1YnMuZmluZCgpO1xuICB9XG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XG59KTtcblxuTWV0ZW9yLnB1Ymxpc2goJ0NsdWJzQWRtaW5Ob3JtYWwnLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICBpZiAodGhpcy51c2VySWQgJiYgUm9sZXMudXNlcklzSW5Sb2xlKHRoaXMudXNlcklkLCAnY2x1YkFkbWluJykpIHtcbiAgICBjb25zdCB1c2VybmFtZSA9IE1ldGVvci51c2Vycy5maW5kT25lKHRoaXMudXNlcklkKS51c2VybmFtZTtcbiAgICByZXR1cm4gQ2x1YnMuZmluZCh7IG93bmVyOiB1c2VybmFtZSB9KTtcbiAgfVxuICByZXR1cm4gdGhpcy5yZWFkeSgpO1xufSk7XG4iLCJpbXBvcnQgJy4vYWNjb3VudHMuanMnO1xuaW1wb3J0ICcuL2NsdWIuanMnO1xuaW1wb3J0ICcuL3Byb2ZpbGUuanMnO1xuaW1wb3J0ICcuL2ludGVyZXN0LmpzJztcbmltcG9ydCAnLi9yZXF1ZXN0LmpzJztcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgUm9sZXMgfSBmcm9tICdtZXRlb3IvYWxhbm5pbmc6cm9sZXMnO1xuaW1wb3J0IHsgSW50ZXJlc3RzIH0gZnJvbSAnLi4vLi4vYXBpL2ludGVyZXN0L2ludGVyZXN0LmpzJztcblxuLyoqIEluaXRpYWxpemUgdGhlIGRhdGFiYXNlIHdpdGggYSBkZWZhdWx0IGRhdGEgZG9jdW1lbnQuICovXG5mdW5jdGlvbiBhZGREYXRhKGRhdGEpIHtcbiAgY29uc29sZS5sb2coYCAgQWRkaW5nOiAke2RhdGEuaW50ZXJlc3R9YCk7XG4gIEludGVyZXN0cy5pbnNlcnQoZGF0YSk7XG59XG5cbi8qKiBJbml0aWFsaXplIHRoZSBjb2xsZWN0aW9uIGlmIGVtcHR5LiAqL1xuaWYgKEludGVyZXN0cy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuICBpZiAoTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRJbnRlcmVzdHMpIHtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgZGVmYXVsdCBpbnRlcmVzdHMuJyk7XG4gICAgTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRJbnRlcmVzdHMubWFwKGRhdGEgPT4gYWRkRGF0YShkYXRhKSk7XG4gIH1cbn1cblxuLyoqIFRoaXMgc3Vic2NyaXB0aW9uIHB1Ymxpc2hlcyBvbmx5IHRoZSBkb2N1bWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBsb2dnZWQgaW4gdXNlciAqL1xuTWV0ZW9yLnB1Ymxpc2goJ0ludGVyZXN0cycsIGZ1bmN0aW9uIHB1Ymxpc2goKSB7XG4gIGlmICh0aGlzLnVzZXJJZCkge1xuICAgIHJldHVybiBJbnRlcmVzdHMuZmluZCgpO1xuICB9XG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XG59KTtcblxuLyoqIFRoaXMgc3Vic2NyaXB0aW9uIHB1Ymxpc2hlcyBhbGwgZG9jdW1lbnRzIHJlZ2FyZGxlc3Mgb2YgdXNlciwgYnV0IG9ubHkgaWYgdGhlIGxvZ2dlZCBpbiB1c2VyIGlzIHRoZSBBZG1pbi4gKi9cbk1ldGVvci5wdWJsaXNoKCdJbnRlcmVzdHNBZG1pbicsIGZ1bmN0aW9uIHB1Ymxpc2goKSB7XG4gIGlmICh0aGlzLnVzZXJJZCAmJiBSb2xlcy51c2VySXNJblJvbGUodGhpcy51c2VySWQsICdhZG1pbicpKSB7XG4gICAgcmV0dXJuIEludGVyZXN0cy5maW5kKCk7XG4gIH1cbiAgcmV0dXJuIHRoaXMucmVhZHkoKTtcbn0pO1xuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBSb2xlcyB9IGZyb20gJ21ldGVvci9hbGFubmluZzpyb2xlcyc7XG5pbXBvcnQgeyBQcm9maWxlcyB9IGZyb20gJy4uLy4uL2FwaS9wcm9maWxlL3Byb2ZpbGUuanMnO1xuXG4vKiogSW5pdGlhbGl6ZSB0aGUgZGF0YWJhc2Ugd2l0aCBhIGRlZmF1bHQgZGF0YSBkb2N1bWVudC4gKi9cbmZ1bmN0aW9uIGFkZERhdGEoZGF0YSkge1xuICBjb25zb2xlLmxvZyhgICBBZGRpbmc6ICR7ZGF0YS5uYW1lfSAoJHtkYXRhLm93bmVyfSlgKTtcbiAgUHJvZmlsZXMuaW5zZXJ0KGRhdGEpO1xufVxuXG4vKiogSW5pdGlhbGl6ZSB0aGUgY29sbGVjdGlvbiBpZiBlbXB0eS4gKi9cbmlmIChQcm9maWxlcy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuICBpZiAoTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRQcm9maWxlcykge1xuICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBkZWZhdWx0IHByb2ZpbGVzLicpO1xuICAgIE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0UHJvZmlsZXMubWFwKGRhdGEgPT4gYWRkRGF0YShkYXRhKSk7XG4gIH1cbn1cblxuLyoqIFRoaXMgc3Vic2NyaXB0aW9uIHB1Ymxpc2hlcyBvbmx5IHRoZSBkb2N1bWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBsb2dnZWQgaW4gdXNlciAqL1xuTWV0ZW9yLnB1Ymxpc2goJ1Byb2ZpbGVzJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcbiAgaWYgKHRoaXMudXNlcklkKSB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSBNZXRlb3IudXNlcnMuZmluZE9uZSh0aGlzLnVzZXJJZCkudXNlcm5hbWU7XG4gICAgcmV0dXJuIFByb2ZpbGVzLmZpbmQoeyBvd25lcjogdXNlcm5hbWUgfSk7XG4gIH1cbiAgcmV0dXJuIHRoaXMucmVhZHkoKTtcbn0pO1xuXG4vKiogVGhpcyBzdWJzY3JpcHRpb24gcHVibGlzaGVzIGFsbCBkb2N1bWVudHMgcmVnYXJkbGVzcyBvZiB1c2VyLCBidXQgb25seSBpZiB0aGUgbG9nZ2VkIGluIHVzZXIgaXMgdGhlIEFkbWluLiAqL1xuTWV0ZW9yLnB1Ymxpc2goJ1Byb2ZpbGVBZG1pbicsIGZ1bmN0aW9uIHB1Ymxpc2goKSB7XG4gIGlmICh0aGlzLnVzZXJJZCAmJiBSb2xlcy51c2VySXNJblJvbGUodGhpcy51c2VySWQsICdhZG1pbicpKSB7XG4gICAgcmV0dXJuIFByb2ZpbGVzLmZpbmQoKTtcbiAgfVxuICByZXR1cm4gdGhpcy5yZWFkeSgpO1xufSk7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IFJvbGVzIH0gZnJvbSAnbWV0ZW9yL2FsYW5uaW5nOnJvbGVzJztcbmltcG9ydCB7IFJlcXVlc3RzIH0gZnJvbSAnLi4vLi4vYXBpL2NsdWIvY2x1Yi5qcyc7XG5cbi8qKiBJbml0aWFsaXplIHRoZSBkYXRhYmFzZSB3aXRoIGEgZGVmYXVsdCBkYXRhIGRvY3VtZW50LiAqL1xuZnVuY3Rpb24gYWRkRGF0YShkYXRhKSB7XG4gIGNvbnNvbGUubG9nKGAgIEFkZGluZzogJHtkYXRhLm5hbWV9ICgke2RhdGEub3duZXJ9KWApO1xuICBSZXF1ZXN0cy5pbnNlcnQoZGF0YSk7XG59XG5cbi8qKiBJbml0aWFsaXplIHRoZSBjb2xsZWN0aW9uIGlmIGVtcHR5LiAqL1xuaWYgKFJlcXVlc3RzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG4gIGlmIChNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdFJlcXVlc3QpIHtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgZGVmYXVsdCByZXF1ZXN0cy4nKTtcbiAgICBNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdFJlcXVlc3QubWFwKGRhdGEgPT4gYWRkRGF0YShkYXRhKSk7XG4gIH1cbn1cblxuLyoqIFRoaXMgc3Vic2NyaXB0aW9uIHB1Ymxpc2hlcyBhbGwgZG9jdW1lbnRzIHJlZ2FyZGxlc3Mgb2YgdXNlciwgYnV0IG9ubHkgaWYgdGhlIGxvZ2dlZCBpbiB1c2VyIGlzIHRoZSBBZG1pbi4gKi9cbk1ldGVvci5wdWJsaXNoKCdSZXF1ZXN0cycsIGZ1bmN0aW9uIHB1Ymxpc2goKSB7XG4gIGlmICh0aGlzLnVzZXJJZCAmJiBSb2xlcy51c2VySXNJblJvbGUodGhpcy51c2VySWQsICdhZG1pbicpKSB7XG4gICAgcmV0dXJuIFJlcXVlc3RzLmZpbmQoKTtcbiAgfVxuICByZXR1cm4gdGhpcy5yZWFkeSgpO1xufSk7XG4iLCJpbXBvcnQgJy9pbXBvcnRzL3N0YXJ0dXAvYm90aCc7XG5pbXBvcnQgJy9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyJztcbiJdfQ==
