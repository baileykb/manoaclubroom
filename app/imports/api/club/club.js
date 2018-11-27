import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Club = new Mongo.Collection('Stuffs');

/** Create a schema to constrain the structure of documents associated with this collection. */
const ClubSchema = new SimpleSchema({
  name: String,
<<<<<<< HEAD:app/imports/api/stuff/stuff.js
<<<<<<< HEAD
=======
>>>>>>> 62d590a0e9cf191ccd09f940fbcc027e916d0be2:app/imports/api/club/club.js
  location: String,
  time: String,
  interest: String,
  image: String,
  description: String,
<<<<<<< HEAD:app/imports/api/stuff/stuff.js
=======
  quantity: Number,
  owner: String,
  condition: {
    type: String,
    allowedValues: ['excellent', 'good', 'fair', 'poor'],
    defaultValue: 'good',
  },
>>>>>>> issue-2-v2
=======
  owner: String,
  website: String,
>>>>>>> 62d590a0e9cf191ccd09f940fbcc027e916d0be2:app/imports/api/club/club.js
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Club.attachSchema(ClubSchema);

/** Make the collection and schema available to other code. */
export { Club, ClubSchema };
