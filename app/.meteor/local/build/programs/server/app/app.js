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
module.link("./stuff.js");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY2x1Yi9jbHViLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9jbHViL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9pbnRlcmVzdC9pbmRleC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvaW50ZXJlc3QvaW50ZXJlc3QuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3Byb2ZpbGUvaW5kZXguanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3Byb2ZpbGUvcHJvZmlsZS5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvc3R1ZmYvaW5kZXguanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N0dWZmL3N0dWZmLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvYm90aC9pbmRleC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9hY2NvdW50cy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9jbHViLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2ludGVyZXN0LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL3Byb2ZpbGUuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvc3RhcnR1cC9zZXJ2ZXIvcmVxdWVzdC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9zdHVmZi5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL21haW4uanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0IiwiUmVxdWVzdHMiLCJDbHVicyIsIkNsdWJTY2hlbWEiLCJNb25nbyIsImxpbmsiLCJ2IiwiU2ltcGxlU2NoZW1hIiwiZGVmYXVsdCIsIlRyYWNrZXIiLCJDb2xsZWN0aW9uIiwibmFtZSIsIlN0cmluZyIsImxvY2F0aW9uIiwidGltZSIsImludGVyZXN0IiwiaW50ZXJlc3QyIiwiaW1hZ2UiLCJ3ZWJzaXRlIiwiZGVzY3JpcHRpb24iLCJvd25lciIsInRyYWNrZXIiLCJhdHRhY2hTY2hlbWEiLCJJbnRlcmVzdHMiLCJJbnRlcmVzdFNjaGVtYSIsIlByb2ZpbGVzIiwiUHJvZmlsZVNjaGVtYSIsImludGVyZXN0cyIsIm1ham9yIiwiU3R1ZmZzIiwiU3R1ZmZTY2hlbWEiLCJxdWFudGl0eSIsIk51bWJlciIsImNvbmRpdGlvbiIsInR5cGUiLCJhbGxvd2VkVmFsdWVzIiwiZGVmYXVsdFZhbHVlIiwiTWV0ZW9yIiwiQWNjb3VudHMiLCJSb2xlcyIsImNyZWF0ZVVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwicm9sZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VySUQiLCJ1c2VybmFtZSIsImFkZFVzZXJzVG9Sb2xlcyIsInVzZXJzIiwiZmluZCIsImNvdW50Iiwic2V0dGluZ3MiLCJkZWZhdWx0QWNjb3VudHMiLCJtYXAiLCJhZGREYXRhIiwiZGF0YSIsImluc2VydCIsImRlZmF1bHRDbHVicyIsInB1Ymxpc2giLCJ1c2VySWQiLCJyZWFkeSIsInVzZXJJc0luUm9sZSIsImZpbmRPbmUiLCJkZWZhdWx0SW50ZXJlc3RzIiwiZGVmYXVsdFByb2ZpbGVzIiwiZGVmYXVsdFJlcXVlc3QiLCJkZWZhdWx0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBQ0MsVUFBUSxFQUFDLE1BQUlBLFFBQWQ7QUFBdUJDLE9BQUssRUFBQyxNQUFJQSxLQUFqQztBQUF1Q0MsWUFBVSxFQUFDLE1BQUlBO0FBQXRELENBQWQ7QUFBaUYsSUFBSUMsS0FBSjtBQUFVTCxNQUFNLENBQUNNLElBQVAsQ0FBWSxjQUFaLEVB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M0IsTUFBTSxDQUFDcUIsSUFBUCxHQUFjQyxLQUFkLE9BQTBCLENBQTlCLEVBQWlDO0FBQy9CLE1BQUlkLE1BQU0sQ0FBQ2UsUUFBUCxDQUFnQmUsV0FBcEIsRUFBaUM7QUFDL0J2QixXQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNBUixVQUFNLENBQUNlLFFBQVAsQ0FBZ0JlLFdBQWhCLENBQTRCYixHQUE1QixDQUFnQ0UsSUFBSSxJQUFJRCxPQUFPLENBQUNDLElBQUQsQ0FBL0M7QUFDRDtBQUNGO0FBRUQ7OztBQUNBbkIsTUFBTSxDQUFDc0IsT0FBUCxDQUFlLE9BQWYsRUFBd0IsU0FBU0EsT0FBVCxHQUFtQjtBQUN6QyxNQUFJLEtBQUtDLE1BQVQsRUFBaUI7QUFDZixVQUFNYixRQUFRLEdBQUdWLE1BQU0sQ0FBQ1ksS0FBUCxDQUFhYyxPQUFiLENBQXFCLEtBQUtILE1BQTFCLEVBQWtDYixRQUFuRDtBQUNBLFdBQU9sQixNQUFNLENBQUNxQixJQUFQLENBQVk7QUFBRTlCLFdBQUssRUFBRTJCO0FBQVQsS0FBWixDQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFLYyxLQUFMLEVBQVA7QUFDRCxDQU5EO0FBUUE7O0FBQ0F4QixNQUFNLENBQUNzQixPQUFQLENBQWUsWUFBZixFQUE2QixTQUFTQSxPQUFULEdBQW1CO0FBQzlDLE1BQUksS0FBS0MsTUFBTCxJQUFlckIsS0FBSyxDQUFDdUIsWUFBTixDQUFtQixLQUFLRixNQUF4QixFQUFnQyxPQUFoQyxDQUFuQixFQUE2RDtBQUMzRCxXQUFPL0IsTUFBTSxDQUFDcUIsSUFBUCxFQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFLVyxLQUFMLEVBQVA7QUFDRCxDQUxELEU7Ozs7Ozs7Ozs7O0FDNUJBOUQsTUFBTSxDQUFDTSxJQUFQLENBQVksdUJBQVo7QUFBcUNOLE1BQU0sQ0FBQ00sSUFBUCxDQUFZLHlCQUFaLEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbmltcG9ydCBTaW1wbGVTY2hlbWEgZnJvbSAnc2ltcGwtc2NoZW1hJztcbmltcG9ydCB7IFRyYWNrZXIgfSBmcm9tICdtZXRlb3IvdHJhY2tlcic7XG5cbi8qKiBDcmVhdGUgYSBNZXRlb3IgY29sbGVjdGlvbi4gKi9cbmNvbnN0IENsdWJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ0NsdWJzJyk7XG5jb25zdCBSZXF1ZXN0cyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdSZXF1ZXN0cycpO1xuXG4vKiogQ3JlYXRlIGEgc2NoZW1hIHRvIGNvbnN0cmFpbiB0aGUgc3RydWN0dXJlIG9mIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb2xsZWN0aW9uLiAqL1xuY29uc3QgQ2x1YlNjaGVtYSA9IG5ldyBTaW1wbGVTY2hlbWEoe1xuICBuYW1lOiBTdHJpbmcsXG4gIGxvY2F0aW9uOiBTdHJpbmcsXG4gIHRpbWU6IFN0cmluZyxcbiAgaW50ZXJlc3Q6IFN0cmluZyxcbiAgaW50ZXJlc3QyOiBTdHJpbmcsXG4gIGltYWdlOiBTdHJpbmcsXG4gIHdlYnNpdGU6IFN0cmluZyxcbiAgZGVzY3JpcHRpb246IFN0cmluZyxcbiAgb3duZXI6IFN0cmluZyxcbn0sIHsgdHJhY2tlcjogVHJhY2tlciB9KTtcblxuLyoqIEF0dGFjaCB0aGlzIHNjaGVtYSB0byB0aGUgY29sbGVjdGlvbi4gKi9cbkNsdWJzLmF0dGFjaFNjaGVtYShDbHViU2NoZW1hKTtcblJlcXVlc3RzLmF0dGFjaFNjaGVtYShDbHViU2NoZW1hKTtcblxuLyoqIE1ha2UgdGhlIGNvbGxlY3Rpb24gYW5kIHNjaGVtYSBhdmFpbGFibGUgdG8gb3RoZXIgY29kZS4gKi9cbmV4cG9ydCB7IFJlcXVlc3RzLCBDbHVicywgQ2x1YlNjaGVtYSB9O1xuIiwiaW1wb3J0ICcuL2NsdWIuanMnO1xuIiwiaW1wb3J0ICcuL2ludGVyZXN0LmpzJztcbiIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbmltcG9ydCBTaW1wbGVTY2hlbWEgZnJvbSAnc2ltcGwtc2NoZW1hJztcbmltcG9ydCB7IFRyYWNrZXIgfSBmcm9tICdtZXRlb3IvdHJhY2tlcic7XG5cbi8qKiBDcmVhdGUgYSBNZXRlb3IgY29sbGVjdGlvbi4gKi9cbmNvbnN0IEludGVyZXN0cyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdJbnRlcmVzdHMnKTtcblxuLyoqIENyZWF0ZSBhIHNjaGVtYSB0byBjb25zdHJhaW4gdGhlIHN0cnVjdHVyZSBvZiBkb2N1bWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29sbGVjdGlvbi4gKi9cbmNvbnN0IEludGVyZXN0U2NoZW1hID0gbmV3IFNpbXBsZVNjaGVtYSh7XG4gIGludGVyZXN0OiBTdHJpbmcsXG59LCB7IHRyYWNrZXI6IFRyYWNrZXIgfSk7XG5cbi8qKiBBdHRhY2ggdGhpcyBzY2hlbWEgdG8gdGhlIGNvbGxlY3Rpb24uICovXG5JbnRlcmVzdHMuYXR0YWNoU2NoZW1hKEludGVyZXN0U2NoZW1hKTtcblxuLyoqIE1ha2UgdGhlIGNvbGxlY3Rpb24gYW5kIHNjaGVtYSBhdmFpbGFibGUgdG8gb3RoZXIgY29kZS4gKi9cbmV4cG9ydCB7IEludGVyZXN0cywgSW50ZXJlc3RTY2hlbWEgfTtcbiIsImltcG9ydCAnLi9wcm9maWxlLmpzJztcbiIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbmltcG9ydCBTaW1wbGVTY2hlbWEgZnJvbSAnc2ltcGwtc2NoZW1hJztcbmltcG9ydCB7IFRyYWNrZXIgfSBmcm9tICdtZXRlb3IvdHJhY2tlcic7XG5cbi8qKiBDcmVhdGUgYSBNZXRlb3IgY29sbGVjdGlvbi4gKi9cbmNvbnN0IFByb2ZpbGVzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ1Byb2ZpbGVzJyk7XG5cbi8qKiBDcmVhdGUgYSBzY2hlbWEgdG8gY29uc3RyYWluIHRoZSBzdHJ1Y3R1cmUgb2YgZG9jdW1lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbGxlY3Rpb24uICovXG5jb25zdCBQcm9maWxlU2NoZW1hID0gbmV3IFNpbXBsZVNjaGVtYSh7XG4gIG5hbWU6IFN0cmluZyxcbiAgaW50ZXJlc3RzOiBTdHJpbmcsXG4gIG1ham9yOiBTdHJpbmcsXG4gIG93bmVyOiBTdHJpbmcsXG4gIGltYWdlOiBTdHJpbmcsXG59LCB7IHRyYWNrZXI6IFRyYWNrZXIgfSk7XG5cbi8qKiBBdHRhY2ggdGhpcyBzY2hlbWEgdG8gdGhlIGNvbGxlY3Rpb24uICovXG5Qcm9maWxlcy5hdHRhY2hTY2hlbWEoUHJvZmlsZVNjaGVtYSk7XG5cbi8qKiBNYWtlIHRoZSBjb2xsZWN0aW9uIGFuZCBzY2hlbWEgYXZhaWxhYmxlIHRvIG90aGVyIGNvZGUuICovXG5leHBvcnQgeyBQcm9maWxlcywgUHJvZmlsZVNjaGVtYSB9O1xuIiwiaW1wb3J0ICcuL3N0dWZmLmpzJztcbiIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbmltcG9ydCBTaW1wbGVTY2hlbWEgZnJvbSAnc2ltcGwtc2NoZW1hJztcbmltcG9ydCB7IFRyYWNrZXIgfSBmcm9tICdtZXRlb3IvdHJhY2tlcic7XG5cbi8qKiBDcmVhdGUgYSBNZXRlb3IgY29sbGVjdGlvbi4gKi9cbmNvbnN0IFN0dWZmcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdTdHVmZnMnKTtcblxuLyoqIENyZWF0ZSBhIHNjaGVtYSB0byBjb25zdHJhaW4gdGhlIHN0cnVjdHVyZSBvZiBkb2N1bWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29sbGVjdGlvbi4gKi9cbmNvbnN0IFN0dWZmU2NoZW1hID0gbmV3IFNpbXBsZVNjaGVtYSh7XG4gIG5hbWU6IFN0cmluZyxcbiAgcXVhbnRpdHk6IE51bWJlcixcbiAgb3duZXI6IFN0cmluZyxcbiAgY29uZGl0aW9uOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGFsbG93ZWRWYWx1ZXM6IFsnZXhjZWxsZW50JywgJ2dvb2QnLCAnZmFpcicsICdwb29yJ10sXG4gICAgZGVmYXVsdFZhbHVlOiAnZ29vZCcsXG4gIH0sXG59LCB7IHRyYWNrZXI6IFRyYWNrZXIgfSk7XG5cbi8qKiBBdHRhY2ggdGhpcyBzY2hlbWEgdG8gdGhlIGNvbGxlY3Rpb24uICovXG5TdHVmZnMuYXR0YWNoU2NoZW1hKFN0dWZmU2NoZW1hKTtcblxuLyoqIE1ha2UgdGhlIGNvbGxlY3Rpb24gYW5kIHNjaGVtYSBhdmFpbGFibGUgdG8gb3RoZXIgY29kZS4gKi9cbmV4cG9ydCB7IFN0dWZmcywgU3R1ZmZTY2hlbWEgfTtcbiIsImltcG9ydCAnL2ltcG9ydHMvYXBpL3N0dWZmJztcbmltcG9ydCAnL2ltcG9ydHMvYXBpL2NsdWInO1xuaW1wb3J0ICcvaW1wb3J0cy9hcGkvcHJvZmlsZSc7XG5pbXBvcnQgJy9pbXBvcnRzL2FwaS9pbnRlcmVzdCc7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IEFjY291bnRzIH0gZnJvbSAnbWV0ZW9yL2FjY291bnRzLWJhc2UnO1xuaW1wb3J0IHsgUm9sZXMgfSBmcm9tICdtZXRlb3IvYWxhbm5pbmc6cm9sZXMnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZXIoZW1haWwsIHBhc3N3b3JkLCByb2xlKSB7XG4gIGNvbnNvbGUubG9nKGAgIENyZWF0aW5nIHVzZXIgJHtlbWFpbH0uYCk7XG4gIGNvbnN0IHVzZXJJRCA9IEFjY291bnRzLmNyZWF0ZVVzZXIoe1xuICAgIHVzZXJuYW1lOiBlbWFpbCxcbiAgICBlbWFpbDogZW1haWwsXG4gICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICB9KTtcbiAgaWYgKHJvbGUgPT09ICdhZG1pbicpIHtcbiAgICBSb2xlcy5hZGRVc2Vyc1RvUm9sZXModXNlcklELCAnYWRtaW4nKTtcbiAgfVxuICBpZiAocm9sZSA9PT0gJ2NsdWJBZG1pbicpIHtcbiAgICBSb2xlcy5hZGRVc2Vyc1RvUm9sZXModXNlcklELCAnY2x1YkFkbWluJyk7XG4gIH1cbn1cblxuLyoqIFdoZW4gcnVubmluZyBhcHAgZm9yIGZpcnN0IHRpbWUsIHBhc3MgYSBzZXR0aW5ncyBmaWxlIHRvIHNldCB1cCBhIGRlZmF1bHQgdXNlciBhY2NvdW50LiAqL1xuaWYgKE1ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuICBpZiAoTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRBY2NvdW50cykge1xuICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyB0aGUgZGVmYXVsdCB1c2VyKHMpJyk7XG4gICAgTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRBY2NvdW50cy5tYXAoKHsgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0pID0+IGNyZWF0ZVVzZXIoZW1haWwsIHBhc3N3b3JkLCByb2xlKSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ0Nhbm5vdCBpbml0aWFsaXplIHRoZSBkYXRhYmFzZSEgIFBsZWFzZSBpbnZva2UgbWV0ZW9yIHdpdGggYSBzZXR0aW5ncyBmaWxlLicpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IFJvbGVzIH0gZnJvbSAnbWV0ZW9yL2FsYW5uaW5nOnJvbGVzJztcbmltcG9ydCB7IENsdWJzIH0gZnJvbSAnLi4vLi4vYXBpL2NsdWIvY2x1Yi5qcyc7XG5cbi8qKiBJbml0aWFsaXplIHRoZSBkYXRhYmFzZSB3aXRoIGEgZGVmYXVsdCBkYXRhIGRvY3VtZW50LiAqL1xuZnVuY3Rpb24gYWRkRGF0YShkYXRhKSB7XG4gIGNvbnNvbGUubG9nKGAgIEFkZGluZzogJHtkYXRhLm5hbWV9ICgke2RhdGEub3duZXJ9KWApO1xuICBDbHVicy5pbnNlcnQoZGF0YSk7XG59XG5cbi8qKiBJbml0aWFsaXplIHRoZSBjb2xsZWN0aW9uIGlmIGVtcHR5LiAqL1xuaWYgKENsdWJzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG4gIGlmIChNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdENsdWJzKSB7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIGRlZmF1bHQgY2x1YnMuJyk7XG4gICAgTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRDbHVicy5tYXAoZGF0YSA9PiBhZGREYXRhKGRhdGEpKTtcbiAgfVxufVxuXG4vKiogVGhpcyBzdWJzY3JpcHRpb24gcHVibGlzaGVzIG9ubHkgdGhlIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIGxvZ2dlZCBpbiB1c2VyICovXG5NZXRlb3IucHVibGlzaCgnQ2x1YnMnLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICBpZiAodGhpcy51c2VySWQpIHtcbiAgICByZXR1cm4gQ2x1YnMuZmluZCgpO1xuICB9XG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XG59KTtcblxuLyoqIFRoaXMgc3Vic2NyaXB0aW9uIHB1Ymxpc2hlcyBhbGwgZG9jdW1lbnRzIHJlZ2FyZGxlc3Mgb2YgdXNlciwgYnV0IG9ubHkgaWYgdGhlIGxvZ2dlZCBpbiB1c2VyIGlzIHRoZSBBZG1pbi4gKi9cbk1ldGVvci5wdWJsaXNoKCdDbHVic0FkbWluU3VwZXInLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICBpZiAodGhpcy51c2VySWQgJiYgUm9sZXMudXNlcklzSW5Sb2xlKHRoaXMudXNlcklkLCAnYWRtaW4nKSkge1xuICAgIHJldHVybiBDbHVicy5maW5kKCk7XG4gIH1cbiAgcmV0dXJuIHRoaXMucmVhZHkoKTtcbn0pO1xuXG5NZXRlb3IucHVibGlzaCgnQ2x1YnNBZG1pbk5vcm1hbCcsIGZ1bmN0aW9uIHB1Ymxpc2goKSB7XG4gIGlmICh0aGlzLnVzZXJJZCAmJiBSb2xlcy51c2VySXNJblJvbGUodGhpcy51c2VySWQsICdjbHViQWRtaW4nKSkge1xuICAgIGNvbnN0IHVzZXJuYW1lID0gTWV0ZW9yLnVzZXJzLmZpbmRPbmUodGhpcy51c2VySWQpLnVzZXJuYW1lO1xuICAgIHJldHVybiBDbHVicy5maW5kKHsgb3duZXI6IHVzZXJuYW1lIH0pO1xuICB9XG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XG59KTtcbiIsImltcG9ydCAnLi9hY2NvdW50cy5qcyc7XG5pbXBvcnQgJy4vc3R1ZmYuanMnO1xuaW1wb3J0ICcuL2NsdWIuanMnO1xuaW1wb3J0ICcuL3Byb2ZpbGUuanMnO1xuaW1wb3J0ICcuL2ludGVyZXN0LmpzJztcbmltcG9ydCAnLi9yZXF1ZXN0LmpzJztcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgUm9sZXMgfSBmcm9tICdtZXRlb3IvYWxhbm5pbmc6cm9sZXMnO1xuaW1wb3J0IHsgSW50ZXJlc3RzIH0gZnJvbSAnLi4vLi4vYXBpL2ludGVyZXN0L2ludGVyZXN0LmpzJztcblxuLyoqIEluaXRpYWxpemUgdGhlIGRhdGFiYXNlIHdpdGggYSBkZWZhdWx0IGRhdGEgZG9jdW1lbnQuICovXG5mdW5jdGlvbiBhZGREYXRhKGRhdGEpIHtcbiAgY29uc29sZS5sb2coYCAgQWRkaW5nOiAke2RhdGEuaW50ZXJlc3R9YCk7XG4gIEludGVyZXN0cy5pbnNlcnQoZGF0YSk7XG59XG5cbi8qKiBJbml0aWFsaXplIHRoZSBjb2xsZWN0aW9uIGlmIGVtcHR5LiAqL1xuaWYgKEludGVyZXN0cy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuICBpZiAoTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRJbnRlcmVzdHMpIHtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgZGVmYXVsdCBpbnRlcmVzdHMuJyk7XG4gICAgTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRJbnRlcmVzdHMubWFwKGRhdGEgPT4gYWRkRGF0YShkYXRhKSk7XG4gIH1cbn1cblxuLyoqIFRoaXMgc3Vic2NyaXB0aW9uIHB1Ymxpc2hlcyBhbGwgZG9jdW1lbnRzIHJlZ2FyZGxlc3Mgb2YgdXNlciwgYnV0IG9ubHkgaWYgdGhlIGxvZ2dlZCBpbiB1c2VyIGlzIHRoZSBBZG1pbi4gKi9cbk1ldGVvci5wdWJsaXNoKCdJbnRlcmVzdHMnLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICBpZiAodGhpcy51c2VySWQgJiYgUm9sZXMudXNlcklzSW5Sb2xlKHRoaXMudXNlcklkLCAnYWRtaW4nKSkge1xuICAgIHJldHVybiBJbnRlcmVzdHMuZmluZCgpO1xuICB9XG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XG59KTtcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgUm9sZXMgfSBmcm9tICdtZXRlb3IvYWxhbm5pbmc6cm9sZXMnO1xuaW1wb3J0IHsgUHJvZmlsZXMgfSBmcm9tICcuLi8uLi9hcGkvcHJvZmlsZS9wcm9maWxlLmpzJztcblxuLyoqIEluaXRpYWxpemUgdGhlIGRhdGFiYXNlIHdpdGggYSBkZWZhdWx0IGRhdGEgZG9jdW1lbnQuICovXG5mdW5jdGlvbiBhZGREYXRhKGRhdGEpIHtcbiAgY29uc29sZS5sb2coYCAgQWRkaW5nOiAke2RhdGEubmFtZX0gKCR7ZGF0YS5vd25lcn0pYCk7XG4gIFByb2ZpbGVzLmluc2VydChkYXRhKTtcbn1cblxuLyoqIEluaXRpYWxpemUgdGhlIGNvbGxlY3Rpb24gaWYgZW1wdHkuICovXG5pZiAoUHJvZmlsZXMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcbiAgaWYgKE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0UHJvZmlsZXMpIHtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgZGVmYXVsdCBwcm9maWxlcy4nKTtcbiAgICBNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdFByb2ZpbGVzLm1hcChkYXRhID0+IGFkZERhdGEoZGF0YSkpO1xuICB9XG59XG5cbi8qKiBUaGlzIHN1YnNjcmlwdGlvbiBwdWJsaXNoZXMgb25seSB0aGUgZG9jdW1lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGUgbG9nZ2VkIGluIHVzZXIgKi9cbk1ldGVvci5wdWJsaXNoKCdQcm9maWxlcycsIGZ1bmN0aW9uIHB1Ymxpc2goKSB7XG4gIGlmICh0aGlzLnVzZXJJZCkge1xuICAgIGNvbnN0IHVzZXJuYW1lID0gTWV0ZW9yLnVzZXJzLmZpbmRPbmUodGhpcy51c2VySWQpLnVzZXJuYW1lO1xuICAgIHJldHVybiBQcm9maWxlcy5maW5kKHsgb3duZXI6IHVzZXJuYW1lIH0pO1xuICB9XG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XG59KTtcblxuLyoqIFRoaXMgc3Vic2NyaXB0aW9uIHB1Ymxpc2hlcyBhbGwgZG9jdW1lbnRzIHJlZ2FyZGxlc3Mgb2YgdXNlciwgYnV0IG9ubHkgaWYgdGhlIGxvZ2dlZCBpbiB1c2VyIGlzIHRoZSBBZG1pbi4gKi9cbk1ldGVvci5wdWJsaXNoKCdQcm9maWxlQWRtaW4nLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICBpZiAodGhpcy51c2VySWQgJiYgUm9sZXMudXNlcklzSW5Sb2xlKHRoaXMudXNlcklkLCAnYWRtaW4nKSkge1xuICAgIHJldHVybiBQcm9maWxlcy5maW5kKCk7XG4gIH1cbiAgcmV0dXJuIHRoaXMucmVhZHkoKTtcbn0pO1xuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBSb2xlcyB9IGZyb20gJ21ldGVvci9hbGFubmluZzpyb2xlcyc7XG5pbXBvcnQgeyBSZXF1ZXN0cyB9IGZyb20gJy4uLy4uL2FwaS9jbHViL2NsdWIuanMnO1xuXG4vKiogSW5pdGlhbGl6ZSB0aGUgZGF0YWJhc2Ugd2l0aCBhIGRlZmF1bHQgZGF0YSBkb2N1bWVudC4gKi9cbmZ1bmN0aW9uIGFkZERhdGEoZGF0YSkge1xuICBjb25zb2xlLmxvZyhgICBBZGRpbmc6ICR7ZGF0YS5uYW1lfSAoJHtkYXRhLm93bmVyfSlgKTtcbiAgUmVxdWVzdHMuaW5zZXJ0KGRhdGEpO1xufVxuXG4vKiogSW5pdGlhbGl6ZSB0aGUgY29sbGVjdGlvbiBpZiBlbXB0eS4gKi9cbmlmIChSZXF1ZXN0cy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuICBpZiAoTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRSZXF1ZXN0KSB7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIGRlZmF1bHQgcmVxdWVzdHMuJyk7XG4gICAgTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRSZXF1ZXN0Lm1hcChkYXRhID0+IGFkZERhdGEoZGF0YSkpO1xuICB9XG59XG5cbi8qKiBUaGlzIHN1YnNjcmlwdGlvbiBwdWJsaXNoZXMgYWxsIGRvY3VtZW50cyByZWdhcmRsZXNzIG9mIHVzZXIsIGJ1dCBvbmx5IGlmIHRoZSBsb2dnZWQgaW4gdXNlciBpcyB0aGUgQWRtaW4uICovXG5NZXRlb3IucHVibGlzaCgnUmVxdWVzdHMnLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICBpZiAodGhpcy51c2VySWQgJiYgUm9sZXMudXNlcklzSW5Sb2xlKHRoaXMudXNlcklkLCAnYWRtaW4nKSkge1xuICAgIHJldHVybiBSZXF1ZXN0cy5maW5kKCk7XG4gIH1cbiAgcmV0dXJuIHRoaXMucmVhZHkoKTtcbn0pO1xuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBSb2xlcyB9IGZyb20gJ21ldGVvci9hbGFubmluZzpyb2xlcyc7XG5pbXBvcnQgeyBTdHVmZnMgfSBmcm9tICcuLi8uLi9hcGkvc3R1ZmYvc3R1ZmYuanMnO1xuXG4vKiogSW5pdGlhbGl6ZSB0aGUgZGF0YWJhc2Ugd2l0aCBhIGRlZmF1bHQgZGF0YSBkb2N1bWVudC4gKi9cbmZ1bmN0aW9uIGFkZERhdGEoZGF0YSkge1xuICBjb25zb2xlLmxvZyhgICBBZGRpbmc6ICR7ZGF0YS5uYW1lfSAoJHtkYXRhLm93bmVyfSlgKTtcbiAgU3R1ZmZzLmluc2VydChkYXRhKTtcbn1cblxuLyoqIEluaXRpYWxpemUgdGhlIGNvbGxlY3Rpb24gaWYgZW1wdHkuICovXG5pZiAoU3R1ZmZzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG4gIGlmIChNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdERhdGEpIHtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgZGVmYXVsdCBkYXRhLicpO1xuICAgIE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0RGF0YS5tYXAoZGF0YSA9PiBhZGREYXRhKGRhdGEpKTtcbiAgfVxufVxuXG4vKiogVGhpcyBzdWJzY3JpcHRpb24gcHVibGlzaGVzIG9ubHkgdGhlIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIGxvZ2dlZCBpbiB1c2VyICovXG5NZXRlb3IucHVibGlzaCgnU3R1ZmYnLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICBpZiAodGhpcy51c2VySWQpIHtcbiAgICBjb25zdCB1c2VybmFtZSA9IE1ldGVvci51c2Vycy5maW5kT25lKHRoaXMudXNlcklkKS51c2VybmFtZTtcbiAgICByZXR1cm4gU3R1ZmZzLmZpbmQoeyBvd25lcjogdXNlcm5hbWUgfSk7XG4gIH1cbiAgcmV0dXJuIHRoaXMucmVhZHkoKTtcbn0pO1xuXG4vKiogVGhpcyBzdWJzY3JpcHRpb24gcHVibGlzaGVzIGFsbCBkb2N1bWVudHMgcmVnYXJkbGVzcyBvZiB1c2VyLCBidXQgb25seSBpZiB0aGUgbG9nZ2VkIGluIHVzZXIgaXMgdGhlIEFkbWluLiAqL1xuTWV0ZW9yLnB1Ymxpc2goJ1N0dWZmQWRtaW4nLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICBpZiAodGhpcy51c2VySWQgJiYgUm9sZXMudXNlcklzSW5Sb2xlKHRoaXMudXNlcklkLCAnYWRtaW4nKSkge1xuICAgIHJldHVybiBTdHVmZnMuZmluZCgpO1xuICB9XG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XG59KTtcbiIsImltcG9ydCAnL2ltcG9ydHMvc3RhcnR1cC9ib3RoJztcbmltcG9ydCAnL2ltcG9ydHMvc3RhcnR1cC9zZXJ2ZXInO1xuIl19
