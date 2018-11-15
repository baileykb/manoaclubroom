var require = meteorInstall({"imports":{"api":{"stuff":{"index.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// imports/api/stuff/index.js                                                                   //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
module.link("./stuff.js");
//////////////////////////////////////////////////////////////////////////////////////////////////

},"stuff.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// imports/api/stuff/stuff.js                                                                   //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
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
  location: String,
  time: String,
  interest: String,
  image: String,
  description: String
}, {
  tracker: Tracker
});
/** Attach this schema to the collection. */

Stuffs.attachSchema(StuffSchema);
/** Make the collection and schema available to other code. */
//////////////////////////////////////////////////////////////////////////////////////////////////

}}},"startup":{"both":{"index.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// imports/startup/both/index.js                                                                //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
module.link("/imports/api/stuff");
//////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"accounts.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// imports/startup/server/accounts.js                                                           //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// imports/startup/server/index.js                                                              //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
module.link("./accounts.js");
module.link("./stuff.js");
//////////////////////////////////////////////////////////////////////////////////////////////////

},"stuff.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// imports/startup/server/stuff.js                                                              //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Stuffs;
module.link("../../api/stuff/stuff.js", {
  Stuffs(v) {
    Stuffs = v;
  }

}, 1);

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name}`);
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
    return Stuffs.find();
  }

  return this.ready();
});
//////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"server":{"main.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// server/main.js                                                                               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
module.link("/imports/startup/both");
module.link("/imports/startup/server");
//////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".jsx"
  ]
});

require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvc3R1ZmYvaW5kZXguanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3N0dWZmL3N0dWZmLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvYm90aC9pbmRleC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9hY2NvdW50cy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9pbmRleC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9zdHVmZi5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL21haW4uanMiXSwibmFtZXMiOlsibW9kdWxlIiwibGluayIsImV4cG9ydCIsIlN0dWZmcyIsIlN0dWZmU2NoZW1hIiwiTW9uZ28iLCJ2IiwiU2ltcGxlU2NoZW1hIiwiZGVmYXVsdCIsIlRyYWNrZXIiLCJDb2xsZWN0aW9uIiwibmFtZSIsIlN0cmluZyIsImxvY2F0aW9uIiwidGltZSIsImludGVyZXN0IiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsInRyYWNrZXIiLCJhdHRhY2hTY2hlbWEiLCJNZXRlb3IiLCJBY2NvdW50cyIsIlJvbGVzIiwiY3JlYXRlVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJyb2xlIiwiY29uc29sZSIsImxvZyIsInVzZXJJRCIsInVzZXJuYW1lIiwiYWRkVXNlcnNUb1JvbGVzIiwidXNlcnMiLCJmaW5kIiwiY291bnQiLCJzZXR0aW5ncyIsImRlZmF1bHRBY2NvdW50cyIsIm1hcCIsImFkZERhdGEiLCJkYXRhIiwiaW5zZXJ0IiwiZGVmYXVsdERhdGEiLCJwdWJsaXNoIiwidXNlcklkIiwicmVhZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLFlBQVosRTs7Ozs7Ozs7Ozs7QUNBQUQsTUFBTSxDQUFDRSxNQUFQLENB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QUFJRCxPQUFPLENBQUNDLElBQUQsQ0FBL0M7QUFDRDtBQUNGO0FBRUQ7OztBQUNBbkIsTUFBTSxDQUFDc0IsT0FBUCxDQUFlLE9BQWYsRUFBd0IsU0FBU0EsT0FBVCxHQUFtQjtBQUN6QyxNQUFJLEtBQUtDLE1BQVQsRUFBaUI7QUFDZixXQUFPeEMsTUFBTSxDQUFDOEIsSUFBUCxFQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFLVyxLQUFMLEVBQVA7QUFDRCxDQUxELEU7Ozs7Ozs7Ozs7O0FDbEJBNUMsTUFBTSxDQUFDQyxJQUFQLENBQVksdUJBQVo7QUFBcUNELE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLHlCQUFaLEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHVmZi5qcyc7XG4iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5pbXBvcnQgU2ltcGxlU2NoZW1hIGZyb20gJ3NpbXBsLXNjaGVtYSc7XG5pbXBvcnQgeyBUcmFja2VyIH0gZnJvbSAnbWV0ZW9yL3RyYWNrZXInO1xuXG4vKiogQ3JlYXRlIGEgTWV0ZW9yIGNvbGxlY3Rpb24uICovXG5jb25zdCBTdHVmZnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignU3R1ZmZzJyk7XG5cbi8qKiBDcmVhdGUgYSBzY2hlbWEgdG8gY29uc3RyYWluIHRoZSBzdHJ1Y3R1cmUgb2YgZG9jdW1lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbGxlY3Rpb24uICovXG5jb25zdCBTdHVmZlNjaGVtYSA9IG5ldyBTaW1wbGVTY2hlbWEoe1xuICBuYW1lOiBTdHJpbmcsXG4gIGxvY2F0aW9uOiBTdHJpbmcsXG4gIHRpbWU6IFN0cmluZyxcbiAgaW50ZXJlc3Q6IFN0cmluZyxcbiAgaW1hZ2U6IFN0cmluZyxcbiAgZGVzY3JpcHRpb246IFN0cmluZyxcbn0sIHsgdHJhY2tlcjogVHJhY2tlciB9KTtcblxuLyoqIEF0dGFjaCB0aGlzIHNjaGVtYSB0byB0aGUgY29sbGVjdGlvbi4gKi9cblN0dWZmcy5hdHRhY2hTY2hlbWEoU3R1ZmZTY2hlbWEpO1xuXG4vKiogTWFrZSB0aGUgY29sbGVjdGlvbiBhbmQgc2NoZW1hIGF2YWlsYWJsZSB0byBvdGhlciBjb2RlLiAqL1xuZXhwb3J0IHsgU3R1ZmZzLCBTdHVmZlNjaGVtYSB9O1xuIiwiaW1wb3J0ICcvaW1wb3J0cy9hcGkvc3R1ZmYnO1xuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBBY2NvdW50cyB9IGZyb20gJ21ldGVvci9hY2NvdW50cy1iYXNlJztcbmltcG9ydCB7IFJvbGVzIH0gZnJvbSAnbWV0ZW9yL2FsYW5uaW5nOnJvbGVzJztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXG5mdW5jdGlvbiBjcmVhdGVVc2VyKGVtYWlsLCBwYXNzd29yZCwgcm9sZSkge1xuICBjb25zb2xlLmxvZyhgICBDcmVhdGluZyB1c2VyICR7ZW1haWx9LmApO1xuICBjb25zdCB1c2VySUQgPSBBY2NvdW50cy5jcmVhdGVVc2VyKHtcbiAgICB1c2VybmFtZTogZW1haWwsXG4gICAgZW1haWw6IGVtYWlsLFxuICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgfSk7XG4gIGlmIChyb2xlID09PSAnYWRtaW4nKSB7XG4gICAgUm9sZXMuYWRkVXNlcnNUb1JvbGVzKHVzZXJJRCwgJ2FkbWluJyk7XG4gIH1cbn1cblxuLyoqIFdoZW4gcnVubmluZyBhcHAgZm9yIGZpcnN0IHRpbWUsIHBhc3MgYSBzZXR0aW5ncyBmaWxlIHRvIHNldCB1cCBhIGRlZmF1bHQgdXNlciBhY2NvdW50LiAqL1xuaWYgKE1ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuICBpZiAoTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRBY2NvdW50cykge1xuICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyB0aGUgZGVmYXVsdCB1c2VyKHMpJyk7XG4gICAgTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRBY2NvdW50cy5tYXAoKHsgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0pID0+IGNyZWF0ZVVzZXIoZW1haWwsIHBhc3N3b3JkLCByb2xlKSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ0Nhbm5vdCBpbml0aWFsaXplIHRoZSBkYXRhYmFzZSEgIFBsZWFzZSBpbnZva2UgbWV0ZW9yIHdpdGggYSBzZXR0aW5ncyBmaWxlLicpO1xuICB9XG59XG4iLCJpbXBvcnQgJy4vYWNjb3VudHMuanMnO1xuaW1wb3J0ICcuL3N0dWZmLmpzJztcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgU3R1ZmZzIH0gZnJvbSAnLi4vLi4vYXBpL3N0dWZmL3N0dWZmLmpzJztcblxuLyoqIEluaXRpYWxpemUgdGhlIGRhdGFiYXNlIHdpdGggYSBkZWZhdWx0IGRhdGEgZG9jdW1lbnQuICovXG5mdW5jdGlvbiBhZGREYXRhKGRhdGEpIHtcbiAgY29uc29sZS5sb2coYCAgQWRkaW5nOiAke2RhdGEubmFtZX1gKTtcbiAgU3R1ZmZzLmluc2VydChkYXRhKTtcbn1cblxuLyoqIEluaXRpYWxpemUgdGhlIGNvbGxlY3Rpb24gaWYgZW1wdHkuICovXG5pZiAoU3R1ZmZzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG4gIGlmIChNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdERhdGEpIHtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgZGVmYXVsdCBkYXRhLicpO1xuICAgIE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0RGF0YS5tYXAoZGF0YSA9PiBhZGREYXRhKGRhdGEpKTtcbiAgfVxufVxuXG4vKiogVGhpcyBzdWJzY3JpcHRpb24gcHVibGlzaGVzIG9ubHkgdGhlIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIGxvZ2dlZCBpbiB1c2VyICovXG5NZXRlb3IucHVibGlzaCgnU3R1ZmYnLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICBpZiAodGhpcy51c2VySWQpIHtcbiAgICByZXR1cm4gU3R1ZmZzLmZpbmQoKTtcbiAgfVxuICByZXR1cm4gdGhpcy5yZWFkeSgpO1xufSk7XG4iLCJpbXBvcnQgJy9pbXBvcnRzL3N0YXJ0dXAvYm90aCc7XG5pbXBvcnQgJy9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyJztcbiJdfQ==
