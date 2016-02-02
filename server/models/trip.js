var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var crypto = require('crypto');

var TripSchema = mongoose.Schema({
  startLoc: {type: String},
  endLoc: {type: String},
  oneway: {type: Boolean},
  roundtrip: {type: Boolean},
  departureDate: {type: String},
  arrivalDate: {type: String},
  pickupLoc: {type:String}, // Pickup and drop off locations will be the same for a roundtrip voyage
  dropOffLoc: {type: String},
  departureTime: {type: String},
  arrivalTime: {type: String},
  carMake: {type: String},
  carModel: {type: String},
  carMPG: {type: String},
  seatsAvailable: {type: String},
  bagsAvailable: {type: String},
  amountPerSeat: {type: String},
  message: {type: String},
  smoking: {type: Boolean}, // will the driver allow smoking?
  pets: {type: Boolean}, // will the driver allow pets?
  packages: {type: Boolean}, //will the driver deliver a package instead of take passenger?
  barter: {type: Boolean}// will the driver accept barter offers instead?
  },{timestamps: true});

module.exports = mongoose.model('Trip', TripSchema);
