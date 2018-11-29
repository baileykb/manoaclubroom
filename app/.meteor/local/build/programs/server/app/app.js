var require = meteorInstall({"imports":{"api":{"club":{"club.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/api/club/club.js                                                                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.export({
  Club: () => Club,
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
const Club = new Mongo.Collection('Clubs');
/** Create a schema to constrain the structure of documents associated with this collection. */

const ClubSchema = new SimpleSchema({
  name: String,
  location: String,
  time: String,
  interest: String,
  image: String,
  description: String,
  owner: String,
  website: String
}, {
  tracker: Tracker
});
/** Attach this schema to the collection. */

Club.attachSchema(ClubSchema);
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

}}},"startup":{"both":{"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/startup/both/index.js                                                                                  //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
module.link("/imports/api/club");
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
let Club;
module.link("../../api/club/club.js", {
  Club(v) {
    Club = v;
  }

}, 2);

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
  if (this.userId && Roles.userIsInRole(this.userId, 'clubAdmin')) {
    return Club.find();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY2x1Yi9jbHViLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9jbHViL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvYm90aC9pbmRleC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9hY2NvdW50cy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9jbHViLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnQiLCJDbHViIiwiQ2x1YlNjaGVtYSIsIk1vbmdvIiwibGluayIsInYiLCJTaW1wbGVTY2hlbWEiLCJkZWZhdWx0IiwiVHJhY2tlciIsIkNvbGxlY3Rpb24iLCJuYW1lIiwiU3RyaW5nIiwibG9jYXRpb24iLCJ0aW1lIiwiaW50ZXJlc3QiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwib3duZXIiLCJ3ZWJzaXRlIiwidHJhY2tlciIsImF0dGFjaFNjaGVtYSIsIk1ldGVvciIsIkFjY291bnRzIiwiUm9sZXMiLCJjcmVhdGVVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsInJvbGUiLCJjb25zb2xlIiwibG9nIiwidXNlcklEIiwidXNlcm5hbWUiLCJhZGRVc2Vyc1RvUm9sZXMiLCJ1c2VycyIsImZpbmQiLCJjb3VudCIsInNldHRpbmdzIiwiZGVmYXVsdEFjY291bnRzIiwibWFwIiwiYWRkRGF0YSIsImRhdGEiLCJpbnNlcnQiLCJkZWZhdWx0RGF0YSIsInB1Ymxpc2giLCJ1c2VySWQiLCJyZWFkeSIsInVzZXJJc0luUm9sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBQ0MsTUFBSSxFQUFD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d0MsTUFBTCxDQUFZRCxJQUFaO0FBQ0Q7QUFFRDs7O0FBQ0EsSUFBSXZDLElBQUksQ0FBQ2lDLElBQUwsR0FBWUMsS0FBWixPQUF3QixDQUE1QixFQUErQjtBQUM3QixNQUFJZCxNQUFNLENBQUNlLFFBQVAsQ0FBZ0JNLFdBQXBCLEVBQWlDO0FBQy9CZCxXQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNBUixVQUFNLENBQUNlLFFBQVAsQ0FBZ0JNLFdBQWhCLENBQTRCSixHQUE1QixDQUFnQ0UsSUFBSSxJQUFJRCxPQUFPLENBQUNDLElBQUQsQ0FBL0M7QUFDRDtBQUNGO0FBRUQ7OztBQUNBbkIsTUFBTSxDQUFDc0IsT0FBUCxDQUFlLE1BQWYsRUFBdUIsU0FBU0EsT0FBVCxHQUFtQjtBQUN4QyxNQUFJLEtBQUtDLE1BQVQsRUFBaUI7QUFDZixXQUFPM0MsSUFBSSxDQUFDaUMsSUFBTCxFQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFLVyxLQUFMLEVBQVA7QUFDRCxDQUxEO0FBT0E7O0FBQ0F4QixNQUFNLENBQUNzQixPQUFQLENBQWUsV0FBZixFQUE0QixTQUFTQSxPQUFULEdBQW1CO0FBQzdDLE1BQUksS0FBS0MsTUFBTCxJQUFlckIsS0FBSyxDQUFDdUIsWUFBTixDQUFtQixLQUFLRixNQUF4QixFQUFnQyxXQUFoQyxDQUFuQixFQUFpRTtBQUMvRCxXQUFPM0MsSUFBSSxDQUFDaUMsSUFBTCxFQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFLVyxLQUFMLEVBQVA7QUFDRCxDQUxELEU7Ozs7Ozs7Ozs7O0FDM0JBOUMsTUFBTSxDQUFDSyxJQUFQLENBQVksZUFBWjtBQUE2QkwsTUFBTSxDQUFDSyxJQUFQLENBQVksV0FBWixFOzs7Ozs7Ozs7OztBQ0E3QkwsTUFBTSxDQUFDSyxJQUFQLENBQVksdUJBQVo7QUFBcUNMLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZLHlCQUFaLEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcclxuaW1wb3J0IFNpbXBsZVNjaGVtYSBmcm9tICdzaW1wbC1zY2hlbWEnO1xyXG5pbXBvcnQgeyBUcmFja2VyIH0gZnJvbSAnbWV0ZW9yL3RyYWNrZXInO1xyXG5cclxuLyoqIENyZWF0ZSBhIE1ldGVvciBjb2xsZWN0aW9uLiAqL1xyXG5jb25zdCBDbHViID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ0NsdWJzJyk7XHJcblxyXG4vKiogQ3JlYXRlIGEgc2NoZW1hIHRvIGNvbnN0cmFpbiB0aGUgc3RydWN0dXJlIG9mIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb2xsZWN0aW9uLiAqL1xyXG5jb25zdCBDbHViU2NoZW1hID0gbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgbmFtZTogU3RyaW5nLFxyXG4gIGxvY2F0aW9uOiBTdHJpbmcsXHJcbiAgdGltZTogU3RyaW5nLFxyXG4gIGludGVyZXN0OiBTdHJpbmcsXHJcbiAgaW1hZ2U6IFN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogU3RyaW5nLFxyXG4gICAgICBvd25lcjogU3RyaW5nLFxyXG4gIHdlYnNpdGU6IFN0cmluZyxcclxuXHJcbn0sIHsgdHJhY2tlcjogVHJhY2tlciB9KTtcclxuXHJcbi8qKiBBdHRhY2ggdGhpcyBzY2hlbWEgdG8gdGhlIGNvbGxlY3Rpb24uICovXHJcbkNsdWIuYXR0YWNoU2NoZW1hKENsdWJTY2hlbWEpO1xyXG5cclxuLyoqIE1ha2UgdGhlIGNvbGxlY3Rpb24gYW5kIHNjaGVtYSBhdmFpbGFibGUgdG8gb3RoZXIgY29kZS4gKi9cclxuZXhwb3J0IHsgQ2x1YiwgQ2x1YlNjaGVtYSB9O1xyXG4iLCJpbXBvcnQgJy4vY2x1Yi5qcyc7XHJcbiIsImltcG9ydCAnL2ltcG9ydHMvYXBpL2NsdWInO1xyXG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcclxuaW1wb3J0IHsgQWNjb3VudHMgfSBmcm9tICdtZXRlb3IvYWNjb3VudHMtYmFzZSc7XHJcbmltcG9ydCB7IFJvbGVzIH0gZnJvbSAnbWV0ZW9yL2FsYW5uaW5nOnJvbGVzJztcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVVzZXIoZW1haWwsIHBhc3N3b3JkLCByb2xlKSB7XHJcbiAgY29uc29sZS5sb2coYCAgQ3JlYXRpbmcgdXNlciAke2VtYWlsfS5gKTtcclxuICBjb25zdCB1c2VySUQgPSBBY2NvdW50cy5jcmVhdGVVc2VyKHtcclxuICAgIHVzZXJuYW1lOiBlbWFpbCxcclxuICAgIGVtYWlsOiBlbWFpbCxcclxuICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICB9KTtcclxuICBpZiAocm9sZSA9PT0gJ2FkbWluJykge1xyXG4gICAgUm9sZXMuYWRkVXNlcnNUb1JvbGVzKHVzZXJJRCwgJ2FkbWluJyk7XHJcbiAgfVxyXG4gIGlmIChyb2xlID09PSAnY2x1YkFkbWluJykge1xyXG4gICAgUm9sZXMuYWRkVXNlcnNUb1JvbGVzKHVzZXJJRCwgJ2NsdWJBZG1pbicpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqIFdoZW4gcnVubmluZyBhcHAgZm9yIGZpcnN0IHRpbWUsIHBhc3MgYSBzZXR0aW5ncyBmaWxlIHRvIHNldCB1cCBhIGRlZmF1bHQgdXNlciBhY2NvdW50LiAqL1xyXG5pZiAoTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XHJcbiAgaWYgKE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0QWNjb3VudHMpIHtcclxuICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyB0aGUgZGVmYXVsdCB1c2VyKHMpJyk7XHJcbiAgICBNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdEFjY291bnRzLm1hcCgoeyBlbWFpbCwgcGFzc3dvcmQsIHJvbGUgfSkgPT4gY3JlYXRlVXNlcihlbWFpbCwgcGFzc3dvcmQsIHJvbGUpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ0Nhbm5vdCBpbml0aWFsaXplIHRoZSBkYXRhYmFzZSEgIFBsZWFzZSBpbnZva2UgbWV0ZW9yIHdpdGggYSBzZXR0aW5ncyBmaWxlLicpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcclxuaW1wb3J0IHsgUm9sZXMgfSBmcm9tICdtZXRlb3IvYWxhbm5pbmc6cm9sZXMnO1xyXG5pbXBvcnQgeyBDbHViIH0gZnJvbSAnLi4vLi4vYXBpL2NsdWIvY2x1Yi5qcyc7XHJcblxyXG4vKiogSW5pdGlhbGl6ZSB0aGUgZGF0YWJhc2Ugd2l0aCBhIGRlZmF1bHQgZGF0YSBkb2N1bWVudC4gKi9cclxuZnVuY3Rpb24gYWRkRGF0YShkYXRhKSB7XHJcbmNvbnNvbGUubG9nKGAgIEFkZGluZzogJHtkYXRhLm5hbWV9YCk7XHJcbiAgQ2x1Yi5pbnNlcnQoZGF0YSk7XHJcbn1cclxuXHJcbi8qKiBJbml0aWFsaXplIHRoZSBjb2xsZWN0aW9uIGlmIGVtcHR5LiAqL1xyXG5pZiAoQ2x1Yi5maW5kKCkuY291bnQoKSA9PT0gMCkge1xyXG4gIGlmIChNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdERhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBkZWZhdWx0IGRhdGEuJyk7XHJcbiAgICBNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdERhdGEubWFwKGRhdGEgPT4gYWRkRGF0YShkYXRhKSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiogVGhpcyBzdWJzY3JpcHRpb24gcHVibGlzaGVzIG9ubHkgdGhlIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIGxvZ2dlZCBpbiB1c2VyICovXHJcbk1ldGVvci5wdWJsaXNoKCdDbHViJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcclxuICBpZiAodGhpcy51c2VySWQpIHtcclxuICAgIHJldHVybiBDbHViLmZpbmQoKTtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXMucmVhZHkoKTtcclxufSk7XHJcblxyXG4vKiogVGhpcyBzdWJzY3JpcHRpb24gcHVibGlzaGVzIGFsbCBkb2N1bWVudHMgcmVnYXJkbGVzcyBvZiB1c2VyLCBidXQgb25seSBpZiB0aGUgbG9nZ2VkIGluIHVzZXIgaXMgdGhlIEFkbWluLiAqL1xyXG5NZXRlb3IucHVibGlzaCgnQ2x1YkFkbWluJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcclxuICBpZiAodGhpcy51c2VySWQgJiYgUm9sZXMudXNlcklzSW5Sb2xlKHRoaXMudXNlcklkLCAnY2x1YkFkbWluJykpIHtcclxuICAgIHJldHVybiBDbHViLmZpbmQoKTtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXMucmVhZHkoKTtcclxufSk7XHJcbiIsImltcG9ydCAnLi9hY2NvdW50cy5qcyc7XHJcbmltcG9ydCAnLi9jbHViLmpzJztcclxuIiwiaW1wb3J0ICcvaW1wb3J0cy9zdGFydHVwL2JvdGgnO1xyXG5pbXBvcnQgJy9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyJztcclxuIl19
