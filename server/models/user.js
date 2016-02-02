var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var crypto = require('crypto');

var UserSchema = mongoose.Schema({
  username: {type: String},
  password: {type: String},
  token: {type: String},
  firstname: {type: String},
  lastname: {type: String},
  address1: {type: String},
  address2: {type: String},
  city: {type: String},
  state: {type: String},
  country: {type: String},
  phone: {type: String},
  age: {type: String},
  sex: {type: String},
  email: {type: String},
  avatar: {type: String}
},{timestamps: true});

module.exports = mongoose.model('User', UserSchema);
