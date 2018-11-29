import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

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
  website: String,

}, { tracker: Tracker });

/** Attach this schema to the collection. */
Club.attachSchema(ClubSchema);

/** Make the collection and schema available to other code. */
export { Club, ClubSchema };
