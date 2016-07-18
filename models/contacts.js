'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var contactsSchema = new Schema({
  name: String,
  email: String,
  address: String,
  phone: String,
  occupation: String,
  user: { type: Schema.ObjectId, ref: 'User', required: true },
  created_at: Date,
  updated_at: Date
});

contactsSchema.statics.load = function (id, cb) {
  this.findOne({
    _id: id
  }).populate('user').exec(cb);
};

var Contact = mongoose.model('Contact', contactsSchema);

// make this available to our users in our Node applications
module.exports = Contact;
