'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var passportLocalMongoose = require('passport-local-mongoose');

// create a schema
var userSchema = new Schema({
  firstName: String,
  lastName: String,
  city: String,
  country: String
});

userSchema.plugin(passportLocalMongoose, {
  'usernameField': 'email'
});

userSchema.statics.load = function (id, cb) {
  this.findOne({
    _id: id
  }).exec(cb);
};

var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
