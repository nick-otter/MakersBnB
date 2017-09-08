'use string';

var bookshelf = require('../bookshelf');
var Listing = bookshelf.Model.extend({
  tableName: 'bookings',
});

module.exports = Booking;
