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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY2x1Yi9jbHViLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9jbHViL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvYm90aC9pbmRleC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9hY2NvdW50cy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9jbHViLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnQiLCJDbHViIiwiQ2x1YlNjaGVtYSIsIk1vbmdvIiwibGluayIsInYiLCJTaW1wbGVTY2hlbWEiLCJkZWZhdWx0IiwiVHJhY2tlciIsIkNvbGxlY3Rpb24iLCJuYW1lIiwiU3RyaW5nIiwibG9jYXRpb24iLCJ0aW1lIiwiaW50ZXJlc3QiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwib3duZXIiLCJ3ZWJzaXRlIiwidHJhY2tlciIsImF0dGFjaFNjaGVtYSIsIk1ldGVvciIsIkFjY291bnRzIiwiUm9sZXMiLCJjcmVhdGVVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsInJvbGUiLCJjb25zb2xlIiwibG9nIiwidXNlcklEIiwidXNlcm5hbWUiLCJhZGRVc2Vyc1RvUm9sZXMiLCJ1c2VycyIsImZpbmQiLCJjb3VudCIsInNldHRpbmdzIiwiZGVmYXVsdEFjY291bnRzIiwibWFwIiwiYWRkRGF0YSIsImRhdGEiLCJpbnNlcnQiLCJkZWZhdWx0RGF0YSIsInB1Ymxpc2giLCJ1c2VySWQiLCJyZWFkeSIsInVzZXJJc0luUm9sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBQ0MsTUFBSSxFQUFD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d0MsTUFBTCxDQUFZRCxJQUFaO0FBQ0Q7QUFFRDs7O0FBQ0EsSUFBSXZDLElBQUksQ0FBQ2lDLElBQUwsR0FBWUMsS0FBWixPQUF3QixDQUE1QixFQUErQjtBQUM3QixNQUFJZCxNQUFNLENBQUNlLFFBQVAsQ0FBZ0JNLFdBQXBCLEVBQWlDO0FBQy9CZCxXQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNBUixVQUFNLENBQUNlLFFBQVAsQ0FBZ0JNLFdBQWhCLENBQTRCSixHQUE1QixDQUFnQ0UsSUFBSSxJQUFJRCxPQUFPLENBQUNDLElBQUQsQ0FBL0M7QUFDRDtBQUNGO0FBRUQ7OztBQUNBbkIsTUFBTSxDQUFDc0IsT0FBUCxDQUFlLE1BQWYsRUFBdUIsU0FBU0EsT0FBVCxHQUFtQjtBQUN4QyxNQUFJLEtBQUtDLE1BQVQsRUFBaUI7QUFDZixXQUFPM0MsSUFBSSxDQUFDaUMsSUFBTCxFQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFLVyxLQUFMLEVBQVA7QUFDRCxDQUxEO0FBT0E7O0FBQ0F4QixNQUFNLENBQUNzQixPQUFQLENBQWUsV0FBZixFQUE0QixTQUFTQSxPQUFULEdBQW1CO0FBQzdDLE1BQUksS0FBS0MsTUFBTCxJQUFlckIsS0FBSyxDQUFDdUIsWUFBTixDQUFtQixLQUFLRixNQUF4QixFQUFnQyxXQUFoQyxDQUFuQixFQUFpRTtBQUMvRCxXQUFPM0MsSUFBSSxDQUFDaUMsSUFBTCxFQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFLVyxLQUFMLEVBQVA7QUFDRCxDQUxELEU7Ozs7Ozs7Ozs7O0FDM0JBOUMsTUFBTSxDQUFDSyxJQUFQLENBQVksZUFBWjtBQUE2QkwsTUFBTSxDQUFDSyxJQUFQLENBQVksV0FBWixFOzs7Ozs7Ozs7OztBQ0E3QkwsTUFBTSxDQUFDSyxJQUFQLENBQVksdUJBQVo7QUFBcUNMLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZLHlCQUFaLEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbmltcG9ydCBTaW1wbGVTY2hlbWEgZnJvbSAnc2ltcGwtc2NoZW1hJztcbmltcG9ydCB7IFRyYWNrZXIgfSBmcm9tICdtZXRlb3IvdHJhY2tlcic7XG5cbi8qKiBDcmVhdGUgYSBNZXRlb3IgY29sbGVjdGlvbi4gKi9cbmNvbnN0IENsdWIgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignQ2x1YnMnKTtcblxuLyoqIENyZWF0ZSBhIHNjaGVtYSB0byBjb25zdHJhaW4gdGhlIHN0cnVjdHVyZSBvZiBkb2N1bWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29sbGVjdGlvbi4gKi9cbmNvbnN0IENsdWJTY2hlbWEgPSBuZXcgU2ltcGxlU2NoZW1hKHtcbiAgbmFtZTogU3RyaW5nLFxuICBsb2NhdGlvbjogU3RyaW5nLFxuICB0aW1lOiBTdHJpbmcsXG4gIGludGVyZXN0OiBTdHJpbmcsXG4gIGltYWdlOiBTdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBTdHJpbmcsXG4gICAgICBvd25lcjogU3RyaW5nLFxuICB3ZWJzaXRlOiBTdHJpbmcsXG5cbn0sIHsgdHJhY2tlcjogVHJhY2tlciB9KTtcblxuLyoqIEF0dGFjaCB0aGlzIHNjaGVtYSB0byB0aGUgY29sbGVjdGlvbi4gKi9cbkNsdWIuYXR0YWNoU2NoZW1hKENsdWJTY2hlbWEpO1xuXG4vKiogTWFrZSB0aGUgY29sbGVjdGlvbiBhbmQgc2NoZW1hIGF2YWlsYWJsZSB0byBvdGhlciBjb2RlLiAqL1xuZXhwb3J0IHsgQ2x1YiwgQ2x1YlNjaGVtYSB9O1xuIiwiaW1wb3J0ICcuL2NsdWIuanMnO1xuIiwiaW1wb3J0ICcvaW1wb3J0cy9hcGkvY2x1Yic7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IEFjY291bnRzIH0gZnJvbSAnbWV0ZW9yL2FjY291bnRzLWJhc2UnO1xuaW1wb3J0IHsgUm9sZXMgfSBmcm9tICdtZXRlb3IvYWxhbm5pbmc6cm9sZXMnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZXIoZW1haWwsIHBhc3N3b3JkLCByb2xlKSB7XG4gIGNvbnNvbGUubG9nKGAgIENyZWF0aW5nIHVzZXIgJHtlbWFpbH0uYCk7XG4gIGNvbnN0IHVzZXJJRCA9IEFjY291bnRzLmNyZWF0ZVVzZXIoe1xuICAgIHVzZXJuYW1lOiBlbWFpbCxcbiAgICBlbWFpbDogZW1haWwsXG4gICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICB9KTtcbiAgaWYgKHJvbGUgPT09ICdhZG1pbicpIHtcbiAgICBSb2xlcy5hZGRVc2Vyc1RvUm9sZXModXNlcklELCAnYWRtaW4nKTtcbiAgfVxuICBpZiAocm9sZSA9PT0gJ2NsdWJBZG1pbicpIHtcbiAgICBSb2xlcy5hZGRVc2Vyc1RvUm9sZXModXNlcklELCAnY2x1YkFkbWluJyk7XG4gIH1cbn1cblxuLyoqIFdoZW4gcnVubmluZyBhcHAgZm9yIGZpcnN0IHRpbWUsIHBhc3MgYSBzZXR0aW5ncyBmaWxlIHRvIHNldCB1cCBhIGRlZmF1bHQgdXNlciBhY2NvdW50LiAqL1xuaWYgKE1ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuICBpZiAoTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRBY2NvdW50cykge1xuICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyB0aGUgZGVmYXVsdCB1c2VyKHMpJyk7XG4gICAgTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHRBY2NvdW50cy5tYXAoKHsgZW1haWwsIHBhc3N3b3JkLCByb2xlIH0pID0+IGNyZWF0ZVVzZXIoZW1haWwsIHBhc3N3b3JkLCByb2xlKSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ0Nhbm5vdCBpbml0aWFsaXplIHRoZSBkYXRhYmFzZSEgIFBsZWFzZSBpbnZva2UgbWV0ZW9yIHdpdGggYSBzZXR0aW5ncyBmaWxlLicpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IFJvbGVzIH0gZnJvbSAnbWV0ZW9yL2FsYW5uaW5nOnJvbGVzJztcbmltcG9ydCB7IENsdWIgfSBmcm9tICcuLi8uLi9hcGkvY2x1Yi9jbHViLmpzJztcblxuLyoqIEluaXRpYWxpemUgdGhlIGRhdGFiYXNlIHdpdGggYSBkZWZhdWx0IGRhdGEgZG9jdW1lbnQuICovXG5mdW5jdGlvbiBhZGREYXRhKGRhdGEpIHtcbmNvbnNvbGUubG9nKGAgIEFkZGluZzogJHtkYXRhLm5hbWV9YCk7XG4gIENsdWIuaW5zZXJ0KGRhdGEpO1xufVxuXG4vKiogSW5pdGlhbGl6ZSB0aGUgY29sbGVjdGlvbiBpZiBlbXB0eS4gKi9cbmlmIChDbHViLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG4gIGlmIChNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdERhdGEpIHtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgZGVmYXVsdCBkYXRhLicpO1xuICAgIE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0RGF0YS5tYXAoZGF0YSA9PiBhZGREYXRhKGRhdGEpKTtcbiAgfVxufVxuXG4vKiogVGhpcyBzdWJzY3JpcHRpb24gcHVibGlzaGVzIG9ubHkgdGhlIGRvY3VtZW50cyBhc3NvY2lhdGVkIHdpdGggdGhlIGxvZ2dlZCBpbiB1c2VyICovXG5NZXRlb3IucHVibGlzaCgnQ2x1YicsIGZ1bmN0aW9uIHB1Ymxpc2goKSB7XG4gIGlmICh0aGlzLnVzZXJJZCkge1xuICAgIHJldHVybiBDbHViLmZpbmQoKTtcbiAgfVxuICByZXR1cm4gdGhpcy5yZWFkeSgpO1xufSk7XG5cbi8qKiBUaGlzIHN1YnNjcmlwdGlvbiBwdWJsaXNoZXMgYWxsIGRvY3VtZW50cyByZWdhcmRsZXNzIG9mIHVzZXIsIGJ1dCBvbmx5IGlmIHRoZSBsb2dnZWQgaW4gdXNlciBpcyB0aGUgQWRtaW4uICovXG5NZXRlb3IucHVibGlzaCgnQ2x1YkFkbWluJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcbiAgaWYgKHRoaXMudXNlcklkICYmIFJvbGVzLnVzZXJJc0luUm9sZSh0aGlzLnVzZXJJZCwgJ2NsdWJBZG1pbicpKSB7XG4gICAgcmV0dXJuIENsdWIuZmluZCgpO1xuICB9XG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XG59KTtcbiIsImltcG9ydCAnLi9hY2NvdW50cy5qcyc7XG5pbXBvcnQgJy4vY2x1Yi5qcyc7XG4iLCJpbXBvcnQgJy9pbXBvcnRzL3N0YXJ0dXAvYm90aCc7XG5pbXBvcnQgJy9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyJztcbiJdfQ==
