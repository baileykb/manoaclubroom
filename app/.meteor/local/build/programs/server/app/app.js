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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY2x1Yi9jbHViLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9jbHViL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9pbnRlcmVzdC9pbmRleC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvaW50ZXJlc3QvaW50ZXJlc3QuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3Byb2ZpbGUvaW5kZXguanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3Byb2ZpbGUvcHJvZmlsZS5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvc3R1ZmYvaW5kZXguanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N0dWZmL3N0dWZmLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvYm90aC9pbmRleC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9hY2NvdW50cy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9jbHViLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2ludGVyZXN0LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL3Byb2ZpbGUuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvc3RhcnR1cC9zZXJ2ZXIvcmVxdWVzdC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9zdHVmZi5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL21haW4uanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0IiwiUmVxdWVzdHMiLCJDbHVicyIsIkNsdWJTY2hlbWEiLCJNb25nbyIsImxpbmsiLCJ2IiwiU2ltcGxlU2NoZW1hIiwiZGVmYXVsdCIsIlRyYWNrZXIiLCJDb2xsZWN0aW9uIiwibmFtZSIsIlN0cmluZyIsImxvY2F0aW9uIiwidGltZSIsImludGVyZXN0IiwiaW50ZXJlc3QyIiwiaW1hZ2UiLCJ3ZWJzaXRlIiwiZGVzY3JpcHRpb24iLCJvd25lciIsInRyYWNrZXIiLCJhdHRhY2hTY2hlbWEiLCJJbnRlcmVzdHMiLCJJbnRlcmVzdFNjaGVtYSIsIlByb2ZpbGVzIiwiUHJvZmlsZVNjaGVtYSIsImludGVyZXN0cyIsIm1ham9yIiwiU3R1ZmZzIiwiU3R1ZmZTY2hlbWEiLCJxdWFudGl0eSIsIk51bWJlciIsImNvbmRpdGlvbiIsInR5cGUiLCJhbGxvd2VkVmFsdWVzIiwiZGVmYXVsdFZhbHVlIiwiTWV0ZW9yIiwiQWNjb3VudHMiLCJSb2xlcyIsImNyZWF0ZVVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwicm9sZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VySUQiLCJ1c2VybmFtZSIsImFkZFVzZXJzVG9Sb2xlcyIsInVzZXJzIiwiZmluZCIsImNvdW50Iiwic2V0dGluZ3MiLCJkZWZhdWx0QWNjb3VudHMiLCJtYXAiLCJhZGREYXRhIiwiZGF0YSIsImluc2VydCIsImRlZmF1bHRDbHVicyIsInB1Ymxpc2giLCJ1c2VySWQiLCJyZWFkeSIsInVzZXJJc0luUm9sZSIsImZpbmRPbmUiLCJkZWZhdWx0SW50ZXJlc3RzIiwiZGVmYXVsdFByb2ZpbGVzIiwiZGVmYXVsdFJlcXVlc3QiLCJkZWZhdWx0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBQ0MsVUFBUSxFQUFDLE1BQUlBLFFBQWQ7QUFBdUJDLE9BQUssRUFBQyxNQUFJQSxLQUFqQztBQUF1Q0MsWUFBVSxFQUFDLE1BQUlBO0FBQXRELENBQWQ7QUFBaUYsSUFBSUMsS0FBSjtBQUFVTCxNQUFNLENBQUNNLElBQVAsQ0FBWSxjQUFaLEVB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QUVEOzs7QUFDQW5CLE1BQU0sQ0FBQ3NCLE9BQVAsQ0FBZSxPQUFmLEVBQXdCLFNBQVNBLE9BQVQsR0FBbUI7QUFDekMsTUFBSSxLQUFLQyxNQUFULEVBQWlCO0FBQ2YsVUFBTWIsUUFBUSxHQUFHVixNQUFNLENBQUNZLEtBQVAsQ0FBYWMsT0FBYixDQUFxQixLQUFLSCxNQUExQixFQUFrQ2IsUUFBbkQ7QUFDQSxXQUFPbEIsTUFBTSxDQUFDcUIsSUFBUCxDQUFZO0FBQUU5QixXQUFLLEVBQUUyQjtBQUFULEtBQVosQ0FBUDtBQUNEOztBQUNELFNBQU8sS0FBS2MsS0FBTCxFQUFQO0FBQ0QsQ0FORDtBQVFBOztBQUNBeEIsTUFBTSxDQUFDc0IsT0FBUCxDQUFlLFlBQWYsRUFBNkIsU0FBU0EsT0FBVCxHQUFtQjtBQUM5QyxNQUFJLEtBQUtDLE1BQUwsSUFBZXJCLEtBQUssQ0FBQ3VCLFlBQU4sQ0FBbUIsS0FBS0YsTUFBeEIsRUFBZ0MsT0FBaEMsQ0FBbkIsRUFBNkQ7QUFDM0QsV0FBTy9CLE1BQU0sQ0FBQ3FCLElBQVAsRUFBUDtBQUNEOztBQUNELFNBQU8sS0FBS1csS0FBTCxFQUFQO0FBQ0QsQ0FMRCxFOzs7Ozs7Ozs7OztBQzVCQTlELE1BQU0sQ0FBQ00sSUFBUCxDQUFZLHVCQUFaO0FBQXFDTixNQUFNLENBQUNNLElBQVAsQ0FBWSx5QkFBWixFIiwiZmlsZSI6Ii9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5pbXBvcnQgU2ltcGxlU2NoZW1hIGZyb20gJ3NpbXBsLXNjaGVtYSc7XG5pbXBvcnQgeyBUcmFja2VyIH0gZnJvbSAnbWV0ZW9yL3RyYWNrZXInO1xuXG4vKiogQ3JlYXRlIGEgTWV0ZW9yIGNvbGxlY3Rpb24uICovXG5jb25zdCBDbHVicyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdDbHVicycpO1xuY29uc3QgUmVxdWVzdHMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignUmVxdWVzdHMnKTtcblxuLyoqIENyZWF0ZSBhIHNjaGVtYSB0byBjb25zdHJhaW4gdGhlIHN0cnVjdHVyZSBvZiBkb2N1bWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29sbGVjdGlvbi4gKi9cbmNvbnN0IENsdWJTY2hlbWEgPSBuZXcgU2ltcGxlU2NoZW1hKHtcbiAgbmFtZTogU3RyaW5nLFxuICBsb2NhdGlvbjogU3RyaW5nLFxuICB0aW1lOiBTdHJpbmcsXG4gIGludGVyZXN0OiBTdHJpbmcsXG4gIGludGVyZXN0MjogU3RyaW5nLFxuICBpbWFnZTogU3RyaW5nLFxuICB3ZWJzaXRlOiBTdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBTdHJpbmcsXG4gIG93bmVyOiBTdHJpbmcsXG59LCB7IHRyYWNrZXI6IFRyYWNrZXIgfSk7XG5cbi8qKiBBdHRhY2ggdGhpcyBzY2hlbWEgdG8gdGhlIGNvbGxlY3Rpb24uICovXG5DbHVicy5hdHRhY2hTY2hlbWEoQ2x1YlNjaGVtYSk7XG5SZXF1ZXN0cy5hdHRhY2hTY2hlbWEoQ2x1YlNjaGVtYSk7XG5cbi8qKiBNYWtlIHRoZSBjb2xsZWN0aW9uIGFuZCBzY2hlbWEgYXZhaWxhYmxlIHRvIG90aGVyIGNvZGUuICovXG5leHBvcnQgeyBSZXF1ZXN0cywgQ2x1YnMsIENsdWJTY2hlbWEgfTtcbiIsImltcG9ydCAnLi9jbHViLmpzJztcbiIsImltcG9ydCAnLi9pbnRlcmVzdC5qcyc7XG4iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5pbXBvcnQgU2ltcGxlU2NoZW1hIGZyb20gJ3NpbXBsLXNjaGVtYSc7XG5pbXBvcnQgeyBUcmFja2VyIH0gZnJvbSAnbWV0ZW9yL3RyYWNrZXInO1xuXG4vKiogQ3JlYXRlIGEgTWV0ZW9yIGNvbGxlY3Rpb24uICovXG5jb25zdCBJbnRlcmVzdHMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignSW50ZXJlc3RzJyk7XG5cbi8qKiBDcmVhdGUgYSBzY2hlbWEgdG8gY29uc3RyYWluIHRoZSBzdHJ1Y3R1cmUgb2YgZG9jdW1lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbGxlY3Rpb24uICovXG5jb25zdCBJbnRlcmVzdFNjaGVtYSA9IG5ldyBTaW1wbGVTY2hlbWEoe1xuICBpbnRlcmVzdDogU3RyaW5nLFxufSwgeyB0cmFja2VyOiBUcmFja2VyIH0pO1xuXG4vKiogQXR0YWNoIHRoaXMgc2NoZW1hIHRvIHRoZSBjb2xsZWN0aW9uLiAqL1xuSW50ZXJlc3RzLmF0dGFjaFNjaGVtYShJbnRlcmVzdFNjaGVtYSk7XG5cbi8qKiBNYWtlIHRoZSBjb2xsZWN0aW9uIGFuZCBzY2hlbWEgYXZhaWxhYmxlIHRvIG90aGVyIGNvZGUuICovXG5leHBvcnQgeyBJbnRlcmVzdHMsIEludGVyZXN0U2NoZW1hIH07XG4iLCJpbXBvcnQgJy4vcHJvZmlsZS5qcyc7XG4iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5pbXBvcnQgU2ltcGxlU2NoZW1hIGZyb20gJ3NpbXBsLXNjaGVtYSc7XG5pbXBvcnQgeyBUcmFja2VyIH0gZnJvbSAnbWV0ZW9yL3RyYWNrZXInO1xuXG4vKiogQ3JlYXRlIGEgTWV0ZW9yIGNvbGxlY3Rpb24uICovXG5jb25zdCBQcm9maWxlcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdQcm9maWxlcycpO1xuXG4vKiogQ3JlYXRlIGEgc2NoZW1hIHRvIGNvbnN0cmFpbiB0aGUgc3RydWN0dXJlIG9mIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb2xsZWN0aW9uLiAqL1xuY29uc3QgUHJvZmlsZVNjaGVtYSA9IG5ldyBTaW1wbGVTY2hlbWEoe1xuICBuYW1lOiBTdHJpbmcsXG4gIGludGVyZXN0czogU3RyaW5nLFxuICBtYWpvcjogU3RyaW5nLFxuICBvd25lcjogU3RyaW5nLFxuICBpbWFnZTogU3RyaW5nLFxufSwgeyB0cmFja2VyOiBUcmFja2VyIH0pO1xuXG4vKiogQXR0YWNoIHRoaXMgc2NoZW1hIHRvIHRoZSBjb2xsZWN0aW9uLiAqL1xuUHJvZmlsZXMuYXR0YWNoU2NoZW1hKFByb2ZpbGVTY2hlbWEpO1xuXG4vKiogTWFrZSB0aGUgY29sbGVjdGlvbiBhbmQgc2NoZW1hIGF2YWlsYWJsZSB0byBvdGhlciBjb2RlLiAqL1xuZXhwb3J0IHsgUHJvZmlsZXMsIFByb2ZpbGVTY2hlbWEgfTtcbiIsImltcG9ydCAnLi9zdHVmZi5qcyc7XG4iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5pbXBvcnQgU2ltcGxlU2NoZW1hIGZyb20gJ3NpbXBsLXNjaGVtYSc7XG5pbXBvcnQgeyBUcmFja2VyIH0gZnJvbSAnbWV0ZW9yL3RyYWNrZXInO1xuXG4vKiogQ3JlYXRlIGEgTWV0ZW9yIGNvbGxlY3Rpb24uICovXG5jb25zdCBTdHVmZnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignU3R1ZmZzJyk7XG5cbi8qKiBDcmVhdGUgYSBzY2hlbWEgdG8gY29uc3RyYWluIHRoZSBzdHJ1Y3R1cmUgb2YgZG9jdW1lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbGxlY3Rpb24uICovXG5jb25zdCBTdHVmZlNjaGVtYSA9IG5ldyBTaW1wbGVTY2hlbWEoe1xuICBuYW1lOiBTdHJpbmcsXG4gIHF1YW50aXR5OiBOdW1iZXIsXG4gIG93bmVyOiBTdHJpbmcsXG4gIGNvbmRpdGlvbjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBhbGxvd2VkVmFsdWVzOiBbJ2V4Y2VsbGVudCcsICdnb29kJywgJ2ZhaXInLCAncG9vciddLFxuICAgIGRlZmF1bHRWYWx1ZTogJ2dvb2QnLFxuICB9LFxufSwgeyB0cmFja2VyOiBUcmFja2VyIH0pO1xuXG4vKiogQXR0YWNoIHRoaXMgc2NoZW1hIHRvIHRoZSBjb2xsZWN0aW9uLiAqL1xuU3R1ZmZzLmF0dGFjaFNjaGVtYShTdHVmZlNjaGVtYSk7XG5cbi8qKiBNYWtlIHRoZSBjb2xsZWN0aW9uIGFuZCBzY2hlbWEgYXZhaWxhYmxlIHRvIG90aGVyIGNvZGUuICovXG5leHBvcnQgeyBTdHVmZnMsIFN0dWZmU2NoZW1hIH07XG4iLCJpbXBvcnQgJy9pbXBvcnRzL2FwaS9zdHVmZic7XG5pbXBvcnQgJy9pbXBvcnRzL2FwaS9jbHViJztcbmltcG9ydCAnL2ltcG9ydHMvYXBpL3Byb2ZpbGUnO1xuaW1wb3J0ICcvaW1wb3J0cy9hcGkvaW50ZXJlc3QnO1xuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBBY2NvdW50cyB9IGZyb20gJ21ldGVvci9hY2NvdW50cy1iYXNlJztcbmltcG9ydCB7IFJvbGVzIH0gZnJvbSAnbWV0ZW9yL2FsYW5uaW5nOnJvbGVzJztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXG5mdW5jdGlvbiBjcmVhdGVVc2VyKGVtYWlsLCBwYXNzd29yZCwgcm9sZSkge1xuICBjb25zb2xlLmxvZyhgICBDcmVhdGluZyB1c2VyICR7ZW1haWx9LmApO1xuICBjb25zdCB1c2VySUQgPSBBY2NvdW50cy5jcmVhdGVVc2VyKHtcbiAgICB1c2VybmFtZTogZW1haWwsXG4gICAgZW1haWw6IGVtYWlsLFxuICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgfSk7XG4gIGlmIChyb2xlID09PSAnYWRtaW4nKSB7XG4gICAgUm9sZXMuYWRkVXNlcnNUb1JvbGVzKHVzZXJJRCwgJ2FkbWluJyk7XG4gIH1cbiAgaWYgKHJvbGUgPT09ICdjbHViQWRtaW4nKSB7XG4gICAgUm9sZXMuYWRkVXNlcnNUb1JvbGVzKHVzZXJJRCwgJ2NsdWJBZG1pbicpO1xuICB9XG59XG5cbi8qKiBXaGVuIHJ1bm5pbmcgYXBwIGZvciBmaXJzdCB0aW1lLCBwYXNzIGEgc2V0dGluZ3MgZmlsZSB0byBzZXQgdXAgYSBkZWZhdWx0IHVzZXIgYWNjb3VudC4gKi9cbmlmIChNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcbiAgaWYgKE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0QWNjb3VudHMpIHtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgdGhlIGRlZmF1bHQgdXNlcihzKScpO1xuICAgIE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0QWNjb3VudHMubWFwKCh7IGVtYWlsLCBwYXNzd29yZCwgcm9sZSB9KSA9PiBjcmVhdGVVc2VyKGVtYWlsLCBwYXNzd29yZCwgcm9sZSkpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdDYW5ub3QgaW5pdGlhbGl6ZSB0aGUgZGF0YWJhc2UhICBQbGVhc2UgaW52b2tlIG1ldGVvciB3aXRoIGEgc2V0dGluZ3MgZmlsZS4nKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBSb2xlcyB9IGZyb20gJ21ldGVvci9hbGFubmluZzpyb2xlcyc7XG5pbXBvcnQgeyBDbHVicyB9IGZyb20gJy4uLy4uL2FwaS9jbHViL2NsdWIuanMnO1xuXG4vKiogSW5pdGlhbGl6ZSB0aGUgZGF0YWJhc2Ugd2l0aCBhIGRlZmF1bHQgZGF0YSBkb2N1bWVudC4gKi9cbmZ1bmN0aW9uIGFkZERhdGEoZGF0YSkge1xuICBjb25zb2xlLmxvZyhgICBBZGRpbmc6ICR7ZGF0YS5uYW1lfSAoJHtkYXRhLm93bmVyfSlgKTtcbiAgQ2x1YnMuaW5zZXJ0KGRhdGEpO1xufVxuXG4vKiogSW5pdGlhbGl6ZSB0aGUgY29sbGVjdGlvbiBpZiBlbXB0eS4gKi9cbmlmIChDbHVicy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuICBpZiAoTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRDbHVicykge1xuICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBkZWZhdWx0IGNsdWJzLicpO1xuICAgIE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0Q2x1YnMubWFwKGRhdGEgPT4gYWRkRGF0YShkYXRhKSk7XG4gIH1cbn1cblxuLyoqIFRoaXMgc3Vic2NyaXB0aW9uIHB1Ymxpc2hlcyBvbmx5IHRoZSBkb2N1bWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBsb2dnZWQgaW4gdXNlciAqL1xuTWV0ZW9yLnB1Ymxpc2goJ0NsdWJzJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcbiAgaWYgKHRoaXMudXNlcklkKSB7XG4gICAgcmV0dXJuIENsdWJzLmZpbmQoKTtcbiAgfVxuICByZXR1cm4gdGhpcy5yZWFkeSgpO1xufSk7XG5cbk1ldGVvci5wdWJsaXNoKCdDbHVic0FkbWluJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcbiAgaWYgKHRoaXMudXNlcklkICYmIFJvbGVzLnVzZXJJc0luUm9sZSh0aGlzLnVzZXJJZCwgJ2NsdWJBZG1pbicpKSB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSBNZXRlb3IudXNlcnMuZmluZE9uZSh0aGlzLnVzZXJJZCkudXNlcm5hbWU7XG4gICAgcmV0dXJuIENsdWJzLmZpbmQoeyBvd25lcjogdXNlcm5hbWUgfSk7XG4gIH1cbiAgcmV0dXJuIHRoaXMucmVhZHkoKTtcbn0pO1xuIiwiaW1wb3J0ICcuL2FjY291bnRzLmpzJztcbmltcG9ydCAnLi9zdHVmZi5qcyc7XG5pbXBvcnQgJy4vY2x1Yi5qcyc7XG5pbXBvcnQgJy4vcHJvZmlsZS5qcyc7XG5pbXBvcnQgJy4vaW50ZXJlc3QuanMnO1xuaW1wb3J0ICcuL3JlcXVlc3QuanMnO1xuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBSb2xlcyB9IGZyb20gJ21ldGVvci9hbGFubmluZzpyb2xlcyc7XG5pbXBvcnQgeyBJbnRlcmVzdHMgfSBmcm9tICcuLi8uLi9hcGkvaW50ZXJlc3QvaW50ZXJlc3QuanMnO1xuXG4vKiogSW5pdGlhbGl6ZSB0aGUgZGF0YWJhc2Ugd2l0aCBhIGRlZmF1bHQgZGF0YSBkb2N1bWVudC4gKi9cbmZ1bmN0aW9uIGFkZERhdGEoZGF0YSkge1xuICBjb25zb2xlLmxvZyhgICBBZGRpbmc6ICR7ZGF0YS5pbnRlcmVzdH1gKTtcbiAgSW50ZXJlc3RzLmluc2VydChkYXRhKTtcbn1cblxuLyoqIEluaXRpYWxpemUgdGhlIGNvbGxlY3Rpb24gaWYgZW1wdHkuICovXG5pZiAoSW50ZXJlc3RzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG4gIGlmIChNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdEludGVyZXN0cykge1xuICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBkZWZhdWx0IGludGVyZXN0cy4nKTtcbiAgICBNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdEludGVyZXN0cy5tYXAoZGF0YSA9PiBhZGREYXRhKGRhdGEpKTtcbiAgfVxufVxuXG4vKiogVGhpcyBzdWJzY3JpcHRpb24gcHVibGlzaGVzIGFsbCBkb2N1bWVudHMgcmVnYXJkbGVzcyBvZiB1c2VyLCBidXQgb25seSBpZiB0aGUgbG9nZ2VkIGluIHVzZXIgaXMgdGhlIEFkbWluLiAqL1xuTWV0ZW9yLnB1Ymxpc2goJ0ludGVyZXN0cycsIGZ1bmN0aW9uIHB1Ymxpc2goKSB7XG4gIGlmICh0aGlzLnVzZXJJZCAmJiBSb2xlcy51c2VySXNJblJvbGUodGhpcy51c2VySWQsICdhZG1pbicpKSB7XG4gICAgcmV0dXJuIEludGVyZXN0cy5maW5kKCk7XG4gIH1cbiAgcmV0dXJuIHRoaXMucmVhZHkoKTtcbn0pO1xuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBSb2xlcyB9IGZyb20gJ21ldGVvci9hbGFubmluZzpyb2xlcyc7XG5pbXBvcnQgeyBQcm9maWxlcyB9IGZyb20gJy4uLy4uL2FwaS9wcm9maWxlL3Byb2ZpbGUuanMnO1xuXG4vKiogSW5pdGlhbGl6ZSB0aGUgZGF0YWJhc2Ugd2l0aCBhIGRlZmF1bHQgZGF0YSBkb2N1bWVudC4gKi9cbmZ1bmN0aW9uIGFkZERhdGEoZGF0YSkge1xuICBjb25zb2xlLmxvZyhgICBBZGRpbmc6ICR7ZGF0YS5uYW1lfSAoJHtkYXRhLm93bmVyfSlgKTtcbiAgUHJvZmlsZXMuaW5zZXJ0KGRhdGEpO1xufVxuXG4vKiogSW5pdGlhbGl6ZSB0aGUgY29sbGVjdGlvbiBpZiBlbXB0eS4gKi9cbmlmIChQcm9maWxlcy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuICBpZiAoTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRQcm9maWxlcykge1xuICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBkZWZhdWx0IHByb2ZpbGVzLicpO1xuICAgIE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0UHJvZmlsZXMubWFwKGRhdGEgPT4gYWRkRGF0YShkYXRhKSk7XG4gIH1cbn1cblxuLyoqIFRoaXMgc3Vic2NyaXB0aW9uIHB1Ymxpc2hlcyBvbmx5IHRoZSBkb2N1bWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBsb2dnZWQgaW4gdXNlciAqL1xuTWV0ZW9yLnB1Ymxpc2goJ1Byb2ZpbGVzJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcbiAgaWYgKHRoaXMudXNlcklkKSB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSBNZXRlb3IudXNlcnMuZmluZE9uZSh0aGlzLnVzZXJJZCkudXNlcm5hbWU7XG4gICAgcmV0dXJuIFByb2ZpbGVzLmZpbmQoeyBvd25lcjogdXNlcm5hbWUgfSk7XG4gIH1cbiAgcmV0dXJuIHRoaXMucmVhZHkoKTtcbn0pO1xuXG4vKiogVGhpcyBzdWJzY3JpcHRpb24gcHVibGlzaGVzIGFsbCBkb2N1bWVudHMgcmVnYXJkbGVzcyBvZiB1c2VyLCBidXQgb25seSBpZiB0aGUgbG9nZ2VkIGluIHVzZXIgaXMgdGhlIEFkbWluLiAqL1xuTWV0ZW9yLnB1Ymxpc2goJ1Byb2ZpbGVBZG1pbicsIGZ1bmN0aW9uIHB1Ymxpc2goKSB7XG4gIGlmICh0aGlzLnVzZXJJZCAmJiBSb2xlcy51c2VySXNJblJvbGUodGhpcy51c2VySWQsICdhZG1pbicpKSB7XG4gICAgcmV0dXJuIFByb2ZpbGVzLmZpbmQoKTtcbiAgfVxuICByZXR1cm4gdGhpcy5yZWFkeSgpO1xufSk7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IFJvbGVzIH0gZnJvbSAnbWV0ZW9yL2FsYW5uaW5nOnJvbGVzJztcbmltcG9ydCB7IFJlcXVlc3RzIH0gZnJvbSAnLi4vLi4vYXBpL2NsdWIvY2x1Yi5qcyc7XG5cbi8qKiBJbml0aWFsaXplIHRoZSBkYXRhYmFzZSB3aXRoIGEgZGVmYXVsdCBkYXRhIGRvY3VtZW50LiAqL1xuZnVuY3Rpb24gYWRkRGF0YShkYXRhKSB7XG4gIGNvbnNvbGUubG9nKGAgIEFkZGluZzogJHtkYXRhLm5hbWV9ICgke2RhdGEub3duZXJ9KWApO1xuICBSZXF1ZXN0cy5pbnNlcnQoZGF0YSk7XG59XG5cbi8qKiBJbml0aWFsaXplIHRoZSBjb2xsZWN0aW9uIGlmIGVtcHR5LiAqL1xuaWYgKFJlcXVlc3RzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG4gIGlmIChNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdFJlcXVlc3QpIHtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgZGVmYXVsdCByZXF1ZXN0cy4nKTtcbiAgICBNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdFJlcXVlc3QubWFwKGRhdGEgPT4gYWRkRGF0YShkYXRhKSk7XG4gIH1cbn1cblxuLyoqIFRoaXMgc3Vic2NyaXB0aW9uIHB1Ymxpc2hlcyBhbGwgZG9jdW1lbnRzIHJlZ2FyZGxlc3Mgb2YgdXNlciwgYnV0IG9ubHkgaWYgdGhlIGxvZ2dlZCBpbiB1c2VyIGlzIHRoZSBBZG1pbi4gKi9cbk1ldGVvci5wdWJsaXNoKCdSZXF1ZXN0cycsIGZ1bmN0aW9uIHB1Ymxpc2goKSB7XG4gIGlmICh0aGlzLnVzZXJJZCAmJiBSb2xlcy51c2VySXNJblJvbGUodGhpcy51c2VySWQsICdhZG1pbicpKSB7XG4gICAgcmV0dXJuIFJlcXVlc3RzLmZpbmQoKTtcbiAgfVxuICByZXR1cm4gdGhpcy5yZWFkeSgpO1xufSk7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IFJvbGVzIH0gZnJvbSAnbWV0ZW9yL2FsYW5uaW5nOnJvbGVzJztcbmltcG9ydCB7IFN0dWZmcyB9IGZyb20gJy4uLy4uL2FwaS9zdHVmZi9zdHVmZi5qcyc7XG5cbi8qKiBJbml0aWFsaXplIHRoZSBkYXRhYmFzZSB3aXRoIGEgZGVmYXVsdCBkYXRhIGRvY3VtZW50LiAqL1xuZnVuY3Rpb24gYWRkRGF0YShkYXRhKSB7XG4gIGNvbnNvbGUubG9nKGAgIEFkZGluZzogJHtkYXRhLm5hbWV9ICgke2RhdGEub3duZXJ9KWApO1xuICBTdHVmZnMuaW5zZXJ0KGRhdGEpO1xufVxuXG4vKiogSW5pdGlhbGl6ZSB0aGUgY29sbGVjdGlvbiBpZiBlbXB0eS4gKi9cbmlmIChTdHVmZnMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcbiAgaWYgKE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0RGF0YSkge1xuICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBkZWZhdWx0IGRhdGEuJyk7XG4gICAgTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHREYXRhLm1hcChkYXRhID0+IGFkZERhdGEoZGF0YSkpO1xuICB9XG59XG5cbi8qKiBUaGlzIHN1YnNjcmlwdGlvbiBwdWJsaXNoZXMgb25seSB0aGUgZG9jdW1lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGUgbG9nZ2VkIGluIHVzZXIgKi9cbk1ldGVvci5wdWJsaXNoKCdTdHVmZicsIGZ1bmN0aW9uIHB1Ymxpc2goKSB7XG4gIGlmICh0aGlzLnVzZXJJZCkge1xuICAgIGNvbnN0IHVzZXJuYW1lID0gTWV0ZW9yLnVzZXJzLmZpbmRPbmUodGhpcy51c2VySWQpLnVzZXJuYW1lO1xuICAgIHJldHVybiBTdHVmZnMuZmluZCh7IG93bmVyOiB1c2VybmFtZSB9KTtcbiAgfVxuICByZXR1cm4gdGhpcy5yZWFkeSgpO1xufSk7XG5cbi8qKiBUaGlzIHN1YnNjcmlwdGlvbiBwdWJsaXNoZXMgYWxsIGRvY3VtZW50cyByZWdhcmRsZXNzIG9mIHVzZXIsIGJ1dCBvbmx5IGlmIHRoZSBsb2dnZWQgaW4gdXNlciBpcyB0aGUgQWRtaW4uICovXG5NZXRlb3IucHVibGlzaCgnU3R1ZmZBZG1pbicsIGZ1bmN0aW9uIHB1Ymxpc2goKSB7XG4gIGlmICh0aGlzLnVzZXJJZCAmJiBSb2xlcy51c2VySXNJblJvbGUodGhpcy51c2VySWQsICdhZG1pbicpKSB7XG4gICAgcmV0dXJuIFN0dWZmcy5maW5kKCk7XG4gIH1cbiAgcmV0dXJuIHRoaXMucmVhZHkoKTtcbn0pO1xuIiwiaW1wb3J0ICcvaW1wb3J0cy9zdGFydHVwL2JvdGgnO1xuaW1wb3J0ICcvaW1wb3J0cy9zdGFydHVwL3NlcnZlcic7XG4iXX0=
