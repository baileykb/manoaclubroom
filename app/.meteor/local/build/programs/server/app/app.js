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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY2x1Yi9jbHViLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9jbHViL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvYm90aC9pbmRleC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9hY2NvdW50cy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zdGFydHVwL3NlcnZlci9jbHViLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL3N0YXJ0dXAvc2VydmVyL2luZGV4LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnQiLCJDbHViIiwiQ2x1YlNjaGVtYSIsIk1vbmdvIiwibGluayIsInYiLCJTaW1wbGVTY2hlbWEiLCJkZWZhdWx0IiwiVHJhY2tlciIsIkNvbGxlY3Rpb24iLCJuYW1lIiwiU3RyaW5nIiwibG9jYXRpb24iLCJ0aW1lIiwiaW50ZXJlc3QiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwib3duZXIiLCJ3ZWJzaXRlIiwidHJhY2tlciIsImF0dGFjaFNjaGVtYSIsIk1ldGVvciIsIkFjY291bnRzIiwiUm9sZXMiLCJjcmVhdGVVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsInJvbGUiLCJjb25zb2xlIiwibG9nIiwidXNlcklEIiwidXNlcm5hbWUiLCJhZGRVc2Vyc1RvUm9sZXMiLCJ1c2VycyIsImZpbmQiLCJjb3VudCIsInNldHRpbmdzIiwiZGVmYXVsdEFjY291bnRzIiwibWFwIiwiYWRkRGF0YSIsImRhdGEiLCJpbnNlcnQiLCJkZWZhdWx0RGF0YSIsInB1Ymxpc2giLCJ1c2VySWQiLCJyZWFkeSIsInVzZXJJc0luUm9sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBQ0MsTUFBSSxFQUFD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d0MsTUFBTCxDQUFZRCxJQUFaO0FBQ0Q7QUFFRDs7O0FBQ0EsSUFBSXZDLElBQUksQ0FBQ2lDLElBQUwsR0FBWUMsS0FBWixPQUF3QixDQUE1QixFQUErQjtBQUM3QixNQUFJZCxNQUFNLENBQUNlLFFBQVAsQ0FBZ0JNLFdBQXBCLEVBQWlDO0FBQy9CZCxXQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNBUixVQUFNLENBQUNlLFFBQVAsQ0FBZ0JNLFdBQWhCLENBQTRCSixHQUE1QixDQUFnQ0UsSUFBSSxJQUFJRCxPQUFPLENBQUNDLElBQUQsQ0FBL0M7QUFDRDtBQUNGO0FBRUQ7OztBQUNBbkIsTUFBTSxDQUFDc0IsT0FBUCxDQUFlLE1BQWYsRUFBdUIsU0FBU0EsT0FBVCxHQUFtQjtBQUN4QyxNQUFJLEtBQUtDLE1BQVQsRUFBaUI7QUFDZixXQUFPM0MsSUFBSSxDQUFDaUMsSUFBTCxFQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFLVyxLQUFMLEVBQVA7QUFDRCxDQUxEO0FBT0E7O0FBQ0F4QixNQUFNLENBQUNzQixPQUFQLENBQWUsV0FBZixFQUE0QixTQUFTQSxPQUFULEdBQW1CO0FBQzdDLE1BQUksS0FBS0MsTUFBTCxJQUFlckIsS0FBSyxDQUFDdUIsWUFBTixDQUFtQixLQUFLRixNQUF4QixFQUFnQyxXQUFoQyxDQUFuQixFQUFpRTtBQUMvRCxXQUFPM0MsSUFBSSxDQUFDaUMsSUFBTCxFQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFLVyxLQUFMLEVBQVA7QUFDRCxDQUxELEU7Ozs7Ozs7Ozs7O0FDM0JBOUMsTUFBTSxDQUFDSyxJQUFQLENBQVksZUFBWjtBQUE2QkwsTUFBTSxDQUFDSyxJQUFQLENBQVksV0FBWixFOzs7Ozs7Ozs7OztBQ0E3QkwsTUFBTSxDQUFDSyxJQUFQLENBQVksdUJBQVo7QUFBcUNMLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZLHlCQUFaLEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbmltcG9ydCBTaW1wbGVTY2hlbWEgZnJvbSAnc2ltcGwtc2NoZW1hJztcbmltcG9ydCB7IFRyYWNrZXIgfSBmcm9tICdtZXRlb3IvdHJhY2tlcic7XG5cbi8qKiBDcmVhdGUgYSBNZXRlb3IgY29sbGVjdGlvbi4gKi9cbmNvbnN0IENsdWIgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignQ2x1YnMnKTtcblxuLyoqIENyZWF0ZSBhIHNjaGVtYSB0byBjb25zdHJhaW4gdGhlIHN0cnVjdHVyZSBvZiBkb2N1bWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29sbGVjdGlvbi4gKi9cbmNvbnN0IENsdWJTY2hlbWEgPSBuZXcgU2ltcGxlU2NoZW1hKHtcbiAgbmFtZTogU3RyaW5nLFxuICBsb2NhdGlvbjogU3RyaW5nLFxuICB0aW1lOiBTdHJpbmcsXG4gIGludGVyZXN0OiBTdHJpbmcsXG4gIGltYWdlOiBTdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBTdHJpbmcsXG4gIG93bmVyOiBTdHJpbmcsXG4gIHdlYnNpdGU6IFN0cmluZyxcblxufSwgeyB0cmFja2VyOiBUcmFja2VyIH0pO1xuXG4vKiogQXR0YWNoIHRoaXMgc2NoZW1hIHRvIHRoZSBjb2xsZWN0aW9uLiAqL1xuQ2x1Yi5hdHRhY2hTY2hlbWEoQ2x1YlNjaGVtYSk7XG5cbi8qKiBNYWtlIHRoZSBjb2xsZWN0aW9uIGFuZCBzY2hlbWEgYXZhaWxhYmxlIHRvIG90aGVyIGNvZGUuICovXG5leHBvcnQgeyBDbHViLCBDbHViU2NoZW1hIH07XG4iLCJpbXBvcnQgJy4vY2x1Yi5qcyc7XG4iLCJpbXBvcnQgJy9pbXBvcnRzL2FwaS9jbHViJztcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgQWNjb3VudHMgfSBmcm9tICdtZXRlb3IvYWNjb3VudHMtYmFzZSc7XG5pbXBvcnQgeyBSb2xlcyB9IGZyb20gJ21ldGVvci9hbGFubmluZzpyb2xlcyc7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblxuZnVuY3Rpb24gY3JlYXRlVXNlcihlbWFpbCwgcGFzc3dvcmQsIHJvbGUpIHtcbiAgY29uc29sZS5sb2coYCAgQ3JlYXRpbmcgdXNlciAke2VtYWlsfS5gKTtcbiAgY29uc3QgdXNlcklEID0gQWNjb3VudHMuY3JlYXRlVXNlcih7XG4gICAgdXNlcm5hbWU6IGVtYWlsLFxuICAgIGVtYWlsOiBlbWFpbCxcbiAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gIH0pO1xuICBpZiAocm9sZSA9PT0gJ2FkbWluJykge1xuICAgIFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySUQsICdhZG1pbicpO1xuICB9XG4gIGlmIChyb2xlID09PSAnY2x1YkFkbWluJykge1xuICAgIFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySUQsICdjbHViQWRtaW4nKTtcbiAgfVxufVxuXG4vKiogV2hlbiBydW5uaW5nIGFwcCBmb3IgZmlyc3QgdGltZSwgcGFzcyBhIHNldHRpbmdzIGZpbGUgdG8gc2V0IHVwIGEgZGVmYXVsdCB1c2VyIGFjY291bnQuICovXG5pZiAoTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG4gIGlmIChNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdEFjY291bnRzKSB7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIHRoZSBkZWZhdWx0IHVzZXIocyknKTtcbiAgICBNZXRlb3Iuc2V0dGluZ3MuZGVmYXVsdEFjY291bnRzLm1hcCgoeyBlbWFpbCwgcGFzc3dvcmQsIHJvbGUgfSkgPT4gY3JlYXRlVXNlcihlbWFpbCwgcGFzc3dvcmQsIHJvbGUpKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnQ2Fubm90IGluaXRpYWxpemUgdGhlIGRhdGFiYXNlISAgUGxlYXNlIGludm9rZSBtZXRlb3Igd2l0aCBhIHNldHRpbmdzIGZpbGUuJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgUm9sZXMgfSBmcm9tICdtZXRlb3IvYWxhbm5pbmc6cm9sZXMnO1xuaW1wb3J0IHsgQ2x1YiB9IGZyb20gJy4uLy4uL2FwaS9jbHViL2NsdWIuanMnO1xuXG4vKiogSW5pdGlhbGl6ZSB0aGUgZGF0YWJhc2Ugd2l0aCBhIGRlZmF1bHQgZGF0YSBkb2N1bWVudC4gKi9cbmZ1bmN0aW9uIGFkZERhdGEoZGF0YSkge1xuY29uc29sZS5sb2coYCAgQWRkaW5nOiAke2RhdGEubmFtZX1gKTtcbiAgQ2x1Yi5pbnNlcnQoZGF0YSk7XG59XG5cbi8qKiBJbml0aWFsaXplIHRoZSBjb2xsZWN0aW9uIGlmIGVtcHR5LiAqL1xuaWYgKENsdWIuZmluZCgpLmNvdW50KCkgPT09IDApIHtcbiAgaWYgKE1ldGVvci5zZXR0aW5ncy5kZWZhdWx0RGF0YSkge1xuICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBkZWZhdWx0IGRhdGEuJyk7XG4gICAgTWV0ZW9yLnNldHRpbmdzLmRlZmF1bHREYXRhLm1hcChkYXRhID0+IGFkZERhdGEoZGF0YSkpO1xuICB9XG59XG5cbi8qKiBUaGlzIHN1YnNjcmlwdGlvbiBwdWJsaXNoZXMgb25seSB0aGUgZG9jdW1lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGUgbG9nZ2VkIGluIHVzZXIgKi9cbk1ldGVvci5wdWJsaXNoKCdDbHViJywgZnVuY3Rpb24gcHVibGlzaCgpIHtcbiAgaWYgKHRoaXMudXNlcklkKSB7XG4gICAgcmV0dXJuIENsdWIuZmluZCgpO1xuICB9XG4gIHJldHVybiB0aGlzLnJlYWR5KCk7XG59KTtcblxuLyoqIFRoaXMgc3Vic2NyaXB0aW9uIHB1Ymxpc2hlcyBhbGwgZG9jdW1lbnRzIHJlZ2FyZGxlc3Mgb2YgdXNlciwgYnV0IG9ubHkgaWYgdGhlIGxvZ2dlZCBpbiB1c2VyIGlzIHRoZSBBZG1pbi4gKi9cbk1ldGVvci5wdWJsaXNoKCdDbHViQWRtaW4nLCBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICBpZiAodGhpcy51c2VySWQgJiYgUm9sZXMudXNlcklzSW5Sb2xlKHRoaXMudXNlcklkLCAnY2x1YkFkbWluJykpIHtcbiAgICByZXR1cm4gQ2x1Yi5maW5kKCk7XG4gIH1cbiAgcmV0dXJuIHRoaXMucmVhZHkoKTtcbn0pO1xuIiwiaW1wb3J0ICcuL2FjY291bnRzLmpzJztcbmltcG9ydCAnLi9jbHViLmpzJztcbiIsImltcG9ydCAnL2ltcG9ydHMvc3RhcnR1cC9ib3RoJztcbmltcG9ydCAnL2ltcG9ydHMvc3RhcnR1cC9zZXJ2ZXInO1xuIl19
