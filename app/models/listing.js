'use string';

var bookshelf = require('../bookshelf');
var Listing = bookshelf.Model.extend({
  tableName: 'listings',
});

module.exports = Listing;
